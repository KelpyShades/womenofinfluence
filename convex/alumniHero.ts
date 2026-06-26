import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const getAlumniHero = query({
  args: {},
  handler: async (ctx) => {
    const hero = await ctx.db.query("alumniHero").first();
    if (!hero) return null;
    
    // Resolve the URL if there's an image
    const imageUrl = hero.imageId ? await ctx.storage.getUrl(hero.imageId) : null;
    
    return { ...hero, imageUrl };
  },
});

export const updateAlumniHero = mutation({
  args: {
    name: v.string(),
    role: v.string(),
    imageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db.query("alumniHero").first();
    if (existing) {
      await ctx.db.patch(existing._id, args);
    } else {
      await ctx.db.insert("alumniHero", args);
    }
  },
});
