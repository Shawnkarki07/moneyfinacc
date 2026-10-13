'use client';

import { sideRailLinks } from '@/lib/data';

interface SideRailProps {
  activeSection: string;
}

export default function SideRail({ activeSection }: SideRailProps) {
  return (
    <div className="rail">
      {sideRailLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={activeSection === link.href.slice(1) ? 'active' : ''}
        >
          <em>{link.label}</em>
          <span></span>
        </a>
      ))}
    </div>
  );
}
