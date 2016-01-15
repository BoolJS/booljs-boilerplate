'use strict';

module.exports = function (app) {

    var dog = new app.controllers.Dog();

    return [
        {
            method: 'get',
            url: '/dog',
            action: dog.list,
            cors: true
        },
        {
            method: 'post',
            url: '/mail',
            action: dog.send,
            cors: true
        }
    ];

};
