'use strict';

module.exports = function (app) {

    var user = new app.controllers.User();

    return [
        {
            method: 'get',
            url: '/users/me',
            action: user.get,
            cors: true
        }
    ];

};
