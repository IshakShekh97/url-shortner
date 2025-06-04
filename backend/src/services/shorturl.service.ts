import ShortUrlModel from "../models/shorturl.model";
import { generateNanoid } from "../utils/helper";

export const shortUrlService = async (fullUrl: string) => {
  const generateShortUrl = generateNanoid(7);

  const saveUrlToDB = await ShortUrlModel.create({
    fullUrl: fullUrl,
    shortUrl: generateShortUrl,
  });
  await saveUrlToDB.save();

  return { generateShortUrl };
};
