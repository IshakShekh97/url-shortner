import express, { Router } from "express";
const router: Router = express.Router();

import { Request, Response, NextFunction } from "express";
import { createShortUrl } from "../controllers/shorturl.controller";

// Ensure createShortUrl is typed as an Express handler
router.post("/", (req: Request, res: Response, next: NextFunction) => {
  createShortUrl(req, res).catch(next);
});

export default router;
