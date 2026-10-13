export default function WhatSection() {
  return (
    <section className="what" id="what">
      <div className="amb" aria-hidden="true">
        <div className="dots-bg"></div>
        <div className="ring-bg" style={{ width: '220px', height: '220px', left: '4%', top: '50%', marginTop: '-110px' }}></div>
        <div className="ring-bg" style={{ width: '160px', height: '160px', right: '6%', top: '50%', marginTop: '-80px', animationDirection: 'reverse', animationDuration: '60s' }}></div>
      </div>
      <div className="wrap">
        <div className="what-grid">
          <div className="what-col not">
            <div className="what-label">This isn&apos;t</div>
            <ul>
              <li>
                <svg className="what-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12"></path>
                </svg>
                <span>Accounting software, or an ERP</span>
              </li>
              <li>
                <svg className="what-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12"></path>
                </svg>
                <span>A system that manages your whole business</span>
              </li>
              <li>
                <svg className="what-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12"></path>
                </svg>
                <span>Something you need training or a login to use</span>
              </li>
            </ul>
          </div>
          <div className="what-col is">
            <div className="what-label">This is</div>
            <ul>
              <li>
                <svg className="what-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>One simple sheet, built around one question</span>
              </li>
              <li>
                <svg className="what-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Fully yours — no platform, no monthly login</span>
              </li>
              <li>
                <svg className="what-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>A clear answer: is it working, or just moving?</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
