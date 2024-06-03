import { defineConfig } from "tinacms";
// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "01c0293b-37b4-48f5-90fa-2587aa93c847", // Get this from tina.io
  token: "6513dea9953edaf925abcb39bf1a9ed9cbddc6a1", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "blogs",
        label: "Blogs",
        path: "src/content/blogs",
        fields: [
          { type: "string", name: "category", label: "Category" },
          { type: "datetime", name: "publishedDate", label: "Published Date" },
          { type: "string", name: "title", label: "Title" },
          { type: 'image', name: 'thumbnail', label: 'Thumbnail' },
          { type: "rich-text", name: "caption", label: "Caption" },
          { type: "rich-text", name: "blog", label: "Blog" },
        ]
      },
    ],
  },
});
