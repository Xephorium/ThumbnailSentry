<img align="left" width="120" src="resources/sentry-transparent.png" alt="ThumbnailSentry Icon">

# Thumbnail Sentry
A Firefox extension that dynamically replaces images of a particular format.

<br>

### Packaging & Installation
1. Run the `build` script included with the project.
2. Add the extension to Firefox

   <img src="./markup/unsigned-extension-info.svg"><br>

   - **Add Permanent Extension** (Firefox Developer Edition only)
      1. Navigate to `about:config` and click *"Accept The Risk and Continue"*
      2. Search `xpinstall.signatures.required` and set the flag to *false*
      3. Navigate to `about:addons`
      4. Click the cog beside *"Manage Your Extensions"* and select *"Install Add-on from file..."*
      5. Select `ThumbnailSentry.xpi` from the `build` folder

   - **Add Temporary Extension**
      1. Navigate to `about:debugging#/runtime/this-firefox`
      2. Click *"Add Temporary Add-on..."* and select `ThumbnailSentry.xpi` from the `build` folder

3. Profit!

<br>

### Credits & Resources

- A beautiful [github noficitation markup](https://github.com/berakoc/github-notification-markups) library by [berakoc](https://github.com/berakoc), forked for the notifications in this readme.
