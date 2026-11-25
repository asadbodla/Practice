package com.asad.atlasquest;

import android.app.Activity;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import java.util.Locale;

public class MainActivity extends Activity {
    private WebView web;
    private TextToSpeech tts;
    private volatile boolean ttsReady = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        web = new WebView(this);
        setContentView(web);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccess(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setLoadWithOverviewMode(true);
        s.setUseWideViewPort(true);
        web.setWebViewClient(new WebViewClient());
        web.setWebChromeClient(new WebChromeClient());
        web.addJavascriptInterface(new TtsBridge(), "AQTTS");

        tts = new TextToSpeech(this, status -> {
            if (status == TextToSpeech.SUCCESS) {
                int r = tts.setLanguage(Locale.UK);
                if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) r = tts.setLanguage(Locale.US);
                if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) tts.setLanguage(Locale.ENGLISH);
                tts.setOnUtteranceProgressListener(new UtteranceProgressListener() {
                    @Override public void onStart(String id) { }
                    @Override public void onDone(String id) { notifyDone(id); }
                    @Override public void onError(String id) { notifyDone(id); }
                });
                ttsReady = true;
            }
        });

        if (savedInstanceState != null) web.restoreState(savedInstanceState);
        else web.loadUrl("file:///android_asset/AtlasQuest.html");
    }

    private void notifyDone(final String id) {
        runOnUiThread(() -> web.evaluateJavascript("window.__aqTtsDone && window.__aqTtsDone('" + id.replace("'", "") + "')", null));
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

    @Override protected void onSaveInstanceState(Bundle out) { super.onSaveInstanceState(out); web.saveState(out); }
    @Override public void onBackPressed() { if (web.canGoBack()) web.goBack(); else super.onBackPressed(); }
    @Override protected void onPause() { super.onPause(); if (ttsReady) tts.stop(); web.onPause(); }
    @Override protected void onResume() { super.onResume(); web.onResume(); }
    @Override protected void onDestroy() { if (tts != null) tts.shutdown(); web.destroy(); super.onDestroy(); }
}
