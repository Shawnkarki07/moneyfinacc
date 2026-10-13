export default function CustomSection() {
  return (
    <section id="custom" className="alt">
      <div className="amb" aria-hidden="true">
        <div className="dots-bg"></div>
      </div>
      <div className="wrap">
        <div className="custom-band">
          <div>
            <div className="section-kicker">Nothing above fits?</div>
            <h2>Describe your problem in plain words. Get back a sheet that solves it.</h2>
            <p>No jargon needed. We confirm the price before we start and usually deliver within 48 hours.</p>
          </div>
          <div className="custom-form">
            <label htmlFor="probField">Your problem, in your own words</label>
            <textarea
              id="probField"
              placeholder="e.g. I collect rent from 6 tenants on different dates and keep forgetting who paid..."
            ></textarea>
            <label htmlFor="contactField">WhatsApp or email</label>
            <textarea
              id="contactField"
              style={{ minHeight: '44px' }}
              placeholder="98XXXXXXXX or you@email.com"
            ></textarea>
            <button className="btn-primary">Send my problem →</button>
            <div className="fineprint">Usually built within 48 hours · Club members: simple trackers included</div>
          </div>
        </div>
      </div>
    </section>
  );
}
