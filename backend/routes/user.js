const express = require("express");
const router = express.Router();

router.post('/auth/signup',userContrl.signup);
router.post('/auth/login',userContrl.login);

exports.module = userRouter;