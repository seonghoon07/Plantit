import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '.',
  reactStrictMode: false,
};

export default withVanillaExtract(nextConfig);