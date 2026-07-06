"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function StorySection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-32">
      <AnimatedSection>
        <div className="border-l border-plum pl-8 lg:pl-16">
          <h2 className="font-display font-medium text-4xl mb-8">THE STORY BEHIND WIA</h2>
          <div className="space-y-6 text-lg font-light text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              We believe that there are women out there who are capable of leading systems, shaping decisions, and building legacies but are limited by their conditioning and environment. They know that they were made for more than survival. However, they are waiting for the right formation, the right room, and the right people to cultivate them into that version that can help them achieve their vision.
            </p>
            <p>
              That conviction is what built this academy.
            </p>
            {isExpanded && (
              <>
                <p>
                  Before Women of Influence Academy, there was Women of Poise since 2022 — a movement helping women show up as their best selves. But it was a preparation for something larger.
                </p>
                <p>
                  On February 6th, 2025, it became clear. In a moment of prayer, the founder, Emmanuella Ulamba, received a mandate to raise women who would not just succeed in the world but infiltrate its structures and capture them for purpose. Women of consecration, presence, and power. Esthers. Women positioned for such a time as this.
                </p>
                <p>
                  On May 16th, the final piece came when she was doing a study on wealth. The name shifted. Women of Poise became Women of Influence and the vision became clear. A six-month intensive program. Small, intentional, and premium. Not a course but a formation of women of wealth, wisdom and excellence.
                </p>
                <p>
                  Women of Influence Academy was not born from a business plan. It was born from obedience – a woman who heard a call and moved.<br />
                  And now we are building the room we always wished existed.<br />
                  This is that room.
                </p>
              </>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-plum hover:text-plum/80 font-medium transition-colors mt-2"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
