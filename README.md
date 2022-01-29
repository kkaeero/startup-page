## **Setting a custom new tab page on Firefox**

Navigate to your Firefox folder
- Windows: `C:\Program Files\Firefox`
- Arch Linux: `/usr/lib/firefox`
- macOS: `/Applications/Firefox.app/Contents/MacOS`

Navigate to `defaults/pref` o `defaults/preferences` and create a file named `autoconfig.js` with this content inside:
```javascript
pref("general.config.filename", "mozilla.cfg");
pref("general.config.obscure_value", 0);
pref("general.config.sandbox_enabled", false);
```
---

Now navigate out the pref folder back to the installation folder, where `defaults` is located, and create a file named `mozilla.cfg` with this code:
```
// Any comment. You must start the file with a single-line comment!

let { classes:Cc, interfaces:Ci, utils:Cu } = Components;

try {
  Cu.import("resource:///modules/AboutNewTab.jsm");
  let newTabURL = "PATH_TO_STARTPAGE_REPLACE_ME";
  AboutNewTab.newTabURL = newTabURL;
} catch(e) { Cu.reportError(e); }
```
`PATH_TO_STARTPAGE_REPLACE_ME` has to be replaced with the `index.html` path in your computer.

For example in Windows: \
`file:///C:/Users/Cami/Documents/GitHub/startup-page/index.html`

_Reminder_ spaces have to be replaced with `%20`.

---

**Autofocus**

In order to disable it you have to add this code to the `mozilla.cfg` file:
```
// Auto focus new tab content
try {
  Cu.import("resource://gre/modules/Services.jsm");
  Cu.import("resource:///modules/BrowserWindowTracker.jsm");

  Services.obs.addObserver((event) => {
    window = BrowserWindowTracker.getTopWindow();
    window.gBrowser.selectedBrowser.focus();
  }, "browser-open-newtab-start");
} catch(e) { Cu.reportError(e); }
```

If it doesn't work _restart your browser!_