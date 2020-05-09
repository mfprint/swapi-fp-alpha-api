/*
 * Web API for SWAPI Application, FP Alpha recruitment
 * Created by Martín Figueroa Padilla
 * 
 * server.js
 * Main file for running API
 */

const express = require('express');
const database = require('./database');
const cors = require('cors');
const API = require('./api');

require('dotenv').config();

// Initialize Express application
const app = express();

// Connect to the database
database.connect();

// Only allow from production and development applications
const allowedOrigins = process.env.NODE_ENV === 'development'
    ? ['localhost:3000']
    : [''];

// Implement cross-site origin
app.use(cors({ origin: allowedOrigins }));

// Set API to Express application
API.set(app);

// Listening port for the application
const PORT = process.env.NODE_PORT || 8001;

// Start Express application
app.listen(PORT, () => {
    console.log('✅ SWAPI Application API running.');
});