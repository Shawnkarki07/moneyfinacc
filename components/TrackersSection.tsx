'use client';

import { TR } from '@/lib/data';
import { useState, useEffect, useRef } from 'react';

interface TrackersProps {
  onOpenModal: (productKey: string) => void;
}

export default function TrackersSection({ onOpenModal }: TrackersProps) {
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
    <section id="trackers" className="alt">
      <div className="wrap">
        <div className="section-head">
          <div className="section-kicker">The trackers</div>
          <h2>Pick one. A Google Sheet that updates itself.</h2>
          <p className="desc">Formulas written, dashboard built, and a short setup guide inside.</p>
        </div>
        <div className="deco" aria-hidden="true" style={{ top: '0px' }}>
          <div className="deco-card">
            <div className="deco-lbl">
              <span>Sales by month</span>
              <b>live</b>
            </div>
            <div className="bars">
              {[[0.35, 0.6], [0.5, 0.8], [0.3, 0.55], [0.6, 0.9], [0.45, 0.75], [0.7, 1], [0.55, 0.85]].map((p, i) => (
                <span
                  key={i}
                  className={i === 5 ? 'gold' : ''}
                  style={{
                    '--a': p[0],
                    '--b': p[1],
                    animationDelay: `${i * 0.25}s`
                  } as React.CSSProperties}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="products" ref={gridRef}>
          {Object.entries(TR).map(([key, tracker], index) => (
            <ProductCard key={key} productKey={key} tracker={tracker} cardIndex={index} onOpenModal={onOpenModal} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ productKey, tracker, cardIndex, onOpenModal }: { productKey: string; tracker: any; cardIndex: number; onOpenModal: (key: string) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const hoverIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation effect (runs when not hovering)
  useEffect(() => {
    // Start auto-rotation with staggered delay (ti*1100)
    const startDelay = cardIndex * 1100;

    const startAutoRotation = setTimeout(() => {
      autoIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % tracker.slides.length);
      }, 3800);
    }, startDelay);

    return () => {
      clearTimeout(startAutoRotation);
      if (autoIntervalRef.current) {
        clearInterval(autoIntervalRef.current);
      }
    };
  }, [cardIndex, tracker.slides.length]);

  // Stop auto-rotation when hovering
  useEffect(() => {
    if (isHovering) {
      if (autoIntervalRef.current) {
        clearInterval(autoIntervalRef.current);
        autoIntervalRef.current = null;
      }
    }
  }, [isHovering]);

  // Hover effect
  useEffect(() => {
    if (isHovering && tracker.slides.length > 1) {
      hoverIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % tracker.slides.length);
      }, 1500);
    } else {
      if (hoverIntervalRef.current) {
        clearInterval(hoverIntervalRef.current);
        hoverIntervalRef.current = null;
      }
    }

    return () => {
      if (hoverIntervalRef.current) {
        clearInterval(hoverIntervalRef.current);
      }
    };
  }, [isHovering, tracker.slides.length]);

  const isFeatured = productKey === 'store';

  return (
    <div className={`product-card ${isFeatured ? 'featured' : ''}`}>
      <div className="product-top">
        {isFeatured && <span className="featured-flag">Most popular</span>}
        <div className="kind">{tracker.kind}</div>
        <h3>{tracker.title}</h3>
      </div>

      <div
        className="thumb"
        data-p={productKey}
        tabIndex={0}
        role="button"
        aria-label={`Preview ${tracker.title}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => onOpenModal(productKey)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenModal(productKey);
          }
        }}
      >
        <div className="thumb-cap">
          <b>●</b>
          <span className="tc">{currentSlide + 1}/{tracker.slides.length} · {tracker.slides[currentSlide].t}</span>
        </div>
        <div className="thumb-dots">
          {tracker.slides.map((_: any, i: number) => (
            <i key={i} className={i === currentSlide ? 'on' : ''} />
          ))}
        </div>
        <div className="slides">
          {tracker.slides.map((slide: any, i: number) => (
            <SlideRenderer key={i} slide={slide} isActive={i === currentSlide} />
          ))}
        </div>
        <div className="thumb-hint">hover to see what&apos;s inside</div>
        <div className="thumb-info">
          <h4>What&apos;s inside</h4>
          <ul>
            {tracker.list.slice(0, 4).map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <button type="button" className="pv" onClick={(e) => { e.stopPropagation(); onOpenModal(productKey); }}>
            Open preview →
          </button>
        </div>
      </div>

      <div className="product-body">
        <ul>
          {tracker.list.slice(0, 4).map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="mod-note">
          {productKey === 'custom' ? '✓ Club members: simple trackers included' : '✓ First 3 minor modifications free'}
        </div>
        <div className="product-foot">
          <div className="price num">
            {tracker.price} {tracker.unit && <small>{tracker.unit}</small>}
          </div>
          {productKey === 'custom' ? (
            <a href="#custom" className="buy-btn">Describe your problem</a>
          ) : (
            <button className="buy-btn">Get this tracker</button>
          )}
        </div>
      </div>
    </div>
  );
}

function SlideRenderer({ slide, isActive }: { slide: any; isActive: boolean }) {
  if (!slide) return null;

  // Helper function to classify cell values
  const cls = (v: string) => {
    const val = String(v);
    if (val.startsWith('+') || val === 'Paid') return 'p';
    if (val.startsWith('−')) return 'n';
    if (val === 'Overdue') return 'w';
    return '';
  };

  if (slide.type === 'bars') {
    const max = Math.max(...slide.vals.map((v: number) => Math.abs(v)));
    const hasNeg = slide.vals.some((v: number) => v < 0);
    const pz = hasNeg ? 68 : 100;
    const hi = slide.vals.indexOf(max);

    return (
      <div className={`slide ${isActive ? 'on' : ''}`}>
        <div className="m-bars">
          {slide.vals.map((v: number, i: number) => {
            const h = (Math.abs(v) / max) * 82;
            const isHigh = i === hi;

            return (
              <div key={i} className="m-bar">
                <div className="pz" style={{ height: `${pz}%` }}>
                  {v >= 0 && (
                    <>
                      <em>{v}k</em>
                      <i
                        className={isHigh ? 'hi' : ''}
                        style={{
                          height: `${h}%`,
                          animationDelay: `${i * 0.08}s`
                        }}
                      ></i>
                    </>
                  )}
                </div>
                {hasNeg && (
                  <div className="nz" style={{ height: `${100 - pz}%` }}>
                    {v < 0 && (
                      <>
                        <i
                          className="neg"
                          style={{
                            height: `${(Math.abs(v) / max) * 82 * 2}%`,
                            animationDelay: `${i * 0.08}s`
                          }}
                        ></i>
                        <em>−{Math.abs(v)}k ⚑</em>
                      </>
                    )}
                  </div>
                )}
                <span>{slide.labels[i]}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (slide.type === 'table') {
    return (
      <div className={`slide ${isActive ? 'on' : ''}`}>
        <table className="m-tbl">
          <thead>
            <tr>
              {slide.head?.map((h: string, i: number) => <th key={i}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {slide.rows?.map((row: string[], i: number) => (
              <tr key={i}>
                {row.map((cell: string, j: number) => (
                  <td key={j} className={cls(cell)}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (slide.type === 'kpi') {
    const w = 300;
    const h = 60;
    const mx = Math.max(...slide.spark);
    const mn = Math.min(...slide.spark);
    const pts = slide.spark.map((v: number, i: number) => {
      const x = (i / (slide.spark.length - 1)) * w;
      const y = h - ((v - mn) / (mx - mn)) * (h - 8) - 4;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');

    return (
      <div className={`slide ${isActive ? 'on' : ''}`}>
        <div className="m-kpis">
          {slide.kpis?.map((kpi: [string, string], i: number) => (
            <div key={i}>
              <small>{kpi[0]}</small>
              <b>{kpi[1]}</b>
            </div>
          ))}
        </div>
        <svg className="m-spark" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
          <polygon
            points={`0,${h} ${pts} ${w},${h}`}
            fill="#7CD99A"
            opacity="0.12"
          />
          <polyline
            points={pts}
            fill="none"
            stroke="#7CD99A"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  if (slide.type === 'notes') {
    return (
      <div className={`slide ${isActive ? 'on' : ''}`}>
        <div className="m-notes">
          {slide.notes?.map((note: string, i: number) => (
            <span key={i}>{note}</span>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
