import express from 'express';
import { getSitemap } from '../controllers/SitemapController.js';

const SitemapRouter = express.Router();

SitemapRouter.get('/sitemap.xml', getSitemap);

export default SitemapRouter;