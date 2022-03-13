<img align="left" width="120" src="resources/sentry-transparent.png" alt="ThumbnailSentry Icon">

# Thumbnail Sentry
A Firefox extension that dynamicallly replaces images of a particular format.

### To Build & Run
- Add the following project files to a `.zip` folder using the "Deflate" compression method.
 ```
	/resources
	manifest.json
	ThumbnailSentry.js
```
- Change the .zip's extension to `.xpi`. It can now be loaded into Firefox Developer Edition as an extension!
  - **Note:** Since this extension isn't being hosted on Mozilla's add-on site, it hasn't been signed. Unfortunately, the standard version of Firefox requires this. However, unsigned extensions can be used on Firefox Developer Edition, as long as the `xpinstall.signatures.required` flag is set to false. The flag can be found and changed from `about:config`.
