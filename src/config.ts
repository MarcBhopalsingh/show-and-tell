import {
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_GITHUB,
  SITE_LINKEDIN,
} from "astro:env/client";

/**
 * Central site identity. Real values come from environment variables
 * (see .env.example) so personal info stays out of the committed repo.
 * Falls back to placeholder defaults defined in astro.config.mjs.
 */
export const SITE = {
  author: SITE_AUTHOR,
  description: SITE_DESCRIPTION,
  email: SITE_EMAIL,
  github: SITE_GITHUB,
  linkedin: SITE_LINKEDIN,
} as const;
