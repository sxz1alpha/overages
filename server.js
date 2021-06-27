const express = require('express');
const ServerRoutes = require('/controllers');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turns on routes
app.use(serverRoutes);