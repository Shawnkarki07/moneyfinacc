'use client';

import { quotes } from '@/lib/data';
import { useEffect, useRef } from 'react';

export default function QuotesSection() {
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
    <section id="quotes" className="alt">
      <div className="wrap">
        <div className="section-head">
          <div className="section-kicker">From our audit clients</div>
          <h2>What business owners say.</h2>
        </div>

        <div className="deco" aria-hidden="true" style={{ top: '0px' }}>
          <div className="deco-card">
            <div className="deco-lbl">
              <span>Client feedback</span>
              <b>audits</b>
            </div>
            <div className="starrow">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="m12 2 3 6.9 7.5.7-5.7 5 1.7 7.4L12 18.3 5.5 22l1.7-7.4-5.7-5 7.5-.7z"/>
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="m12 2 3 6.9 7.5.7-5.7 5 1.7 7.4L12 18.3 5.5 22l1.7-7.4-5.7-5 7.5-.7z"/>
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="m12 2 3 6.9 7.5.7-5.7 5 1.7 7.4L12 18.3 5.5 22l1.7-7.4-5.7-5 7.5-.7z"/>
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="m12 2 3 6.9 7.5.7-5.7 5 1.7 7.4L12 18.3 5.5 22l1.7-7.4-5.7-5 7.5-.7z"/>
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="m12 2 3 6.9 7.5.7-5.7 5 1.7 7.4L12 18.3 5.5 22l1.7-7.4-5.7-5 7.5-.7z"/>
              </svg>
            </div>
            <div className="deco-skel">
              <i style={{ width: '90%' }}></i>
              <i style={{ width: '70%' }}></i>
            </div>
          </div>
        </div>

        <div className="quotes-grid rv-grid" ref={gridRef}>
          {quotes.map((quote, i) => (
            <figure key={i} className="quote-card rv" style={{ margin: 0 }}>
              <svg className="rv-q" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M9.5 6C6 8 4 11 4 15c0 2.8 2 5 4.5 5S13 18 13 15.5c0-2-1.3-3.5-3.2-3.9C10.3 9.6 12 7.7 14.5 6.3L9.5 6zm10 0c-3.5 2-5.5 5-5.5 9 0 2.8 2 5 4.5 5S23 18 23 15.5c0-2-1.3-3.5-3.2-3.9.5-2 2.2-3.9 4.7-5.3L19.5 6z"></path>
              </svg>
              <p className="q">&quot;{quote.text}&quot;</p>
              <figcaption className="quote-who" style={{ marginTop: 'auto' }}>
                <div className="quote-avatar">{quote.avatar}</div>
                <div>
                  <div className="quote-name">{quote.author}</div>
                  <div className="quote-role">{quote.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="rv-foot">Feedback from clients Suraj worked with during business audits and advisory work, shared with their permission.</p>
      </div>
    </section>
  );
}
