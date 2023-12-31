// src/middlewares/mediaHandler.ts

import { Request as MulterRequest, Response, NextFunction } from 'express';
import { uploadFile } from '../utils/gridfsStorage';
import { Readable } from 'stream';

export const mediaHandler = async (req: MulterRequest, res: Response, next: NextFunction) => {
  try {
    // const { dealershipName, productDetails, rating, comment} = req.body;
    const { comment, externalLinks, ...rest } = req.body;
    const mediaFiles = req.files as Express.Multer.File[]; // Cast to specific type
    console.log(req.files)
    const commentWithMedia: any = {
      text: comment.text,
      media: [],
    };
    if (Array.isArray(mediaFiles) && mediaFiles.length > 0) {

      const media = await Promise.all(mediaFiles.map(async (mediaFile: Express.Multer.File) => {
        if (mediaFile.mimetype.startsWith('image')) {
          // Image data is stored directly within the document
          return {
            type: 'image',
            imageData: mediaFile.buffer,
          };
        } else if (mediaFile.mimetype.startsWith('video')) {
          // Video is uploaded to GridFS and associated metadata is stored
          const fileStream = new Readable();
          fileStream.push(mediaFile.buffer);
          fileStream.push(null);
          const mediaId = await uploadFile(fileStream, mediaFile.originalname); // Provide file stream and filename

          return {
            type: 'video',
            mediaId: mediaId.toString(), // Update with the appropriate URL or path
            // metadata: {
            //   duration: '00:01:30', // Example metadata for video duration
            // },
          };
        } else {
          // Unknown media type or unsupported format
          return null;
        }
      }));

      commentWithMedia.media = media.filter((m) => m !== null);
    }

    if (externalLinks && externalLinks.length > 0) {
      const externalMedia = externalLinks.map((link: string) => {
        return {
          type: 'external',
          url: link,
        };
      });

      commentWithMedia.media.push(...externalMedia);
    }

    req.body = {
      comment: commentWithMedia,
      ...rest
    };
    
    next();
  } catch (error) {
    console.error('Error processing media files:', error);
    res.status(500).json({ error: 'Failed to process media files' });
  }
};
