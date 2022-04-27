const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is the root!'))
router.post('/groceryitems', controllers.createItem)
router.get('/groceryitems', controllers.getAllItems)
router.get('/groceryitems/:id', controllers.getItemById)
router.put('/groceryitems/:id', controllers.updateItem)
router.delete('/groceryitems/:id', controllers.deleteItem)

module.exports = router; 