const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const stuffCtrl = require('../controllers/stuff');

router.get('/',auth,  stuffCtrl.getAllStuff);
router.post('/', stuffCtrl.createThing);
router.get('/:id', stuffCtrl.getOneThing);
router.put('/:id',  stuffCtrl.updateThing);
router.delete('/:id', stuffCtrl.deleteThing);

module.exports = router;