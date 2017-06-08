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
    analyzeData(fwAvatar);
});

analyzeData = function(avatar) {
    var sunLight, bulb, total;
    sunLight = avatar.sunLight;
    bulb = avatar.bulb;
    bulb.set(0);
    sunLight.bind(function() {
	bulb.set((400 - (sunLight - bulb.get())) > 0 ? 400 - (sunLight - bulb.get()) : 0);
    });
};
