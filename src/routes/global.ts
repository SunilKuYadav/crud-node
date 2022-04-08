import express from "express";

import globalControllers from "../controllers/global";

const router = express.Router();

// your routes path and methods
// single basic route at the base path of your application
router.get("/", globalControllers.healthCheck);

export default router;
