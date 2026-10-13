'use client';

import { useEffect, useRef } from 'react';
export default function ClubSection() {
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
    <section id="club">
      <div className="amb" aria-hidden="true">
        <div className="blob b1" style={{ top: '10%', right: '-80px', opacity: 0.35 }}></div>
        <div className="blob b2" style={{ top: '35%', left: '-100px', bottom: 'auto', opacity: 0.35 }}></div>
        <div className="ring-bg" style={{ width: '300px', height: '300px', left: '-60px', top: '120px' }}></div>
        <div className="ring-bg" style={{ width: '240px', height: '240px', right: '-40px', top: '70%', animationDirection: 'reverse' }}></div>
      </div>
      <div className="wrap">
        <div className="club-head">
          <div className="section-kicker">Moneyfinacc Club</div>
          <h2>Your business changes. Your tools should too.</h2>
          <p className="desc" style={{ margin: '10px auto 0' }}>Keep your trackers up to date, and get new ones when you need them. Don&apos;t see it in our store? Members just ask.</p>
        </div>

        <div className="club-tiers" ref={gridRef}>
          {/* Starter Card */}
          <div className="club-card reveal">
            <div className="club-kicker">Starter</div>
            <h3>For solo founders &amp; single-store owners</h3>
            <ul className="club-list">
              <li>
                <span className="club-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41L11 3.83A2 2 0 0 0 9.17 3H4a1 1 0 0 0-1 1v5.17a2 2 0 0 0 .83 1.42l9.58 9.58a2 2 0 0 0 2.83 0l4.35-4.35a2 2 0 0 0 0-2.83z"></path>
                    <circle cx="7.5" cy="7.5" r="1.4" fill="currentColor" stroke="none"></circle>
                  </svg>
                </span>
                <span className="txt">1 simple tracker request every month <span className="club-free">Included</span></span>
              </li>
              <li>
                <span className="club-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 1 1-3-6.7"></path>
                    <path d="M21 3v6h-6"></path>
                  </svg>
                </span>
                <span className="txt">3 free minor modifications, every month</span>
              </li>
              <li>
                <span className="club-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14"></path>
                  </svg>
                </span>
                <span className="txt">1 free feature add, every month</span>
              </li>
              <li>
                <span className="club-icon gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="M3 7l9 6 9-6"></path>
                  </svg>
                </span>
                <span className="txt">Monthly newsletter — tax &amp; finance updates in Nepal</span>
              </li>
              <li>
                <span className="club-icon gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 7h6M9 11h6M9 15h3"></path>
                    <rect x="4" y="3" width="16" height="18" rx="2"></rect>
                  </svg>
                </span>
                <span className="txt">Member pricing when a bigger build needs a quote</span>
              </li>
            </ul>
            <div className="club-price-row">
              <div className="club-price num">Rs 499</div>
              <span>/month</span>
            </div>
            <div className="club-trust">Pay monthly · stop anytime</div>
            <button className="btn-primary club-cta">Join Starter →</button>
          </div>

          {/* Growth Card */}
          <div className="club-card growth reveal">
            <div className="club-flag">For multi-branch owners</div>
            <div className="club-kicker">Growth</div>
            <h3>For founders running more than one business</h3>
            <ul className="club-list">
              <li>
                <span className="club-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 1 1-3-6.7"></path>
                    <path d="M21 3v6h-6"></path>
                  </svg>
                </span>
                <span className="txt">Everything in Starter, for every business you run</span>
              </li>
              <li>
                <span className="club-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </span>
                <span className="txt">2 simple tracker requests every month <span className="club-free">Included</span></span>
              </li>
              <li>
                <span className="club-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </span>
                <span className="txt">Priority turnaround on requests</span>
              </li>
              <li>
                <span className="club-icon gold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41L11 3.83A2 2 0 0 0 9.17 3H4a1 1 0 0 0-1 1v5.17a2 2 0 0 0 .83 1.42l9.58 9.58a2 2 0 0 0 2.83 0l4.35-4.35a2 2 0 0 0 0-2.83z"></path>
                    <circle cx="7.5" cy="7.5" r="1.4" fill="currentColor" stroke="none"></circle>
                  </svg>
                </span>
                <span className="txt">Bigger discount on quoted, larger builds</span>
              </li>
              <li>
                <span className="club-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1.2"></rect>
                    <rect x="14" y="3" width="7" height="7" rx="1.2"></rect>
                    <rect x="14" y="14" width="7" height="7" rx="1.2"></rect>
                    <rect x="3" y="14" width="7" height="7" rx="1.2"></rect>
                  </svg>
                </span>
                <span className="txt">One Club folder covering all your trackers</span>
              </li>
            </ul>
            <div className="club-price-row">
              <div className="club-price num">Rs 999</div>
              <span>/month</span>
            </div>
            <div className="club-trust">Pay monthly · stop anytime</div>
            <button className="btn-primary club-cta">Join Growth →</button>
          </div>
        </div>

        {/* Request Explanation Section */}
        <div className="req-explain reveal" id="club-requests">
          <div className="req-explain-head">
            <h3>Need a tracker that isn&apos;t in our store?</h3>
            <p>Your plan covers simple tracker requests every month (Starter 1, Growth 2). We confirm which type each request is before we start.</p>
          </div>
          <div className="req-cols">
            <div className="req-col">
              <span className="req-tag">Included in your plan</span>
              <h4>Simple trackers for one specific task</h4>
              <p>One clean sheet for one job. No extra cost.</p>
              <ul>
                <li>Daily expense or petty-cash log</li>
                <li>Staff attendance &amp; leave sheet</li>
                <li>Rent or EMI due-date list</li>
                <li>Simple stock or order checklist</li>
              </ul>
            </div>
            <div className="req-col quote">
              <span className="req-tag">Quoted separately</span>
              <h4>Builds that need significant time &amp; analysis</h4>
              <p>We send a quote first. Nothing is charged unless you approve.</p>
              <ul>
                <li>Multi-sheet systems with dashboards</li>
                <li>Heavy automation across many tabs</li>
                <li>Analysis or restructuring of your existing data</li>
                <li>Payroll, costing or inventory across branches</li>
              </ul>
            </div>
          </div>
          <div className="req-flow">
            <div className="req-step">
              <span className="n">1 · Request</span>
              <b>Describe the tracker</b>
              <span>In plain words, or send a WhatsApp voice note.</span>
            </div>
            <div className="req-step">
              <span className="n">2 · Review</span>
              <b>We confirm: included or quoted</b>
              <span>If it needs a quote, you see the price before we start.</span>
            </div>
            <div className="req-step">
              <span className="n">3 · Deliver</span>
              <b>It arrives in your email</b>
              <span>And a copy is saved in your Club folder.</span>
            </div>
          </div>
        </div>

        <div className="club-asterisk">Requests beyond your monthly free limit, and larger quoted builds, are charged individually. You always approve the price first.</div>
        <a href="#request" className="club-link">See exactly how modification requests work ↓</a>

        {/* Club Visual - Folder Mock */}
        <div className="club-visual reveal">
          <div className="club-visual-badge">Founding members now open</div>
          <div className="club-mock">
            <div className="club-mock-head">Inside your Club folder</div>
            <div className="club-mock-sub">What gets added when you&apos;re a member</div>

            <div className="drop-item">
              <span className="drop-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </span>
              <div className="drop-text">
                <div className="drop-title">Staff Attendance Tracker</div>
                <div className="drop-sub">Your request, built and saved to your folder</div>
              </div>
              <span className="drop-tag new">New</span>
            </div>

            <div className="drop-item">
              <span className="drop-icon gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <path d="M3 7l9 6 9-6"></path>
                </svg>
              </span>
              <div className="drop-text">
                <div className="drop-title">Founder Newsletter — Falgun issue</div>
                <div className="drop-sub">Delivered to your inbox this week</div>
              </div>
              <span className="drop-tag mail">Newsletter</span>
            </div>

            <div className="drop-item">
              <span className="drop-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41L11 3.83A2 2 0 0 0 9.17 3H4a1 1 0 0 0-1 1v5.17a2 2 0 0 0 .83 1.42l9.58 9.58a2 2 0 0 0 2.83 0l4.35-4.35a2 2 0 0 0 0-2.83z"></path>
                  <circle cx="7.5" cy="7.5" r="1.4" fill="currentColor" stroke="none"></circle>
                </svg>
              </span>
              <div className="drop-text">
                <div className="drop-title">Member price on a larger build</div>
                <div className="drop-sub">Applied automatically to any quote</div>
              </div>
            </div>

            <div className="club-newsletter-preview">
              <div className="subj">Example issue: tax dates to keep in mind</div>
              <div className="snip">Upcoming filing dates, what they mean for small sellers, and a short checklist.</div>
            </div>

            <div className="club-spark-label">
              <span>Example: trackers added over a year</span>
              <b>8</b>
            </div>
            <svg className="club-spark" viewBox="0 0 300 40" preserveAspectRatio="none">
              <polygon
                points="0,40 0,36 27.3,36 54.5,32 81.8,32 109.1,28 136.4,28 163.6,24 190.9,20 218.2,20 245.5,16 272.7,12 300,8 300,40"
                fill="#7CD99A"
                opacity="0.12"
              />
              <polyline
                points="0,36 27.3,36 54.5,32 81.8,32 109.1,28 136.4,28 163.6,24 190.9,20 218.2,20 245.5,16 272.7,12 300,8"
                fill="none"
                stroke="#7CD99A"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
