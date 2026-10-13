'use client';

import { useEffect, useRef } from 'react';

export default function Quickstart() {
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
    <section className="quickstart" id="start">
      <div className="wrap">
        <div className="qs-head">
          <div>
            <h2>Where should you start?</h2>
            <p className="desc" style={{ marginTop: '6px' }}>Pick the one that sounds like you.</p>
          </div>
        </div>
        <div className="qs-grid" ref={gridRef}>
          <a className="qs-card" href="#trackers">
            <div className="qs-num">If you run more than one business</div>
            <h3>See every branch, side by side</h3>
            <p>All outlets in one view. The losing one gets flagged.</p>
            <span className="qs-arrow">
              Go to this tracker{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6"></path>
              </svg>
            </span>
          </a>
          <a className="qs-card" href="#trackers">
            <div className="qs-num">If you sell online, registered or not</div>
            <h3>Know your real profit</h3>
            <p>Every sale and purchase logged. See which month made money.</p>
            <span className="qs-arrow">
              Go to this tracker{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6"></path>
              </svg>
            </span>
          </a>
          <a className="qs-card" href="#custom">
            <div className="qs-num">If your problem&apos;s not listed here</div>
            <h3>Describe it, we&apos;ll build it</h3>
            <p>Rent, rider commissions, stock counts. Tell us, we build it.</p>
            <span className="qs-arrow">
              Describe your problem{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
