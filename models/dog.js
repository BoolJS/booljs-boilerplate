'use strict';

const NoModel = require('booljs.nomodel/model');
const dogs = [];

console.log(NoModel);

module.exports = class extends NoModel {
    constructor (app) {
        super();
        this.Error = app.Error;
    }

    async list () {
        return dogs;
    }

    async index (id) {
        for (var dog in dogs) {
            if (dogs[dog].id === id) {
                return dog;
            }
        }
        return null;
    }

    async find (id) {
        var index = this.index(id);
        if (index === null) {
            throw new this.Error(
                404, 'dog_not_found', 'The searched dog wasn\'t in the list'
            );
        }
        return dogs[index];
    }

    async update (id, dog) {
        injector(this.find(id), dog);
    }

    async delete (id) {
        var index = this.index(id);

        if (index === null) {
            throw new this.Error(
                404, 'dog_not_found', 'The searched dog wasn\'t in the list'
            );
        }

        dogs.splice(index, 1);
    }
};
