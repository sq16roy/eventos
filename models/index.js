const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
//db config
const dbKeys = require('../config/keys').mongoURI;

mongoose.connect(
    dbKeys,
)
.then(() => console.log('mongodb connected sucessfully'))
.catch(err => console.log(err));

module.exports.User = require('./user');