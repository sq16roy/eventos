require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
const dbKeys = require('./config/keys').mongoURI;

mongoose
	.connect(dbKeys)
	.then(() => console.log('mongodb connected sucessfully'))
	.catch((err) => console.log(err));

const db = require('./models');

const users = [
	{ username: 'username', password: 'password' },
	{ username: 'kelvin', password: 'password' }
];

const seed = async () => {
	try {
		await db.User.remove();
		console.log('DROP ALL USERS');

		await Promise.all(
			users.map(async (user) => {
				const data = await db.User.create(user);
				await data.save();
			})
		);
		console.log('CREATED USERS', JSON.stringify(users));
	} catch (err) {
		console.error(err);
	}
};

seed();
