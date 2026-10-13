export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="brand">
              <img
                src="/logo.png"
                alt="moneyfinacc logo"
                style={{ height: '80px', width: 'auto' }}
              />
            </div>
            <p className="foot-tagline">Learn to earn. Simple trackers for the businesses Nepal&apos;s spreadsheets forgot.</p>
          </div>
          <div className="foot-col">
            <h4>Trackers</h4>
            <a href="#trackers">Multi-business cashflow</a>
            <a href="#trackers">Store sales &amp; profit</a>
            <a href="#custom">Custom tracker</a>
            <a href="#club">Moneyfinacc Club</a>
            <a href="#request">Request a modification</a>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <a href="#who">Who it&apos;s for</a>
            <a href="#how">How it works</a>
            <a href="#dashboard">See a dashboard</a>
          </div>
          <div className="foot-col">
            <h4>Talk to us</h4>
            <a href="#custom">WhatsApp</a>
            <a href="#custom">Email</a>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="brand-name">moneyfinacc<span style={{ color: 'var(--accent-2)' }}>.</span></div>
          <div>© 2026 moneyfinacc. All trackers delivered as Google Sheets you fully own.</div>
        </div>
      </div>
    </footer>
  );
}
