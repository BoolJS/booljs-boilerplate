'use strict';

module.exports = class PassportDAO {
    constructor (app) {
        let utilities = app.utilities;

        this.BasicStrategy = utilities
            .PassportHttp.BasicStrategy;
        this.ClientPasswordStrategy = utilities
            .PassportOauth2ClientPassword.Strategy;
        this.BearerStrategy = utilities
            .PassportHttpBearer.Strategy;
    }

    basic () {
        return new this.BasicStrategy((id, secret, done) => done(null, {}));
    }

    clientPassword () {
        return new this.ClientPasswordStrategy((id, secret, done) => {
            done(null, {});
        });
    }

    bearer () {
        return new this.BearerStrategy((token, done) => {
            if (token === '123456') {
                return done(null, { id: 'John Doe' });
            }
            return done(null, false);
        });
    }
};
