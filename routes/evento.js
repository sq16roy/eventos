const router = require('express').Router();
const handle = require('../handlers');
const auth = require('../middlewares/auth');

router.route('/')
.get(handle.showEventos)
.post(auth, handle.createEvento)//show eventos

router.route('/lugar')
.get(handle.showLugares)
.post(auth, handle.createLugar)//show eventos

router.get('/user', auth, handle.usersEventos);

router.route('/:id')
.get(handle.getEvento)
.post()
.delete(auth, handle.deleteEvento);

module.exports = router;