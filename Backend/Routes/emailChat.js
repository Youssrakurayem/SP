// Import necessary modules
const express = require('express');
const emailChatController = require('../controller/emailChatController');

// Create an Express router
const router = express.Router();

// Define the route for sending emails
router.post('/send-email/:email', emailChatController.sendEmail);

// Export the router
module.exports = router;
