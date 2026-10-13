'use client';

import { months, monthData } from '@/lib/data';
import { useState } from 'react';

export default function DashboardSection() {
  const bestIdx = monthData.findIndex(m => m.sales === Math.max(...monthData.map(d => d.sales)));
  const [activeMonth, setActiveMonth] = useState(bestIdx);

  const current = monthData[activeMonth];
  const maxSales = Math.max(...monthData.map(m => m.sales));

  // Chart dimensions matching original HTML
  const W = 560, H = 200, pad = 18, barW = 560/12*0.42, gap = 560/12;

  return (
    <section id="dashboard">
      <div className="wrap">
        <div className="section-head">
          <div className="section-kicker">Inside the dashboard</div>
          <h2>Pick a month. See exactly what happened.</h2>
          <p className="desc">Add a row, the dashboard updates. Tap any month below.</p>
        </div>

        <div className="deco" aria-hidden="true" style={{ top: '0px' }}>
          <div className="deco-card">
            <div className="deco-lbl">
              <span>Profit trend</span>
              <b>↑ 21%</b>
            </div>
            <svg className="sparkdeco" viewBox="0 0 260 96" preserveAspectRatio="none">
              <path className="a" d="M0 80 L30 70 L60 74 L90 56 L120 60 L150 40 L180 44 L210 24 L240 28 L260 12 L260 96 L0 96Z"/>
              <path className="l" d="M0 80 L30 70 L60 74 L90 56 L120 60 L150 40 L180 44 L210 24 L240 28 L260 12"/>
              <circle cx="258" cy="12" r="4.5"/>
            </svg>
          </div>
        </div>

        <div className="dash-panel">
          <div className="dash-head">
            <div>
              <div className="dash-title">Sano Pasal — Sales &amp; Profit Tracker</div>
              <div className="dash-sub">Showing: online clothing store · FY 2082/83</div>
            </div>
            <div className="dash-sub">Last entry: <b className="num" style={{ color: 'var(--mock-text)' }}>2 hours ago</b></div>
          </div>

          <div className="month-tabs">
            {months.map((month, i) => (
              <button
                key={i}
                className={`month-tab ${i === activeMonth ? 'active' : ''} ${i === bestIdx ? 'best' : ''}`}
                onClick={() => setActiveMonth(i)}
              >
                {month}
              </button>
            ))}
          </div>

          <div className="dash-grid">
            <div className="chart-box">
              <div className="chart-legend">
                <b><span className="dot sales"></span>Sales</b>
                <b><span className="dot profit"></span>Profit</b>
              </div>
              <svg width="100%" height="200" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
                <line x1="0" y1={H - pad} x2={W} y2={H - pad} stroke="#243128" strokeWidth="1"></line>
                {monthData.map((m, i) => {
                  const x = i * gap + gap * 0.16;
                  const hSales = (m.sales / maxSales) * (H - pad * 2);
                  const hProfit = (m.profit / maxSales) * (H - pad * 2);
                  const ySales = H - pad - hSales;
                  const yProfit = H - pad - hProfit;
                  const active = i === activeMonth;

                  return (
                    <g key={i}>
                      <rect
                        x={x}
                        y={ySales}
                        width={barW}
                        height={hSales}
                        rx="2"
                        fill={active ? '#7CD99A' : 'rgba(124,217,154,0.35)'}
                      />
                      <rect
                        x={x + barW * 0.52}
                        y={yProfit}
                        width={barW * 0.5}
                        height={hProfit}
                        rx="2"
                        fill={active ? '#D9A544' : 'rgba(217,165,68,0.4)'}
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="side-stats">
              <div className="stat-card">
                <div className="label">Sales this month</div>
                <div className="val num">Rs {current.sales.toLocaleString('en-IN')}</div>
              </div>
              <div className="stat-card">
                <div className="label">Profit this month</div>
                <div className="val num">Rs {current.profit.toLocaleString('en-IN')}</div>
              </div>
              <div className="stat-card">
                <div className="label">Best-selling item</div>
                <div className="val" style={{ fontSize: '1rem' }}>{current.item}</div>
              </div>
            </div>
          </div>

          <div className="notes-panel">
            <div className="label">What you noted down this month</div>
            <div className="sticky-notes">
              {current.notes.map((note, i) => (
                <div key={i} className="sticky">{note}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
