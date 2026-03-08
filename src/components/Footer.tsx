import { Link } from "react-router-dom";
import { Heart, Mail, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">W</span>
              </div>
              <span className="font-display font-bold text-lg">WIA</span>
            </div>
            <p className="text-primary-foreground/70 text-sm font-body leading-relaxed">
              Women of Influence Academy empowers women through mentorship, education, and community to build impactful careers and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: "About Us", path: "/about" },
                { name: "Courses", path: "/courses" },
                { name: "Apply Now", path: "/apply" },
                { name: "Resources", path: "/resources" },
                { name: "Partnerships", path: "/partnerships" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-body transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:hello@wia.academy" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-body transition-colors">
                <Mail size={16} />
                hello@wia.academy
              </a>
              <div className="flex gap-3 pt-2">
                {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-primary-foreground/70 text-sm font-body mb-4">
              Join our newsletter for updates, tips, and opportunities.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm font-body focus:outline-none focus:border-gold"
              />
              <button type="submit" className="btn-gold text-xs px-5 py-2.5">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm font-body">
            © 2026 Women of Influence Academy. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm font-body flex items-center gap-1">
            Made with <Heart size={14} className="text-gold" /> for women everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
