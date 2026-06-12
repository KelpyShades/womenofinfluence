import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Programs", path: "/courses" },
  { name: "Gallery", path: "/gallery" },
  { name: "Community", path: "/resources" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Businesses", path: "/businesses" },
  { name: "Partnerships", path: "/partnerships" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            {/* Placeholder for the user's gold logo without background */}
            <img 
              src="/logo.png" 
              alt="Women of Influence Academy" 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                // Fallback if logo.png doesn't exist yet
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden flex items-center gap-2">
              <div className="w-10 h-10 rounded-full gradient-plum flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">W</span>
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                WIA
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-body font-medium uppercase tracking-wider transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-primary bg-plum/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/apply" className="btn-gold ml-3 text-sm px-6 py-2.5 uppercase tracking-wider">
              Apply Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-body font-medium uppercase tracking-wider transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-plum/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/apply"
                className="block text-center btn-gold mt-3 text-sm px-6 py-3 uppercase tracking-wider"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
