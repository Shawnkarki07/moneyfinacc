'use client';

import { useEffect, useRef } from 'react';

export default function WhySection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add staggered reveal delays
    if (gridRef.current) {
      const children = Array.from(gridRef.current.children);
      children.forEach((child, i) => {
        (child as HTMLElement).style.setProperty('--d', `${i * 0.09}s`);
        child.classList.add('reveal');
      });
    }
  }, []);

  return (
    <section id="why">
      <div className="wrap">
        <div className="section-head">
          <div className="section-kicker">Why it matters</div>
          <h2>In a cluttered, distracted world, the organized business moves first.</h2>
          <p className="desc">Money leaks hide in notebooks, chats and memory. One tracker brings it all together, so you spot problems early and keep your time for your real work.</p>
        </div>

        {/* Decorative animated cells */}
        <div className="deco" aria-hidden="true" style={{ top: '0px' }}>
          <div className="deco-card">
            <div className="deco-lbl">
              <span><b>fx</b> auto-fill</span>
              <span>A1:H4</span>
            </div>
            <div className="cells">
              {Array.from({ length: 32 }).map((_, i) => (
                <span key={i} style={{ animationDelay: `${((i * 7) % 32) * 0.15}s` }}></span>
              ))}
            </div>
          </div>
        </div>
        <div className="why-grid" ref={gridRef}>
          <div className="why-card">
            <div className="why-k">Clarity</div>
            <h3>Decide from numbers, not guesses</h3>
            <p>What sells, what costs, what&apos;s slipping. One glance.</p>
            <div className="why-note"><span>Bhadra was the best month. Reorder saree stock before Dashain.</span></div>
          </div>
          <div className="why-card">
            <div className="why-k">Time</div>
            <h3>Put your hours into your expertise</h3>
            <p>The sheet does the adding, sorting and checking.</p>
            <div className="why-note"><span>Month-end totals: done automatically, not on Sunday night.</span></div>
          </div>
          <div className="why-card">
            <div className="why-k">Automation</div>
            <h3>Let the sheet do the chasing</h3>
            <p>Overdue payments and losing branches get flagged.</p>
            <div className="why-note"><span>2nd floor tenant overdue since the 5th. Flagged.</span></div>
          </div>
          <div className="why-card">
            <div className="why-k">Ownership</div>
            <h3>No new app. Nothing to log in to.</h3>
            <p>Google Sheets you already use. Data stays in your Drive.</p>
            <div className="why-note"><span>Delivered to your email. Make a copy. It&apos;s yours.</span></div>
          </div>
        </div>

        {/* Sort visualization */}
        <div className="sort-viz" aria-hidden="true">
          <div>
            <div className="sv-lbl">Today</div>
            <div className="sv-mess">
              <div className="mess paper" style={{ left: '2%', top: '4px', '--r': '-4deg', '--dx': '260px', '--dy': '30px' } as React.CSSProperties}>sold 3 kurta · 7,500</div>
              <div className="mess chat" style={{ left: '30%', top: '52px', '--r': '3deg', '--dx': '200px', '--dy': '0px', animationDelay: '.5s' } as React.CSSProperties}>Rs 1,200 paid to supplier?</div>
              <div className="mess rcpt" style={{ left: '6%', top: '104px', '--r': '2deg', '--dx': '260px', '--dy': '-20px', animationDelay: '1s' } as React.CSSProperties}>rent · 16,000</div>
              <div className="mess think" style={{ left: '38%', top: '148px', '--r': '-2deg', '--dx': '180px', '--dy': '-60px', animationDelay: '1.5s' } as React.CSSProperties}>did 2nd floor pay??</div>
            </div>
            <div className="sv-doodle">
              <span><s>7,500 + 16,000 − 1,200 = ?</s></span>
              <span className="clk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3 2"/>
                </svg>
                Sunday night recount
              </span>
            </div>
          </div>
          <div className="sv-arrow"><i></i><i></i><i></i></div>
          <div>
            <div className="sv-lbl g">With a moneyfinacc tracker</div>
            <div className="sv-sheet">
              <div className="sv-row h"><span>Date</span><span>Entry</span><span className="r">Amount</span><span></span></div>
              <div className="sv-row"><span>Bhadra 3</span><span>Kurta × 3</span><span className="r">+7,500</span><span>✓</span></div>
              <div className="sv-row"><span>Bhadra 4</span><span>Supplier</span><span className="r">−1,200</span><span>✓</span></div>
              <div className="sv-row d" style={{ animationDelay: '1.3s' }}><span>Bhadra 5</span><span>Rent · 1st floor</span><span className="r">+16,000</span><span>✓</span></div>
              <div className="sv-row d flag" style={{ animationDelay: '1.8s' }}><span>Bhadra 5</span><span>Rent · 2nd floor</span><span className="r">due</span><span>⚑</span></div>
              <div className="sv-total" style={{ animationDelay: '2.3s' }}><span>Net this week</span><b>Rs 22,300</b></div>
            </div>
            <div className="sv-kpis">
              <div className="sv-kpi"><small>In</small><b className="up">23,500</b></div>
              <div className="sv-kpi"><small>Out</small><b className="dn">1,200</b></div>
              <div className="sv-kpi"><small>Due</small><b className="gd">1</b></div>
              <div className="sv-kpi"><small>Trend</small><svg viewBox="0 0 100 30" preserveAspectRatio="none"><path d="M2 26 L18 22 L32 24 L48 15 L62 17 L78 8 L98 4"/></svg></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
