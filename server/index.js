const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/dbconnect');

const  app = express();

connectDB();