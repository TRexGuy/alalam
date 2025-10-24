import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  turbopack: {},

  webpack(config) {
    config.resolve.alias["CONFIG"] = path.resolve(__dirname, "config/tailwind.config.js");
    return config;
  },
};

export default nextConfig;
