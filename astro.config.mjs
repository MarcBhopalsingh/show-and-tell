// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
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
    },
  },
});
