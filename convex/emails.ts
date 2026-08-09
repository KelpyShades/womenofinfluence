"use node";
import { action } from "./_generated/server";
import { v } from "convex/values";

export const addSubscriberToResend = action({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const webhookUrl = process.env.ZAPIER_NEWSLETTER_WEBHOOK;
    if (!webhookUrl) {
      console.warn("⚠️ ZAPIER_NEWSLETTER_WEBHOOK environment variable is not set. Skipping webhook.");
      return;
    }

    console.log(`📤 Sending newsletter subscription webhook to Zapier for: ${args.email}...`);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: args.email,
          event: "newsletter_subscribed",
          timestamp: Date.now(),
        }),
      });
      console.log(`📥 Zapier responded with status: ${response.status} (${response.statusText})`);
      if (!response.ok) {
        throw new Error(`Zapier returned status ${response.status}`);
      }
    } catch (error) {
      console.error("❌ Failed to send newsletter subscriber to Zapier:", error);
    }
  }
});

export const sendApplicationConfirmation = action({
  args: {
    fullName: v.string(),
    email: v.string(),
    phone: v.string(),
    country: v.string(),
    packageName: v.string(),
    pillars: v.array(v.string()),
    whyJoin: v.string(),
    vision: v.string(),
    referral: v.optional(v.string()),
    amount: v.number(),
  },
  handler: async (ctx, args) => {
    const webhookUrl = process.env.ZAPIER_APPLICATION_WEBHOOK;
    if (!webhookUrl) {
      console.warn("⚠️ ZAPIER_APPLICATION_WEBHOOK environment variable is not set. Skipping webhook.");
      return;
    }

    console.log(`📤 Sending application webhook to Zapier for: ${args.fullName} (${args.email})...`);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...args,
          event: "application_submitted",
          timestamp: Date.now(),
        }),
      });
      console.log(`📥 Zapier responded with status: ${response.status} (${response.statusText})`);
      if (!response.ok) {
        throw new Error(`Zapier returned status ${response.status}`);
      }
    } catch (error) {
      console.error("❌ Failed to send application confirmation to Zapier:", error);
    }
  }
});

export const sendSponsorshipConfirmation = action({
  args: {
    email: v.string(),
    name: v.string(),
    amountDisplay: v.string(),
    bankAccountName: v.string(),
    bankAccountNumber: v.string(),
    bankName: v.string(),
  },
  handler: async (ctx, args) => {
    const webhookUrl = process.env.ZAPIER_SPONSORSHIP_WEBHOOK;
    if (!webhookUrl) {
      console.warn("⚠️ ZAPIER_SPONSORSHIP_WEBHOOK environment variable is not set. Skipping webhook.");
      return;
    }

    console.log(`📤 Sending sponsorship intent webhook to Zapier for: ${args.name} (${args.email})...`);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: args.email,
          name: args.name,
          amountDisplay: args.amountDisplay,
          bankAccountName: args.bankAccountName,
          bankAccountNumber: args.bankAccountNumber,
          bankName: args.bankName,
          event: "sponsorship_intent_submitted",
          timestamp: Date.now(),
        }),
      });
      console.log(`📥 Zapier responded with status: ${response.status} (${response.statusText})`);
      if (!response.ok) {
        throw new Error(`Zapier returned status ${response.status}`);
      }
    } catch (error) {
      console.error("❌ Failed to send sponsorship confirmation to Zapier:", error);
    }
  }
});
