
@ECHO OFF

:: Remove Existing Archive
del ThumbnailSentry.xpi >NUL

:: Zip Extension Files
7z a -tzip Archive resources manifest.json ThumbnailSentry.js > NUL

:: Rename Archive
rename Archive.zip ThumbnailSentry.xpi >NUL

:: Print Message
ECHO Extension packaged.