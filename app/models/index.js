'use strict';

module.exports = (app, config) => {
    
    const connection = require('../config/connection')(config),
    _                = require('lodash'),

    modules = [
        'auth',
    ],

    core = {};

    _.each(modules, module => core[module] = require('./' + module)(app, connection, config));

    return core;
};
