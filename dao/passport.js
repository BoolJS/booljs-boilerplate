'use strict';

module.exports = function (app) {
    var Bearer = app.utilities['passport-http-bearer'];

    this.bearer = function () {
        return new Bearer.Strategy(function (token, done) {
            if(token == '123456') return done(null, {
                id: 'John Doe'
            });
            return done(null, false);
        });
    };

};
