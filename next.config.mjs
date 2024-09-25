import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.themealdb.com"],
  },
  env: {
    STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY,
  },
};

export default withNextVideo(nextConfig);
