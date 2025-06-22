import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

// ES 모듈에서 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  },
  // critters 관련 오류 해결을 위한 설정
  optimizeFonts: false,
  swcMinify: true
};

export default withVanillaExtract(nextConfig);
