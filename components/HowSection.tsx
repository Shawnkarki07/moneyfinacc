'use client';

import { useEffect, useRef } from 'react';

export default function HowSection() {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stepsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(stepsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how">
      <div className="wrap">
        <div className="section-head">
          <div className="section-kicker">How it works</div>
          <h2>From a messy notebook to a dashboard, in four steps.</h2>
        </div>

        <div className="deco" aria-hidden="true" style={{ top: '0px' }}>
          <div className="deco-card">
            <div className="deco-lbl">
              <span>Delivery</span>
              <b>~48h</b>
            </div>
            <div className="flow">
              <div className="ln"></div>
              <div className="pulse"></div>
              <div className="nd">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="4" y="3" width="16" height="18" rx="2"/>
                  <path d="M4 9h16M4 15h16M10 3v18"/>
                </svg>
              </div>
              <div className="nd gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <path d="M3 7l9 6 9-6"/>
                </svg>
              </div>
              <div className="nd">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                  <path d="M8 3h8l6 10-4 7H6l-4-7z"/>
                  <path d="M8 3l6 10h8M2 13h12l-4 7"/>
                </svg>
              </div>
            </div>
            <div className="flow-cap">
              <span>Built</span>
              <span>Emailed</span>
              <span>Your Drive</span>
            </div>
          </div>
        </div>

        <div className="steps" ref={stepsRef}>
          <div className="step">
            <div className="step-num num">01</div>
            <div className="ill ill-pick" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3>Pick or describe</h3>
            <p>A ready tracker, or tell us your problem.</p>
          </div>

          <div className="step">
            <div className="step-num num">02</div>
            <div className="ill ill-mail" aria-hidden="true">
              <div className="letter"></div>
              <div className="env"></div>
            </div>
            <h3>It lands in your email</h3>
            <p>Click "Make a copy". It&apos;s in your Drive.</p>
          </div>

          <div className="step">
            <div className="step-num num">03</div>
            <div className="ill ill-type" aria-hidden="true">
              <div className="rw">
                <span>Sale</span>
                <b>Rs 2,500</b>
              </div>
              <div className="rw">
                <span>Cost</span>
                <b style={{ animationDelay: '1.2s, 0s' }}>Rs 1,200</b>
              </div>
            </div>
            <h3>Add your entries</h3>
            <p>From your phone, in under a minute.</p>
          </div>

          <div className="step">
            <div className="step-num num">04</div>
            <div className="ill ill-bars" aria-hidden="true">
              <span style={{ '--a': 0.35, '--b': 0.6 } as React.CSSProperties}></span>
              <span style={{ '--a': 0.5, '--b': 0.8, animationDelay: '.3s' } as React.CSSProperties}></span>
              <span style={{ '--a': 0.4, '--b': 0.65, animationDelay: '.6s' } as React.CSSProperties}></span>
              <span className="gold" style={{ '--a': 0.6, '--b': 1, animationDelay: '.9s' } as React.CSSProperties}></span>
              <span style={{ '--a': 0.45, '--b': 0.75, animationDelay: '1.2s' } as React.CSSProperties}></span>
            </div>
            <h3>Glance and decide</h3>
            <p>Totals, charts and flags update themselves.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
