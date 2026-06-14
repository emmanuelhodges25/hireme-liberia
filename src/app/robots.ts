export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://hireme-liberia.vercel.app/sitemap.xml",
  };
}