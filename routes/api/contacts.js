const express = require('express')

<<<<<<< Updated upstream
const router = express.Router()
=======

const router = express.Router();
>>>>>>> Stashed changes

router.get('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

<<<<<<< Updated upstream
module.exports = router
=======
router.delete("/:contactId", contactController.remove);

module.exports = router;
>>>>>>> Stashed changes
