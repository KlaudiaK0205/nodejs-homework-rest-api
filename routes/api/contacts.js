<<<<<<< Updated upstream
const express = require('express')
=======
const express = require("express");
const contactController = require("../../controller/contacts.js");
>>>>>>> Stashed changes

const router = express.Router()

<<<<<<< Updated upstream
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
=======
router.get("/", contactController.getAll);

router.get("/:contactId", contactController.getContactById);

router.post("/", contactController.addContact);

router.put("/:contactId", contactController.updateContact);

router.patch(
  "/:contactId/favorite",
  contactController.updateStatus
);

router.delete("/:contactId", contactController.remove);
>>>>>>> Stashed changes

module.exports = router
