import type { NextConfig } from "next";
import path from "path";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.css.ts": {
          loaders: ["@vanilla-extract/webpack-plugin/loader"],
          as: "*.css"
        }
      }
    }
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src")
    };
    return config;
  }
};

export default withVanillaExtract(nextConfig);
