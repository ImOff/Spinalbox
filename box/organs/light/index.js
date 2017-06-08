// index.js

var conn, spinalCore, path, fs, vm;

spinalCore = require('spinalcore');
path = require('path');
fs = require('fs');
vm = require('vm');

vm.runInThisContext(fs.readFileSync(path.join(__dirname, './config.js')));
vm.runInThisContext(fs.readFileSync(path.join(__dirname, './js-libraries/lib_handy_project/models.js')));

conn = spinalCore.connect('http://' + CONNECTION.user + ':' + CONNECTION.password + '@' + CONNECTION.host + ':' + CONNECTION.port + '/' + FOLDER);

spinalCore.load(conn, "fwAvatar", function(fwAvatar) {
    console.log("Model loaded!");
    setSensorData(fwAvatar);
});

setSensorData = function(avatar) {
    simLight = 500 + 500 * Math.sin(avatar.angle.get());
    avatar.sunLight.set(simLight + avatar.bulb.get());
    setTimeout(function () { setSensorData(avatar) }, 500);
};
