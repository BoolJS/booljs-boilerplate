'use strict';

module.exports = class OAuth2DAO {
    token (server, OAuth2) {
        server.exchange(OAuth2.exchange.password(
            (client, mail, password, scope, done) => done(null, '123456')
        ));

        server.exchange(OAuth2.exchange.refreshToken(
            (client, refreshToken, scope, done) => done(null, '123456')
        ));
    }
};
