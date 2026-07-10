"use client";

import { useQuery } from "convex-helpers/react/cache/hooks";
import { api } from "../../convex/_generated/api";

export function CachePreloader() {
  // Quietly initiate queries in background to warm up the query cache
  useQuery(api.businesses.getBusinesses);
  useQuery(api.resources.getResources);
  useQuery(api.gallery.getGallery);
  useQuery(api.testimonials.getTestimonials);

  return null;
}
