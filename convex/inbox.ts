import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const getApplications = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("applications").order("desc").collect();
  },
});

export const getPartnerships = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("partnerships").order("desc").collect();
  },
});

export const updateApplicationStatus = mutation({
  args: {
    id: v.id("applications"),
    paymentStatus: v.union(v.literal("pending"), v.literal("success"), v.literal("failed")),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { paymentStatus: args.paymentStatus });
  },
});

export const updatePartnershipStatus = mutation({
  args: {
    id: v.id("partnerships"),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });
  },
});
