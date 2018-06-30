'use strict';

const Bool = require('booljs');

// Here is where magic happens
module.exports = (async () => {
    try {
        return new Bool('{{namespace}}', [
            {{{dependencies}}}
        ])
            .setServerDrivers({{{options.serverDrivers}}})
            .setDatabaseDrivers({{{options.databaseDrivers}}})
            .run();
    } catch (error) {
        console.error(error);
    }
})();
