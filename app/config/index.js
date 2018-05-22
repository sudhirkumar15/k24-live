// var _ = require('lodash');
var path = require('path');

module.exports =  {
    'appname'     : 'K24',
    'baseurl'     : process.env.BASEURL || 'http://localhost:1355',
    'env'         : process.env.NODE_ENV || 'development',
    'paths': {
        'tmp'      : path.resolve(path.join(path.dirname('cfg'), '.', '')) + "/tmp",
    },
    'web': {
        'port': process.env.PORT || 1355,
        'api': {
            'baseurl': 'http://localhost:3000/api',
            'version': '/v1'
        },
        'cookieParser': {
            'secret': '4a2ks20HG'
        },
        'session':{
            'secret': 'M4DDg126',
            'host': '127.0.0.1',
            'port':'6379' 
        },
        'bcrypt': {
            'rounds': 8
        },
        'jwt': {
            'secrect':'p4WhWOa5'
        }
    },
    'validation' : {
        
    },
    'db': {
        'mysql': {
            'host'     : '127.0.0.1',
            'user'     : 'root',
            'password' : 'Welcome@123**',
            'database' : 'k24'
        }
    }
};

