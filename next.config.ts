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

    // SVG 파일을 React 컴포넌트로 처리
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  // critters 관련 오류 해결을 위한 설정
  optimizeFonts: false,
  swcMinify: true
};

export default withVanillaExtract(nextConfig);
