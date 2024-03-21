/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdnpublicidad.milenio.com",
      },
    ],
  },
  output: "export",
};

export default nextConfig;
