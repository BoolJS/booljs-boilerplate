'use strict';

module.exports = function(app){

    var Dog     = app.dao.Dog
    ,   json    = new app.views.Json();

    return {
        list: function(req, res, next){
            var dog = new Dog();
            json.promise(dog.list(), res, next);
        },
        send: function (req, res, next) {
            json.promise(q.nbind(req.mail.sendMail, req.mail)({
                // sender address
                from: 'John Doe 👥 <55792829d0d6bab7a@mailtrap.io>',
                // list of receivers
                to: '55792829d0d6bab7a@mailtrap.io',
                // Subject line
                subject: 'Hello ✔',
                // plaintext body
                text: 'Hello world 🐴',
                // html body
                html: '<b>Hello world 🐴</b>'
            }), res, next);
        }
    };

};
