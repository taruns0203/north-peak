import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NorthPeak Digital",
    short_name: "NorthPeak",
    description:
      "Digital Growth Partner & Agency — Strategy, Design & Technology",
    start_url: "/",
    display: "standalone",
    background_color: "#fcfcfd",
    theme_color: "#6d5ef9",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
