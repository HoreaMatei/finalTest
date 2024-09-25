import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.themealdb.com"],
  },
};

export default withNextVideo(nextConfig);
