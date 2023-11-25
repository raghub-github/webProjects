const express = require('express');
const router = express.Router();
const contactController = require('../controller/contact_controller');
const { contactSchema } = require('../validators/auth_validator');
const validate = require('../middlewares/validate_middleware');

router.route('/contact').post(validate(contactSchema), contactController.contactForm);

module.exports = router;