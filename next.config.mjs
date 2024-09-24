import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.themealdb.com"],
  },
  env: {
    KEY: process.env.KEY,
  },
};

export default withNextVideo(nextConfig);
