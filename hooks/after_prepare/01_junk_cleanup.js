#!/usr/bin/env node

var fs = require("fs");
var path = require("path");

var foldersToProcess = [
    "platforms/android/app/src/main/assets/www/"
];

foldersToProcess.forEach(function (folder) {
    processFiles(folder);
});

function processFiles(dir) {
    fs.readdir(dir, function (err, list) {
        if (err) {
            console.log("error", err);
            return;
        }

        list.forEach(function (file) {
            file = dir + "/" + file;
            fs.stat(file, function (err, stat) {
                if (!stat.isDirectory()) {
                    let filename = path.basename(file);
                    switch (filename) {
                        case ".DS_Store":
                            fs.unlink(file, function (error) {
                                console.log("removed file", file);
                            });
                            break;
                        case "Thumbs.db":
                            fs.unlink(file, function (error) {
                                console.log("removed file", file);
                            });
                            break;
                        default:
                            if (false) { //filename.endsWith(".map")
                                fs.unlink(file, function (error) {
                                    console.log("removed file", file);
                                });
                            } else {
                                console.log("skipping file", file);
                            }
                            break;

                    }
                } else {
                    processFiles(file);
                }
            });
        });
    });
};