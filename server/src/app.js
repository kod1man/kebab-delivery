const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');

const tokenRouter = require('./routers/tokenRouter');
const authRouter = require('./routers/authRouter');
const orderRouter = require('./routers/orderRoutes');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
app.use('/api/orders', orderRouter);

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app;
