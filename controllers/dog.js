'use strict';

module.exports = function(app){

    var Dog     = app.dao.Dog
    ,   json    = new app.views.Json();

    return {
        list: function(req, res, next){
            var dog = new Dog();
            json.promise(dog.list(), res, next);
        },
        upload: function (req, res) {
            if(req.files){
                json.standard(req.files[0], res);
            } else {
                json.error(new app.Error(400, 'FILE_MISSING'), res);
            }
        }
    };

};
