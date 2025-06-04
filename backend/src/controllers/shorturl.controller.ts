import { Request, Response } from "express";
import { shortUrlService } from "../services/shorturl.service";

export const createShortUrl = async (req: Request, res: Response) => {
  const { fullUrl } = req.body;

  if (!fullUrl) {
    return res.status(400).json({ error: "Full URL is required" });
  }

  try {
    const result = await shortUrlService(fullUrl);
    const shortedUrl = process.env.APP_URL + result.generateShortUrl;

    return res.status(201).json({
      message: "Short URL created successfully",
      data: {
        shortedUrl: shortedUrl,
      },
    });
  } catch (error) {
    console.error("Error creating short URL:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
