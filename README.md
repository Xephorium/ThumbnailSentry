<img align="left" width="120" src="resources/sentry-transparent.png" alt="ThumbnailSentry Icon">

# Thumbnail Sentry
A Firefox extension that dynamically replaces images of a particular format.

<br>

### Packaging & Installation
- Run the `build` script included with the project. This will produce an extension package `ThumbnailSentry.xpi`.
- Add the extension to Firefox

  > **Note:** Since this extension isn't signed, it can only be added to Firefox Developer Edition or as a temporary addon to Firefox proper. To enable unsigned extensions in either, navigate to `about:config` and set the `xpinstall.signatures.required` flag to false.

  - Add Permanent Extension
    - Navigate to `about:addons`
    - Click the cog beside *"Manage Your Extensions"* and select *"Install Add-on from file..."*
    - Select `ThumbnailSentry.xpi`
  - Add Temporary Extension
    - Navigate to `about:debugging#/runtime/this-firefox`
    - Click *"Add Temporary Add-on..."* and select `ThumbnailSentry.xpi`

- Profit!
