# Atlas Quest — Android app

Atlas Quest wrapped in an offline Android WebView. The whole game, `app/src/main/assets/AtlasQuest.html`, is packed inside the app.
Narration uses the tablet's own text-to-speech engine through a small Java bridge (`AQTTS`).

## Option A: let GitHub build the APK (no Android Studio needed)
1. Sign in at github.com and create a **new repository**, e.g. `atlas-quest` (private is fine).
2. Click **"uploading an existing file"** and drag in **everything inside this folder**, including the hidden `.github` folder.
   (If your computer hides the `.github` folder, create the file `.github/workflows/build-apk.yml` with **Add file → Create new file**
   and paste in the contents from this zip.)
3. Open the **Actions** tab. The build **"Build Atlas Quest APK"** starts by itself and takes about 3–5 minutes.
4. When it shows a green tick, open it and download **AtlasQuest-apk** under *Artifacts*. Unzip it to get `app-release.apk`.

## Option B: Android Studio
Open this folder in Android Studio (Hedgehog or newer). Let it sync, then choose **Build → Build App Bundle(s) / APK(s) → Build APK(s)**.

## Installing on the Huawei tablet
Copy the APK to the tablet (USB, email or WhatsApp) and tap it. When asked, allow **"Install unknown apps"**
(or turn off *Pure Mode* / *Security → More settings*). Then tap **Install**.

## Better narrator voice on the tablet
Open **Settings** and search **"Text-to-speech"**. Choose the engine and download a good **English** voice.
Huawei tablets without Google can install a TTS engine from AppGallery if none is listed.
