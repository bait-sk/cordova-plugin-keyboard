var exec = exec = require('cordova/exec');

var keyboard = {

     show: function(win, fail) {
        return cordova.exec(
                function (args) { if(win !== undefined) { win(args); } },
                function (args) { if(fail !== undefined) { fail(args); } },
                "Keyboard", "show", []);
    },

    hide: function(win, fail) {
        return cordova.exec(
                function (args) { if(win !== undefined) { win(args); } },
                function (args) { if(fail !== undefined) { fail(args); } },
                "Keyboard", "hide", []);
    }

};

module.exports = keyboard;