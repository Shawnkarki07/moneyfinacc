export default function PullQuote() {
  return (
    <section className="pull-quote">
      <div className="amb" aria-hidden="true">
        <div className="float-note" style={{ left: '7%', top: '22%', transform: 'rotate(-4deg)' }}>
          <i></i><i></i><i className="s"></i>
        </div>
        <div className="float-note g" style={{ left: '13%', bottom: '14%', width: '120px', animationDelay: '-4s' }}>
          <i></i><i className="s"></i>
        </div>
        <div className="float-note y" style={{ right: '8%', top: '18%', animationDelay: '-2s' }}>
          <i></i><i></i><i></i><i className="s"></i>
        </div>
        <div className="float-note" style={{ right: '14%', bottom: '12%', width: '120px', animationDelay: '-6s' }}>
          <i></i><i className="s"></i>
        </div>
      </div>
      <div className="wrap">
        <div className="quote-box">
          <svg className="quote-mark" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.5 6C6 8 4 11 4 15c0 2.8 2 5 4.5 5S13 18 13 15.5c0-2-1.3-3.5-3.2-3.9C10.3 9.6 12 7.7 14.5 6.3L9.5 6zm10 0c-3.5 2-5.5 5-5.5 9 0 2.8 2 5 4.5 5S23 18 23 15.5c0-2-1.3-3.5-3.2-3.9.5-2 2.2-3.9 4.7-5.3L19.5 6z"></path>
          </svg>
          <p>&quot;I need something through which I can get a basic idea of where my money is going — and if it&apos;s really being productive, or just getting wasted.&quot;</p>
          <div className="quote-attribution">— what a Kathmandu business owner told us, unprompted, in a five-minute conversation</div>
        </div>
      </div>
    </section>
  );
}
