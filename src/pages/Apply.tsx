import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Lock, CheckSquare, Mail, CreditCard, Smartphone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const coursesData = {
  "Influence Bootcamp": { price: "GH₵ 500" },
  "Business Accelerator": { price: "GH₵ 800" },
};

const Apply = () => {
  const location = useLocation();
  const [courseName, setCourseName] = useState("Influence Bootcamp");
  const [price, setPrice] = useState("GH₵ 500");
  const [paymentMethod, setPaymentMethod] = useState("momo");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const course = searchParams.get("course");
    if (course && course in coursesData) {
      setCourseName(course);
      setPrice(coursesData[course as keyof typeof coursesData].price);
    }
  }, [location.search]);

  return (
    <div className="pt-20 bg-ivory min-h-screen pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <AnimatedSection>
          {/* Order Summary */}
          <div className="bg-cream rounded-t-[2rem] p-8 border-b border-border/50 shadow-sm">
            <h2 className="font-display font-bold text-2xl text-foreground mb-6">Order Summary</h2>
            <div className="flex justify-between items-center mb-6">
              <span className="font-body text-muted-foreground">{courseName}</span>
              <span className="font-body font-bold text-foreground">{price}</span>
            </div>
            
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Promo code" 
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-plum/30"
              />
              <button className="bg-champagne text-white px-6 py-3 rounded-lg font-body font-semibold text-sm hover:bg-soft-gold transition-colors">
                Apply
              </button>
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-white rounded-b-[2rem] p-8 shadow-sm">
            <h3 className="font-display font-bold text-lg text-plum mb-6 uppercase tracking-wider">Payment Details</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-body font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Full Name</label>
                <input type="text" placeholder="Akosua Mensah" className="w-full px-4 py-3 rounded-lg border border-border bg-cream/50 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-plum/30" />
              </div>
              
              <div>
                <label className="block text-xs font-body font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Email</label>
                <input type="email" placeholder="akosua@email.com" className="w-full px-4 py-3 rounded-lg border border-border bg-cream/50 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-plum/30" />
              </div>

              {/* Payment Tabs */}
              <div className="flex rounded-lg border border-border overflow-hidden">
                <button 
                  type="button"
                  onClick={() => setPaymentMethod("momo")}
                  className={`flex-1 py-3 flex items-center justify-center gap-2 font-body text-sm font-semibold transition-colors ${paymentMethod === 'momo' ? 'bg-plum text-white' : 'bg-cream/50 text-muted-foreground hover:bg-cream'}`}
                >
                  <Smartphone size={16} /> Mobile Money
                </button>
                <button 
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`flex-1 py-3 flex items-center justify-center gap-2 font-body text-sm font-semibold transition-colors ${paymentMethod === 'card' ? 'bg-plum text-white' : 'bg-cream/50 text-muted-foreground hover:bg-cream'}`}
                >
                  <CreditCard size={16} /> Card
                </button>
              </div>

              {paymentMethod === "momo" && (
                <>
                  <div>
                    <label className="block text-xs font-body font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Network</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-border bg-cream/50 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-plum/30 appearance-none">
                      <option>MTN Mobile Money</option>
                      <option>Vodafone Cash</option>
                      <option>AirtelTigo Money</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-body font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Mobile Number</label>
                    <input type="tel" placeholder="024 000 0000" className="w-full px-4 py-3 rounded-lg border border-border bg-cream/50 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-plum/30" />
                  </div>
                </>
              )}

              {paymentMethod === "card" && (
                <>
                  <div>
                    <label className="block text-xs font-body font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Card Number</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-3 rounded-lg border border-border bg-cream/50 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-plum/30" />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-xs font-body font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Expiry</label>
                      <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-lg border border-border bg-cream/50 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-plum/30" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs font-body font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">CVV</label>
                      <input type="text" placeholder="123" className="w-full px-4 py-3 rounded-lg border border-border bg-cream/50 text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-plum/30" />
                    </div>
                  </div>
                </>
              )}

              <button type="submit" className="w-full bg-champagne hover:bg-soft-gold text-foreground font-display font-bold py-4 rounded-lg flex justify-center items-center gap-2 transition-colors duration-300 mt-4 shadow-sm">
                PAY NOW & SECURE MY SPOT <span className="text-lg">→</span>
              </button>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-between items-center mt-8 px-4 sm:px-12 text-center">
            <div className="flex flex-col items-center gap-2">
              <Lock size={24} className="text-gold" />
              <span className="font-body text-xs text-muted-foreground">Secure Payment</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckSquare size={24} className="text-green-500" />
              <span className="font-body text-xs text-muted-foreground">Instant Confirmation</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail size={24} className="text-blue-400" />
              <span className="font-body text-xs text-muted-foreground">Receipt to Email</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Apply;
