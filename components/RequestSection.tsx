'use client';

import { useEffect, useRef } from 'react';

export default function RequestSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const children = Array.from(gridRef.current.children);
      children.forEach((child, i) => {
        (child as HTMLElement).style.setProperty('--d', `${i * 0.09}s`);
        child.classList.add('reveal');
      });
    }
  }, []);

  return (
    <section id="request" className="alt">
      <div className="wrap">
        <div className="section-head">
          <div className="section-kicker">Modification requests</div>
          <h2>Need a change? Two ways, your choice.</h2>
          <p className="desc">Your data stays with you. We only see your sheet if you share access for a quick fix.</p>
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

        <div className="request-methods" ref={gridRef}>
          <div className="request-method">
            <div className="method-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="11" width="14" height="9" rx="2"></rect>
                <path d="M8 11V7a4 4 0 0 1 7.4-2"></path>
              </svg>
            </div>
            <h3>Share temporary access</h3>
            <p>Share edit access for a quick fix, then remove it once it&apos;s done.</p>
          </div>

          <div className="request-method">
            <div className="method-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2 11 13"></path>
                <path d="M22 2 15 22l-4-9-9-4 20-7z"></path>
              </svg>
            </div>
            <h3>Request a feature, get a fresh copy</h3>
            <p>We add it to a fresh copy and email you the link. Your sheet never leaves your hands.</p>
          </div>
        </div>

        <div className="request-limits">
          <div className="limit-card">
            <div className="limit-tier">Without the Club</div>
            <div className="limit-value">3 free minor modifications</div>
            <div className="limit-sub">One-time, for the life of your tracker. Feature additions and anything beyond that are charged individually.</div>
          </div>

          <div className="limit-card highlight">
            <div className="limit-tier">With the Club</div>
            <div className="limit-value">3 minor mods + 1 feature add, every month</div>
            <div className="limit-sub">Resets every month. Extra requests beyond that are charged per request.</div>
          </div>
        </div>

        <div className="request-form-card reveal">
          <label>Which tracker do you have?</label>
          <input type="text" placeholder="e.g. Store Sales & Profit Tracker" />

          <label>What would you like done?</label>
          <select>
            <option>Minor modification (filter, formula, automation)</option>
            <option>Add a new feature to the template</option>
          </select>

          <label>How should we make the change?</label>
          <select>
            <option>Give temporary access to my sheet</option>
            <option>Add it to the template and send me a fresh copy</option>
          </select>

          <label>Describe what you need</label>
          <textarea rows={3} placeholder="e.g. Add a filter so I can see sales by branch for any date range"></textarea>

          <label>WhatsApp or email</label>
          <input type="text" placeholder="98XXXXXXXX or you@email.com" />

          <button className="btn-primary">Send modification request →</button>
          <div className="fineprint">We&apos;ll confirm whether this falls within your free limit before starting.</div>
        </div>
      </div>
    </section>
  );
}
