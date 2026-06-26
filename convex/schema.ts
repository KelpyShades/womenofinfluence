import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,

  // Admin Roles (Mapping a Convex Auth userId to an Admin role)
  userRoles: defineTable({
    userId: v.id("users"),
    role: v.literal("admin"),
  }).index("by_userId", ["userId"]),

  // Invites for new admins
  invites: defineTable({
    email: v.string(),
    token: v.string(),
    expiresAt: v.number(),
    used: v.boolean(),
    role: v.literal("admin"),
  }).index("by_token", ["token"]),

  // Homepage / Global Settings
  alumniHero: defineTable({
    name: v.string(),
    role: v.string(),
    imageId: v.id("_storage"),
  }),

  // Academy Programs & Courses
  programs: defineTable({
    title: v.string(),
    description: v.string(),
    price: v.string(), // e.g., "GH₵ 500"
    isActive: v.boolean(),
  }),
  
  // Testimonials & Success Stories
  testimonials: defineTable({
    name: v.string(),
    role: v.string(),
    quote: v.optional(v.string()), // For written
    imageId: v.optional(v.id("_storage")), // Uploaded via Convex Storage
    videoId: v.optional(v.id("_storage")), // Uploaded via Convex Storage
    type: v.union(v.literal("written"), v.literal("video"), v.literal("success_story")),
    achievement: v.optional(v.string()), // For success stories
  }),

  // Alumni Businesses
  businesses: defineTable({
    name: v.string(),
    founder: v.string(),
    description: v.string(),
    website: v.string(),
    imageId: v.id("_storage"), // Uploaded via Convex Storage
  }),

  // Gallery (Images, Videos, Awards)
  gallery: defineTable({
    caption: v.string(),
    category: v.string(),
    fileId: v.id("_storage"), // Uploaded via Convex Storage
    type: v.union(v.literal("image"), v.literal("video"), v.literal("award")),
  }),

  // Community Resources
  resourceCategories: defineTable({
    title: v.string(),
    iconType: v.string(), // Maps to lucide-react icons
  }),
  resources: defineTable({
    categoryId: v.id("resourceCategories"),
    title: v.string(),
    url: v.optional(v.string()),
  }),

  // Form Submissions (Leads & Payments)
  applications: defineTable({
    name: v.string(),
    email: v.string(),
    courseId: v.id("programs"),
    amount: v.number(), // Amount paid
    paymentReference: v.optional(v.string()), // Paystack reference
    paymentStatus: v.union(v.literal("pending"), v.literal("success"), v.literal("failed")),
  }),
  
  partnerships: defineTable({
    name: v.string(),
    organization: v.optional(v.string()),
    email: v.string(),
    message: v.string(),
    status: v.string(),
  })
});
