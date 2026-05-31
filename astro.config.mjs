// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Deployed to GitHub Pages at https://marcbhopalsingh.github.io/show-and-tell/
  // `base` is the repo name; remove both lines if you switch to a custom domain served at the root.
  site: "https://marcbhopalsingh.github.io",
  base: "/show-and-tell",
  env: {
    schema: {
      SITE_AUTHOR: envField.string({
        context: "client",
        access: "public",
        default: "Your Name",
      }),
      SITE_DESCRIPTION: envField.string({
        context: "client",
        access: "public",
        default:
          "Software projects, hardware builds, automations, and writing.",
      }),
      SITE_EMAIL: envField.string({
        context: "client",
        access: "public",
        default: "you@example.com",
      }),
      SITE_GITHUB: envField.string({
        context: "client",
        access: "public",
        default: "https://github.com",
      }),
      SITE_LINKEDIN: envField.string({
        context: "client",
        access: "public",
        default: "https://www.linkedin.com/in/marcbhopalsingh/",
      }),
    },
  },
});
