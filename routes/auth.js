const router = require('express').Router();
const handle = require('../handlers');
const auth = require('../middlewares/auth');

router.post('/register', handle.register);
router.post('/login', handle.login);

router.route('/usuarios')
.post(auth, handle.updateUsuario);

module.exports = router;