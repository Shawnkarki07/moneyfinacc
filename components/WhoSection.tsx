'use client';

import { useEffect, useRef } from 'react';

export default function WhoSection() {
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
    <section id="who">
      <div className="wrap">
        <div className="section-head">
          <div className="section-kicker">Who this is for</div>
          <h2>You run the business. This just tells you where the money&apos;s going.</h2>
          <p className="desc">Three kinds of founders. One simple question each.</p>
        </div>
        <div className="deco" aria-hidden="true" style={{ top: '0px' }}>
          <div className="deco-card">
            <div className="deco-lbl">
              <span>This month</span>
              <b>on track</b>
            </div>
            <svg className="ringsvg" viewBox="0 0 110 110">
              <circle className="track" cx="55" cy="55" r="45" fill="none" strokeWidth="8"/>
              <circle className="val" cx="55" cy="55" r="45" fill="none" strokeWidth="8" strokeLinecap="round" transform="rotate(-90 55 55)"/>
              <text x="55" y="60" textAnchor="middle">75%</text>
            </svg>
            <div className="ring-list">
              <i style={{ '--w': '85%' } as React.CSSProperties}></i>
              <i style={{ '--w': '60%' } as React.CSSProperties}></i>
              <i style={{ '--w': '72%' } as React.CSSProperties}></i>
              <i style={{ '--w': '40%' } as React.CSSProperties}></i>
            </div>
          </div>
        </div>
        <div className="personas" ref={gridRef}>
          <div className="persona-card">
            <div className="persona-mark">🏪</div>
            <h3>The multi-branch owner</h3>
            <p>3 to 6 outlets and you can&apos;t be everywhere. See them all in one place.</p>
            <div className="persona-eg">e.g. &quot;Momo Point — Thamel, Patan, Baneshwor&quot;</div>
            <a href="#trackers" className="persona-link">See this tracker →</a>
          </div>
          <div className="persona-card">
            <div className="persona-mark">📦</div>
            <h3>The unregistered hustler</h3>
            <p>Selling on Instagram and WhatsApp. Know if you&apos;re profitable or just busy.</p>
            <div className="persona-eg">e.g. &quot;Sano Pasal — clothing, Facebook &amp; Instagram&quot;</div>
            <a href="#trackers" className="persona-link">See this tracker →</a>
          </div>
          <div className="persona-card">
            <div className="persona-mark">🧩</div>
            <h3>The one-off problem</h3>
            <p>A specific problem no template fits. Describe it, we build the sheet.</p>
            <div className="persona-eg">e.g. &quot;Rental ledger for 6 tenants, auto due-date alerts&quot;</div>
            <a href="#custom" className="persona-link">Describe your problem →</a>
          </div>
        </div>

        <div className="category-strip">
          <div className="category-strip-label">Today, moneyfinacc is money &amp; business trackers. Same simple idea — more categories coming.</div>
          <div className="category-chips">
            <span className="chip">💰 Personal money flow <em>— coming soon</em></span>
            <span className="chip">🏢 Business cashflow</span>
            <span className="chip">🏋️ Gym &amp; nutrition <em>— coming soon</em></span>
            <span className="chip">📋 Whatever you need clarity on</span>
          </div>
        </div>
      </div>
    </section>
  );
}
