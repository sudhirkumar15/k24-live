'use strict'

const connection = require('../config/connection');
import {connection} from '../config/connection';

module.exports = function() {
	class auth {
		/**
         * Getting authentication for user
         *
         * @static
         * @method getAuth
         * @author Sudhir kumar
         * @for    Events
         * @param  {String}  email
         * @param  {String}  password
         * @return {Promise} Resolves to a list
         */
		static getAuth(fname) {
			let query = " SELECT * From `tenants` where `fname` = `fname` ";

			return new Promise((resolve, reject) => {
				connection.query(query, [fname], (err, row) => {
					if (err) throw err;
					if (!row.length) {
						return reject({"msg" : "Login fail", "data" : []})
					} else {
						return resolve(row[0]);
					};
				});
			})

			/*return new Promise ((resolve, reject) => {
				connection.query("SELECT * from users where status = 1 and email_id = ? limit 1", [email], (err, row) => {
			        if (err) throw err;

			        if (row.length == 0) {
						return reject({"msg" : "Login fail - invalid email"});

			        } else if (row[0]) {
			            if (row[0].password != password) {
							return reject({"msg" : "Login fail - invalid password"});

			            } else {
			                var token = jwt.sign(row[0], cfg.web.jwt.secrect, {
			                  expiresIn: 1440111
			                });

			                delete row[0].password;
			                return resolve({'token' : token, 'user' : row[0]});
			            }
			        }
			    });
			});*/
		}
	}

	return   auth;
}

