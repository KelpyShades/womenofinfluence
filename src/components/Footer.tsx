"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useMutation } from "convex/react";
import { useQuery } from "convex-helpers/react/cache/hooks";
import { api } from "../../convex/_generated/api";

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const TiktokIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const subscribe = useMutation(api.newsletter.subscribe);
  const licenses = useQuery(api.licenses.getLicenses);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await subscribe({ email });
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  };

  const socialLinks = [
    { icon: InstagramIcon, href: "https://www.instagram.com/women_of_influence_academy?utm_source=qr&igsh=dmw2YmVxY2E2c3I0", label: "Instagram" },
    { icon: YoutubeIcon, href: "https://youtube.com/@women_of_influence?feature=shared", label: "YouTube" },
    { icon: TiktokIcon, href: "https://www.tiktok.com/@womenofinfluence.wia?_r=1&_t=ZS-98jPV6wwuG4", label: "TikTok" },
  ];

  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Women of Influence Academy"
                width={160}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
                style={{ width: "auto" }}
              />
            </div>
            <p className="text-primary-foreground/70 text-sm font-body leading-relaxed">
              Women of Influence Academy empowers women through mentorship,
              education, and community to build impactful careers and
              businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 mb-6">
              {[
                { name: "The Program", path: "/courses" },
                { name: "Pillars", path: "/pillars" },
                { name: "Gallery", path: "/gallery" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Businesses", path: "/businesses" },
                { name: "Resources", path: "/resources" },
                { name: "Partnerships", path: "/partnerships" },
                { name: "About Us", path: "/about" },
                { name: "Licensing Information", path: "/licenses" },
                { name: "Apply Now", path: "/apply" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-body transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Licensing Banner */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl max-w-xs">
              <span className="block text-[9px] font-bold text-gold uppercase tracking-widest mb-1.5">
                Licensed & Registered With
              </span>
              <div className="flex items-center gap-2 mb-2 text-primary-foreground/90">
                <Shield size={14} className="text-gold shrink-0" />
                <span className="text-xs font-medium leading-none truncate">
                  {licenses && licenses.length > 0
                    ? licenses.map(l => l.body).slice(0, 2).join(", ")
                    : "Official Registries"}
                </span>
              </div>
              <Link
                href="/licenses"
                className="inline-flex items-center gap-1 text-[11px] text-gold hover:text-white font-medium transition-colors"
              >
                View all licenses <ArrowRight size={10} />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:womeninfluential@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-body transition-colors"
              >
                <Mail size={16} />
                womeninfluential@gmail.com
              </a>
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors text-primary-foreground"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Stay Updated
            </h4>
            <p className="text-primary-foreground/70 text-sm font-body mb-4">
              Join our newsletter for updates, tips, and opportunities.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm font-body focus:outline-none focus:border-gold"
                disabled={status === "loading" || status === "success"}
              />
              <button
                type="submit"
                className="btn-gold text-xs px-5 py-2.5 disabled:opacity-50"
                disabled={status === "loading" || status === "success" || !email}
              >
                {status === "loading" ? "..." : status === "success" ? "Joined!" : "Join"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm font-body">
            © 2026 Women of Influence Academy. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm font-body flex items-center gap-1">
            Made with <Heart size={14} className="text-gold" /> for women
            everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
