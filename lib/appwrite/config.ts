export const appwriteConfig = {
  endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
  apiKey: process.env.NEXT_APPWRITE_KEY!,
  buckets: {
    gallery: process.env.NEXT_PUBLIC_APPWRITE_GALLERY_BUCKET!,
    news: process.env.NEXT_PUBLIC_APPWRITE_NEWS_BUCKET!,
    universities: process.env.NEXT_PUBLIC_APPWRITE_UNIVERSITIES_BUCKET!,
    stories: process.env.NEXT_PUBLIC_APPWRITE_STORIES_BUCKET!,
  },
  collections: {
    stories: "685cc34a003e511f8538", // This will now handle testimonials
    gallery: "685cbfe00008d1a9b7af",
    forms: "685cc248001601597820",
    newsEvents: "685cc1920017ba5ec832",
    countries: "685cc0ff001511f49afd",
    universities: "685cc052002966d4a04d",
  },
};
