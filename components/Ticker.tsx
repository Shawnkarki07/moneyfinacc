'use client';

import { tickerFacts } from '@/lib/data';

export default function Ticker() {
  // Double the facts for seamless loop
  const facts = [...tickerFacts, ...tickerFacts];

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {facts.map((fact, i) => (
          <span key={i}>
            <b>·</b> {fact}
          </span>
        ))}
      </div>
    </div>
  );
}
