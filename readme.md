# Cloudinary upload script

## Configuration

Create .env file with "exemple.env" file (Delete "exemple" word).

**In cloudinary**, recover your **cloudinary url** and copy in .env file.

**In cloudinary**, go to "Settings" and in the "Upload" tab, create an "Add upload preset".

In "signed mode", turn to Unsigned and give folder name of upload's files. Copy the upload preset name in .env file.

## Add file links

In the script, add file links in the "images" array, saparated with ",".

## Run script

Run script with ```node cloudinary.js```.







### Made by [Corentin PERROUX](https://github.com/Corentin7301)