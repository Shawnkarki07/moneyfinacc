'use client';

import { TR } from '@/lib/data';
import { useState, useEffect } from 'react';
import { generateBars } from '@/lib/utils';

interface ProductModalProps {
  productKey: string | null;
  onClose: () => void;
}

export default function ProductModal({ productKey, onClose }: ProductModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (productKey) {
      setCurrentSlide(0);
    }
  }, [productKey]);

  useEffect(() => {
    if (!productKey) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [productKey, currentSlide]);

  if (!productKey) return null;

  const tracker = TR[productKey];
  if (!tracker) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tracker.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tracker.slides.length) % tracker.slides.length);
  };

  const currentSlideData = tracker.slides[currentSlide];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close preview">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12"></path>
          </svg>
        </button>

        <div className="modal-head">
          <div>
            <div className="modal-kicker">{tracker.kind}</div>
            <h2>{tracker.title}</h2>
          </div>
          <div className="modal-meta">
            {tracker.meta.map((m: string, i: number) => (
              <span key={i}>{m}</span>
            ))}
          </div>
        </div>

        <div className="pv-stage">
          <button className="pv-arrow l" onClick={prevSlide} aria-label="Previous slide">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6"></path>
            </svg>
          </button>

          <div className="pv-main">
            <div className="thumb-cap">
              <b>●</b>
              <span>{currentSlideData.t}</span>
            </div>
            <div className="pv-slide">
              <ModalSlideRenderer slide={currentSlideData} />
            </div>
          </div>

          <button className="pv-arrow r" onClick={nextSlide} aria-label="Next slide">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>

        <div className="pv-thumbs">
          {tracker.slides.map((slide: any, i: number) => (
            <button
              key={i}
              className={i === currentSlide ? 'on' : ''}
              onClick={() => setCurrentSlide(i)}
            >
              <b>{i + 1}</b>
              {slide.t}
            </button>
          ))}
        </div>

        <div className="modal-foot">
          <div>
            <div className="modal-good">{tracker.good}</div>
            <ul className="modal-list">
              {tracker.list.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="modal-cta">
            <div className="price num">
              {tracker.price} {tracker.unit && <small>{tracker.unit}</small>}
            </div>
            {productKey === 'custom' ? (
              <a href="#custom" className="btn-primary" onClick={onClose}>Describe your problem</a>
            ) : (
              <button className="btn-primary">Get this tracker</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalSlideRenderer({ slide }: { slide: any }) {
  if (!slide) return null;

  if (slide.type === 'bars' && slide.labels && slide.vals) {
    const bars = generateBars(slide.labels, slide.vals);

    return (
      <svg className="pv-bars" viewBox="0 0 100 70" preserveAspectRatio="xMidYMid meet">
        <line x1="10" y1="55" x2="90" y2="55" stroke="var(--mock-line)" strokeWidth="0.5" />
        {bars.map((bar, i) => {
          const x = 15 + i * (70 / bars.length);
          const barWidth = Math.min(12, 60 / bars.length);
          const y = bar.isNegative ? 55 : 55 - bar.height * 0.4;
          const height = bar.height * 0.4;
          const color = bar.isNegative ? '#E08A6B' : 'var(--mock-accent-2)';

          return (
            <g key={i}>
              <rect x={x} y={y} width={barWidth} height={height} fill={color} rx="1.5" />
              <text x={x + barWidth / 2} y="64" fontSize="3" fill="var(--mock-text-dim)" textAnchor="middle">
                {bar.label}
              </text>
            </g>
          );
        })}
      </svg>
    );
  }

  if (slide.type === 'table' && slide.head && slide.rows) {
    return (
      <div className="pv-table">
        <div className="pv-row h">
          {slide.head.map((h: string, i: number) => <span key={i}>{h}</span>)}
        </div>
        {slide.rows.map((row: string[], i: number) => (
          <div key={i} className="pv-row">
            {row.map((cell: string, j: number) => <span key={j}>{cell}</span>)}
          </div>
        ))}
      </div>
    );
  }

  if (slide.type === 'kpi' && slide.kpis) {
    return (
      <div className="pv-kpis">
        {slide.kpis.map((kpi: [string, string], i: number) => (
          <div key={i} className="pv-kpi-item">
            <div className="pv-kpi-label">{kpi[0]}</div>
            <div className="pv-kpi-value num">{kpi[1]}</div>
          </div>
        ))}
        {slide.spark && (
          <svg className="pv-spark" viewBox="0 0 100 30" preserveAspectRatio="none">
            <path
              d={`M ${slide.spark.map((v: number, i: number) => `${(i / (slide.spark.length - 1)) * 100},${30 - (v / Math.max(...slide.spark)) * 25}`).join(' L ')}`}
              fill="none"
              stroke="var(--mock-accent-2)"
              strokeWidth="2"
            />
          </svg>
        )}
      </div>
    );
  }

  if (slide.type === 'notes' && slide.notes) {
    return (
      <div className="pv-notes">
        {slide.notes.map((note: string, i: number) => (
          <div key={i} className="pv-note">
            <span>•</span> {note}
          </div>
        ))}
      </div>
    );
  }

  return null;
}
