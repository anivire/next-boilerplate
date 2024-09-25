/** @type {import('next').NextConfig} */
import Icons from "unplugin-icons/webpack";

export default {
  webpack(config) {
    config.plugins.push(
      Icons({
        compiler: "jsx",
        jsx: "react",
      })
    );

    return config;
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.hostname.com",
        port: "",
      },
    ],
  },
  env: {
    EXAMPLE_URL: process.env.EXAMPLE_URL,
  },
};
