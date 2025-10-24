import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  webpack(config) {
    // رفع ارور CONFIG not found برای Vercel و local
    config.resolve.alias["CONFIG"] = path.resolve(__dirname, "config/tailwind.config.js");
    return config;
  },
};

export default nextConfig;
