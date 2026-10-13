'use client';

import { personas } from '@/lib/data';
import { generateSparkline } from '@/lib/utils';
import { ANIMATION_TIMINGS, SVG_DIMENSIONS } from '@/lib/constants';
import { useEffect, useState, useCallback, useMemo } from 'react';
import type { AnimatedElementStyle } from '@/types';

/**
 * Hero Section Component
 *
 * Main landing section featuring:
 * - Rotating persona cards with live data
 * - Animated ambient background elements
 * - Video walkthrough section
 * - Call-to-action buttons
 */
export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const current = useMemo(() => personas[currentIndex], [currentIndex]);

  // Handle persona rotation with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % personas.length);
        setIsTransitioning(false);
      }, ANIMATION_TIMINGS.PERSONA_TRANSITION);
    }, ANIMATION_TIMINGS.PERSONA_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const sparkPath = useMemo(
    () =>
      generateSparkline(
        current.series,
        SVG_DIMENSIONS.SPARKLINE.WIDTH,
        SVG_DIMENSIONS.SPARKLINE.HEIGHT
      ),
    [current.series]
  );

  return (
    <section className="hero" id="top">
      <div className="amb" aria-hidden="true">
        <div className="amb-grid"></div>
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
        <div className="tok" style={{ top: '9%', left: '44%', '--r': '-3deg' } as React.CSSProperties}><b>fx</b> =SUM(C2:C31)</div>
        <div className="tok gold" style={{ top: '40%', left: '47%', '--r': '2deg', animationDelay: '-3s' } as React.CSSProperties}><b>★</b> best month</div>
        <div className="tok" style={{ bottom: '36%', right: '2%', '--r': '-2deg', animationDelay: '-5s' } as React.CSSProperties}><b>✓</b> Paid</div>
        <div className="tok" style={{ top: '61%', left: '2%', '--r': '3deg', animationDelay: '-2s' } as React.CSSProperties}><b>↑</b> 21%</div>
        <div className="tok gold" style={{ bottom: '6%', right: '5%', '--r': '-2deg', animationDelay: '-6s' } as React.CSSProperties}><b>Rs</b> 31,200</div>
        <div className="tok" style={{ bottom: '12%', left: '4%', '--r': '2deg', animationDelay: '-4s' } as React.CSSProperties}><b>⚑</b> check branch</div>
        <div className="coin" style={{ left: '40%', bottom: '62%' }}>Rs</div>
        <div className="coin" style={{ left: '8%', bottom: '30%', animationDelay: '-6s' }}>Rs</div>
        <div className="coin" style={{ right: '12%', bottom: '20%', animationDelay: '-11s' }}>Rs</div>
      </div>
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Google Sheet trackers for founders &amp; businesses</div>
          <h1>
            Get organized.<br />Stay <em>a step ahead.</em>
          </h1>
          <p className="lede">
            You&apos;re good at what you do. Spend your time there. Moneyfinacc builds the Google Sheet that keeps your business organized, structured and automated. It&apos;s delivered to your email and it&apos;s yours for good. No new app to learn.
          </p>
          <div className="hero-ctas">
            <a href="#video" className="btn-primary">
              Watch how it works ↓
            </a>
            <a href="#trackers" className="btn-secondary">
              Browse trackers
            </a>
          </div>
          <div className="hero-trust">
            <div><b className="num">0</b> new apps to learn</div>
            <div><b className="num">100%</b> Google Sheets, yours to keep</div>
            <div><b className="num">48hr</b> custom builds</div>
          </div>
        </div>

        <div className="ledger-stage">
          <div className="ledger-float">{current.chip}</div>
          <div
            className="ledger-card"
            style={{ opacity: isTransitioning ? 0 : 1 }}
          >
            <div className="ledger-top">
              <div>
                <div className="ledger-biz">{current.biz}</div>
                <div className="ledger-loc">{current.loc}</div>
              </div>
              <div className="ledger-tag">{current.tag}</div>
            </div>
            <div className="ledger-figure-row">
              <span className="ledger-figure-label">{current.figLabel}</span>
            </div>
            <div className="ledger-figure num">
              {current.fig}{' '}
              <span className={`delta ${current.down ? 'down' : ''}`}>
                {current.down ? '↓' : '↑'} {current.delta}
              </span>
            </div>
            <svg className="spark" viewBox="0 0 300 56" preserveAspectRatio="none">
              <path
                d={sparkPath}
                fill="none"
                stroke="var(--mock-accent-2)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="ledger-note">{current.note}</div>
          </div>
          <div className="ledger-dots">
            {personas.map((_, i) => (
              <span key={i} className={i === currentIndex ? 'active' : ''} />
            ))}
          </div>
        </div>
      </div>

      <div className="wrap video-block" id="video">
        <div className="video-head">
          <div>
            <div className="section-kicker">Start here · 3-minute walkthrough</div>
            <h2>Watch Suraj explain how moneyfinacc works</h2>
          </div>
          <p>Trackers, email delivery, custom requests, and why it matters.</p>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="video-chip">▶ 3:20</div>
          <div className="video-shell">
            <button className="player" id="player" type="button" aria-label="Play the moneyfinacc walkthrough video">
              <div className="poster" aria-hidden="true">
                <div className="p-fx"><b>fx</b>=SUMIFS(Sales!D:D, Sales!A:A, &quot;Bhadra&quot;)</div>
                <div className="p-row h"><span></span><span>A · Month</span><span>B · Sales</span><span>C · Costs</span><span>D · Profit</span><span>E · Note</span></div>
                <div className="p-row"><span>2</span><span>Baishakh</span><span>82,000</span><span>67,500</span><span className="g">14,500</span><span>Slow start</span></div>
                <div className="p-row"><span>3</span><span>Jestha</span><span>95,000</span><span>75,200</span><span className="g">19,800</span><span>Supplier late</span></div>
                <div className="p-row"><span>4</span><span>Ashadh</span><span>74,000</span><span>62,800</span><span className="g">11,200</span><span>Overstock</span></div>
                <div className="p-row"><span>5</span><span>Shrawan</span><span>110,000</span><span>85,400</span><span className="g">24,600</span><span>Reel worked</span></div>
                <div className="p-row"><span>6</span><span>Bhadra</span><span className="sel">132,000</span><span>100,800</span><span className="gd">31,200 ★</span><span>Best month</span></div>
                <div className="p-row"><span>7</span><span>Ashwin</span><span>—</span><span>—</span><span>—</span><span></span></div>
                <div className="p-row"><span>8</span><span>Kartik</span><span>—</span><span>—</span><span>—</span><span></span></div>
              </div>
              <span className="play" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 4.5v15l13-7.5z"></path>
                </svg>
              </span>
              <span className="player-cap">
                <strong>How moneyfinacc works</strong>
                <small>From Suraj, founder of moneyfinacc</small>
              </span>
            </button>
            <div className="chapters">
              <div className="chapters-h">In this video</div>
              <button className="chap on" type="button">
                <span className="t">0:00</span>
                <span>
                  <b>Why staying organized matters</b>
                  <small>Keeping a step ahead when every day is noisy</small>
                </span>
              </button>
              <button className="chap" type="button">
                <span className="t">0:45</span>
                <span>
                  <b>How a tracker works</b>
                  <small>Add a row, the dashboard updates itself</small>
                </span>
              </button>
              <button className="chap" type="button">
                <span className="t">1:40</span>
                <span>
                  <b>Delivery to your email</b>
                  <small>Open the link, make a copy, it&apos;s yours</small>
                </span>
              </button>
              <button className="chap" type="button">
                <span className="t">2:30</span>
                <span>
                  <b>Custom trackers &amp; the Club</b>
                  <small>How to request what you don&apos;t see in the store</small>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="video-ctas">
          <a href="#trackers" className="btn-primary shine">
            Browse trackers <span className="arw">→</span>
          </a>
          <a href="#custom" className="btn-secondary">
            Request a custom tracker <span className="arw">→</span>
          </a>
          <small>One-time price · delivered to your email · yours to keep</small>
        </div>
      </div>
    </section>
  );
}
