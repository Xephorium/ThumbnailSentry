
@ECHO OFF

:: Remove Existing Archive
del ThumbnailSentry.xpi >nul 2>&1

:: Zip Extension Files w/ Deflate Compression Method
7z a -tzip Archive resources manifest.json ThumbnailSentry.js >nul

:: Rename Archive
rename Archive.zip ThumbnailSentry.xpi >nul

:: Move Extension Package to build Folder
move /Y ThumbnailSentry.xpi build >nul

:: Print Message
ECHO Extension packaged. Saved to 'build' directory.