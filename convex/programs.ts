import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getPrograms = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("programs").collect();
  },
});

export const addProgram = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    price: v.string(),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("programs", args);
  },
});

export const updateProgram = mutation({
  args: {
    id: v.id("programs"),
    title: v.string(),
    description: v.string(),
    price: v.string(),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    await ctx.db.patch(id, updates);
  },
});

export const deleteProgram = mutation({
  args: { id: v.id("programs") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
