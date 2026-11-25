package com.asad.atlasquest;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.SharedPreferences;
import android.os.Build;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.util.Log;
import android.view.ViewGroup;
import android.webkit.ConsoleMessage;
import android.webkit.JavascriptInterface;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public class MainActivity extends Activity {
    private static final String HOST = "appassets.androidplatform.net";
    private static final String START = "https://" + HOST + "/index.html";
    private WebView web;
    private TextToSpeech tts;
    private volatile boolean ttsReady = false;
    private SharedPreferences prefs;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        prefs = getSharedPreferences("aq", MODE_PRIVATE);
        installCrashLogger();

        web = buildWebView();
        setContentView(web);
        web.loadUrl(START + (prefs.getInt("rendererCrashes", 0) >= 2 ? "?safe=1" : ""));

        showLastCrashIfAny();

        try {
            tts = new TextToSpeech(this, status -> {
                if (status != TextToSpeech.SUCCESS) return;
                try {
                    int r = tts.setLanguage(Locale.UK);
                    if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) r = tts.setLanguage(Locale.US);
                    if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) tts.setLanguage(Locale.ENGLISH);
                    tts.setOnUtteranceProgressListener(new UtteranceProgressListener() {
                        @Override public void onStart(String id) { }
                        @Override public void onDone(String id) { notifyDone(id); }
                        @Override public void onError(String id) { notifyDone(id); }
                    });
                    ttsReady = true;
                } catch (Throwable t) { Log.w("AtlasQuest", "TTS setup failed", t); }
            });
        } catch (Throwable t) { Log.w("AtlasQuest", "TTS unavailable", t); }
    }

    // ---------- WebView ----------
    private WebView buildWebView() {
        WebView w = new WebView(this);
        WebSettings s = w.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccess(false);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setLoadWithOverviewMode(true);
        s.setUseWideViewPort(true);
        w.addJavascriptInterface(new TtsBridge(), "AQTTS");
        w.setWebChromeClient(new WebChromeClient() {
            @Override public boolean onConsoleMessage(ConsoleMessage m) {
                if (m.messageLevel() == ConsoleMessage.MessageLevel.ERROR) Log.e("AtlasQuestJS", m.message() + " @" + m.sourceId() + ":" + m.lineNumber());
                return true;
            }
        });
        w.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest req) {
                if (!HOST.equals(req.getUrl().getHost())) return null;
                String path = req.getUrl().getPath();
                if (path == null || path.equals("/")) path = "/index.html";
                try {
                    InputStream in = getAssets().open(path.substring(1));
                    WebResourceResponse r = new WebResourceResponse(mime(path), "utf-8", in);
                    Map<String, String> h = new HashMap<>();
                    h.put("Access-Control-Allow-Origin", "*");
                    h.put("Cache-Control", "no-cache");
                    r.setResponseHeaders(h);
                    return r;
                } catch (Exception e) {
                    return new WebResourceResponse("text/plain", "utf-8", 404, "Not found", null, null);
                }
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                // Page loaded OK: after a while, reset the crash counter so safe mode is only used when needed.
                view.postDelayed(() -> prefs.edit().putInt("rendererCrashes", 0).apply(), 20000);
            }

            @Override
            public boolean onRenderProcessGone(WebView view, RenderProcessGoneDetail detail) {
                int n = prefs.getInt("rendererCrashes", 0) + 1;
                prefs.edit().putInt("rendererCrashes", n)
                        .putString("lastCrash", "The game's display stopped (" + (detail.didCrash() ? "crashed" : "closed by Android to free memory") + "), time " + n + ".\nDevice: " + deviceInfo()).apply();
                if (view == web) {
                    ViewGroup parent = (ViewGroup) view.getParent();
                    if (parent != null) parent.removeView(view);
                    view.destroy();
                    web = buildWebView();
                    setContentView(web);
                    web.loadUrl(START + (n >= 2 ? "?safe=1" : ""));
                }
                return true;
            }
        });
        return w;
    }

    private static String mime(String p) {
        if (p.endsWith(".html")) return "text/html";
        if (p.endsWith(".js")) return "application/javascript";
        if (p.endsWith(".json")) return "application/json";
        if (p.endsWith(".css")) return "text/css";
        if (p.endsWith(".png")) return "image/png";
        if (p.endsWith(".svg")) return "image/svg+xml";
        return "application/octet-stream";
    }

    // ---------- crash reporting ----------
    private String deviceInfo() {
        String wv = "?";
        try { wv = WebView.getCurrentWebViewPackage() != null ? WebView.getCurrentWebViewPackage().packageName + " " + WebView.getCurrentWebViewPackage().versionName : "?"; } catch (Throwable ignored) { }
        return Build.MANUFACTURER + " " + Build.MODEL + ", Android " + Build.VERSION.RELEASE + " (API " + Build.VERSION.SDK_INT + "), WebView " + wv;
    }

    private void installCrashLogger() {
        final Thread.UncaughtExceptionHandler prev = Thread.getDefaultUncaughtExceptionHandler();
        Thread.setDefaultUncaughtExceptionHandler((t, e) -> {
            try {
                StringWriter sw = new StringWriter();
                e.printStackTrace(new PrintWriter(sw));
                String txt = "App crash: " + e + "\nDevice: " + deviceInfo() + "\n\n" + sw;
                FileOutputStream fo = new FileOutputStream(new File(getFilesDir(), "crash.txt"));
                fo.write(txt.getBytes(StandardCharsets.UTF_8));
                fo.close();
            } catch (Throwable ignored) { }
            if (prev != null) prev.uncaughtException(t, e);
        });
    }

    private void showLastCrashIfAny() {
        String msg = prefs.getString("lastCrash", null);
        File f = new File(getFilesDir(), "crash.txt");
        try {
            if (f.exists()) {
                byte[] b = new byte[(int) Math.min(f.length(), 6000)];
                java.io.FileInputStream in = new java.io.FileInputStream(f);
                int n = in.read(b); in.close(); f.delete();
                msg = new String(b, 0, Math.max(0, n), StandardCharsets.UTF_8);
            }
        } catch (Throwable ignored) { }
        if (msg == null) return;
        prefs.edit().remove("lastCrash").apply();
        final String report = msg;
        new AlertDialog.Builder(this)
                .setTitle("Atlas Quest had a problem last time")
                .setMessage(report + "\n\nPlease take a screenshot of this message and send it.")
                .setPositiveButton("OK", null)
                .setNeutralButton("Copy", (d, w) -> {
                    ClipboardManager cm = (ClipboardManager) getSystemService(CLIPBOARD_SERVICE);
                    if (cm != null) cm.setPrimaryClip(ClipData.newPlainText("Atlas Quest crash", report));
                })
                .show();
    }

    // ---------- text-to-speech bridge ----------
    private void notifyDone(final String id) {
        runOnUiThread(() -> { if (web != null) web.evaluateJavascript("window.__aqTtsDone && window.__aqTtsDone('" + id.replace("'", "") + "')", null); });
    }

    class TtsBridge {
        @JavascriptInterface public boolean ready() { return ttsReady; }
        @JavascriptInterface public void speak(String text, float rate, String id) {
            if (!ttsReady) { notifyDone(id); return; }
            tts.setSpeechRate(rate);
            tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, id);
        }
        @JavascriptInterface public void stop() { if (ttsReady) tts.stop(); }
    }

    @Override public void onBackPressed() { if (web != null && web.canGoBack()) web.goBack(); else super.onBackPressed(); }
    @Override protected void onPause() { super.onPause(); if (ttsReady) tts.stop(); if (web != null) web.onPause(); }
    @Override protected void onResume() { super.onResume(); if (web != null) web.onResume(); }
    @Override protected void onDestroy() { if (tts != null) tts.shutdown(); if (web != null) web.destroy(); web = null; super.onDestroy(); }
}
