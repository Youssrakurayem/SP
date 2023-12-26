const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const userModel = require('../Models/userModel');

const app = express();
const port = 3000;

// Generate a random 6-digit code
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

// Store generated codes (this is a simplified example, in a production scenario, use a database)
const otpCodes = new Map();

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    secure: true,
    port: 465,
    auth: {
      user: "helpdeskgiu@hotmail.com",
      pass: "E137188013EC0A823E8A71BC9FEB1B850E4A",
    },
  });

const otpController = {
  sendOTP: async (req, res) => {
    const email = req.params.email;
    const user = await userModel.findOne({ email: email });


    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate a one-time code
    const otp = generateOTP();

    // Save the code in the map with the email as the key
    otpCodes.set(email, otp.toString());
    console.log(`Sending OTP to ${email}: ${otp}`);

    // Send the one-time code via email
    transporter.sendMail({
      from: 'helpdeskgiu@hotmail.com',
      to: email,
      subject: 'Your One-Time Code for 2FA',
      text: `Your one-time code is: ${otp}`,
    });

    // Include the user's role in the response
    res.json({ message: 'One-time code sent via email.', role: user.role });
  },

    
    verifyOTP: async (req, res) => {
      const email = req.params.email;
      const userProvidedCode = req.params.code;
  
      // Retrieve the stored code from the map
      const storedCode = otpCodes.get(email);
  
      // Check if the provided code matches the stored one
      if (storedCode === userProvidedCode) {
        // Assuming you have a user object in your response
        const user = {
          email: email,
          role: 'user', // Replace with the actual role of the user
        };
  
        // Sending a response with a user object
        res.json({ user: user, message: 'Verification successful' });
        console.log("success");
      } else {
        res.status(201).json({ message: 'Verification failed' });
      }
  
      // Remove the code from the map (optional: make the code single-use)
      otpCodes.delete(email);
    },
  };
  
  module.exports = otpController;