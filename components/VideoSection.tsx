export default function VideoSection() {
  return (
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
          <button className="player" type="button" aria-label="Play the moneyfinacc walkthrough video">
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
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"></path></svg>
            </span>
            <span className="player-cap"><strong>How moneyfinacc works</strong><small>From Suraj, founder of moneyfinacc</small></span>
          </button>
          <div className="chapters">
            <div className="chapters-h">In this video</div>
            <button className="chap on" type="button"><span className="t">0:00</span><span><b>Why staying organized matters</b><small>Keeping a step ahead when every day is noisy</small></span></button>
            <button className="chap" type="button"><span className="t">0:45</span><span><b>How a tracker works</b><small>Add a row, the dashboard updates itself</small></span></button>
            <button className="chap" type="button"><span className="t">1:40</span><span><b>Delivery to your email</b><small>Open the link, make a copy, it&apos;s yours</small></span></button>
            <button className="chap" type="button"><span className="t">2:30</span><span><b>Custom trackers &amp; the Club</b><small>How to request what you don&apos;t see in the store</small></span></button>
          </div>
        </div>
      </div>
      <div className="video-ctas">
        <a href="#trackers" className="btn-primary shine">Browse trackers <span className="arw">→</span></a>
        <a href="#custom" className="btn-secondary">Request a custom tracker <span className="arw">→</span></a>
        <small>One-time price · delivered to your email · yours to keep</small>
      </div>
    </div>
  );
}
