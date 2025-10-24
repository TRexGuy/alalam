import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // اگر خروجی استاتیک لازم داری، نگهش دار. در غیر این صورت می‌تونی حذفش کنی.
  output: "export",

  // صراحتاً به Next.js بگو از Webpack استفاده کنه (نه Turbopack)
  turbopack: {},

  webpack(config) {
    config.resolve.alias["CONFIG"] = path.resolve(__dirname, "config/tailwind.config.js");
    return config;
  },
};

export default nextConfig;
