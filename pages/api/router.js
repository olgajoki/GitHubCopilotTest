//const express = require("express");
import express from "express";
const router = express.Router();
import generateInfo from "./generateInfo.js";

router.post("/generateInfo", generateInfo);

export default router;