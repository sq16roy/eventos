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
	{ username: 'username', password: '123', email: 'test@gmail.com', eventos: [] },
	{ username: 'kelvin', password: 'password', email: 'test2@gmail.com', eventos: [] },
];
const eventos = [
	{ nombre: 'test1', hora: '10:00', fecha: '10/10/2019', precio: '10000' },
	{ nombre: 'test2', hora: '10:00', fecha: '10/10/2019', precio: '10000' },
	{ nombre: 'test3', hora: '10:00', fecha: '10/10/2019', precio: '10000' },
	{ nombre: 'test4', hora: '10:00', fecha: '10/10/2019', precio: '10000' }
];
const seed = async () => {
	try {
		await db.User.remove();
		console.log('DROP ALL USERS');
		await db.Evento.remove();
		console.log('DROP ALL POLLS');

		await Promise.all(
			users.map(async (user) => {
				const data = await db.User.create(user);
				await data.save();
			})
		);
		console.log('CREATED USERS', JSON.stringify(users));

		 await Promise.all(
				eventos.map(async (evento) => {
					const data = await db.Evento.create(evento);
					const user = await db.User.findOne({ email: 'test@gmail.com' });
					data.user = user;
					user.eventos.push(data._id);
					await user.save();
					await data.save();
				})
			);
			console.log('CREATED eventos', JSON.stringify(eventos));
	} catch (err) {
		console.error(err);
	}
};

seed();
