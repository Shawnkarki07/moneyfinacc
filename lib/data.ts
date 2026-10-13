// All data structures from the original HTML

export const personas = [
  {
    biz: 'Momo Point',
    loc: 'Restaurant · 3 branches, Kathmandu',
    tag: 'Cashflow tracker',
    figLabel: "Today's sales, all branches",
    fig: 'Rs 18,400',
    delta: '12%',
    down: false,
    note: 'Branch 2 (Thamel) is low on chicken stock — call the supplier before Friday rush.',
    chip: '↑ Rs 4,200 today',
    series: [8, 10, 9, 13, 11, 15, 14, 18, 16, 19, 17, 18.4]
  },
  {
    biz: 'Sano Pasal',
    loc: 'Online store · Instagram & Facebook',
    tag: 'Sales & profit tracker',
    figLabel: 'Profit this month',
    fig: 'Rs 62,150',
    delta: '21%',
    down: false,
    note: 'That reel post actually worked — restock the blue kurta before Dashain.',
    chip: '↑ Rs 3,050 profit today',
    series: [20, 24, 22, 30, 28, 35, 33, 40, 44, 50, 58, 62.1]
  },
  {
    biz: '6-Tenant Rent Ledger',
    loc: 'Custom tracker · built in 2 days',
    tag: 'Custom build',
    figLabel: 'Rent collected this month',
    fig: 'Rs 96,000',
    delta: '2 pending',
    down: true,
    note: "Tenant 4 (2nd floor) hasn't paid since the 5th — sheet flagged it automatically.",
    chip: '2 tenants overdue',
    series: [16, 16, 16, 16, 16, 32, 48, 64, 80, 80, 96, 96]
  }
];

export const months = ['Baishakh', 'Jestha', 'Ashadh', 'Shrawan', 'Bhadra', 'Ashwin', 'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'];

export const monthData = [
  {sales: 82000, profit: 14500, item: 'Cotton kurta set', notes: ['Slow month — ran a 10% off sale in week 3.']},
  {sales: 95000, profit: 19800, item: 'Denim jacket', notes: ['Rainy season stock delayed by supplier 4 days.']},
  {sales: 74000, profit: 11200, item: 'Cotton kurta set', notes: ['Too much stock in one colour — mark down next month.']},
  {sales: 110000, profit: 24600, item: 'Printed saree', notes: ['Reel about styling saree got 40k views — sales spiked.']},
  {sales: 132000, profit: 31200, item: 'Printed saree', notes: ['Best month yet — reorder saree stock before Dashain.', 'Delivery rider asked for better rates, negotiate.']},
  {sales: 168000, profit: 41500, item: 'Dashain gift sets', notes: ['Dashain season — pre-orders opened 2 weeks early.', "Need 2nd packer, one person can't keep up."]},
  {sales: 121000, profit: 26800, item: 'Printed saree', notes: ['Post-festival dip, expected. Cleared old stock.']},
  {sales: 88000, profit: 15900, item: 'Cotton kurta set', notes: ['Switched courier — fewer delivery complaints.']},
  {sales: 96000, profit: 18700, item: 'Denim jacket', notes: ['Winter jackets doing well, restock size M and L.']},
  {sales: 104000, profit: 21300, item: 'Winter jacket', notes: ['Supplier raised prices 8% — check new margins.']},
  {sales: 118000, profit: 27900, item: 'Winter jacket', notes: ['Instagram ads finally profitable — scale budget.']},
  {sales: 99000, profit: 20100, item: 'Cotton kurta set', notes: ['Slower month, planning new spring collection.']}
];

export interface TrackerSlide {
  t: string;
  type: 'bars' | 'table' | 'kpi' | 'notes';
  labels?: string[];
  vals?: number[];
  head?: string[];
  rows?: string[][];
  kpis?: [string, string][];
  spark?: number[];
  notes?: string[];
}

export interface Tracker {
  kind: string;
  title: string;
  price: string;
  unit: string;
  buy: string;
  href: string;
  good: string;
  list: string[];
  meta: string[];
  slides: TrackerSlide[];
}

export const TR: Record<string, Tracker> = {
  multi: {
    kind: 'For multi-branch owners',
    title: 'Multi-Business Cashflow Tracker',
    price: 'Rs 1,499',
    unit: 'one-time',
    buy: 'Get this tracker',
    href: '#trackers',
    good: 'For restaurants, boutiques and pharmacies running 2 or more outlets.',
    list: ['Entries for every branch', 'Branch comparison dashboard', 'Auto-flag on the losing branch', 'Printable monthly summary', 'Setup guide inside', '3 free minor changes'],
    meta: ['Google Sheets', '3 tabs', 'Phone friendly'],
    slides: [
      {t: 'Branch comparison', type: 'bars', labels: ['Thamel', 'Patan', 'Baneshwor', 'Bhaktapur'], vals: [62, 32, -8, 18]},
      {t: 'Monthly summary', type: 'table', head: ['Month', 'In', 'Out', 'Net'], rows: [['Shrawan', '894,500', '810,200', '+84,300'], ['Bhadra', '912,000', '826,700', '+85,300'], ['Ashwin', '970,400', '872,100', '+98,300']]},
      {t: 'Daily entries', type: 'table', head: ['Date', 'Branch', 'Type', 'Amount'], rows: [['Ashwin 12', 'Thamel', 'Sale', '+18,400'], ['Ashwin 12', 'Patan', 'Rent', '−35,000'], ['Ashwin 13', 'Baneshwor', 'Stock', '−12,600'], ['Ashwin 13', 'Bhaktapur', 'Sale', '+9,800']]}
    ]
  },
  store: {
    kind: 'For online sellers',
    title: 'Store Sales & Profit Tracker',
    price: 'Rs 999',
    unit: 'one-time',
    buy: 'Get this tracker',
    href: '#trackers',
    good: 'For Instagram and WhatsApp sellers and single stores, registered or not.',
    list: ['Sales & purchase log', 'Dashboard with best month', 'Notes on every entry', 'Month-by-month profit', 'Setup guide inside', '3 free minor changes'],
    meta: ['Google Sheets', '3 tabs', 'Phone friendly'],
    slides: [
      {t: 'Dashboard', type: 'kpi', kpis: [['Sales', '132,000'], ['Profit', '31,200'], ['Best month', 'Bhadra ★']], spark: [14, 19, 11, 24, 31, 26, 20]},
      {t: 'Sales & purchases', type: 'table', head: ['Date', 'Item', 'Type', 'Amount'], rows: [['Bhadra 3', 'Kurta set', 'Sale', '+2,500'], ['Bhadra 4', 'Fabric', 'Purchase', '−9,800'], ['Bhadra 5', 'Saree', 'Sale', '+4,200'], ['Bhadra 6', 'Delivery', 'Cost', '−600']]},
      {t: 'Your notes', type: 'notes', notes: ['Reel worked. Restock sarees before Dashain.', 'Supplier raised prices 8%. Check margin.', 'Pre-orders open two weeks early.']}
    ]
  },
  custom: {
    kind: 'For a specific problem',
    title: 'Custom Tracker',
    price: 'From Rs 799',
    unit: '',
    buy: 'Describe your problem',
    href: '#custom',
    good: 'Examples of what we build. Yours is designed around your exact problem.',
    list: ['Built for your exact problem', 'Usually delivered within 48 hours', 'One free revision round', 'Price confirmed before we start', 'Club members: simple ones included'],
    meta: ['Google Sheets', 'Your layout', 'Phone friendly'],
    slides: [
      {t: 'Example · rent ledger', type: 'table', head: ['Tenant', 'Rent', 'Due', 'Status'], rows: [['Ground floor', '18,000', 'Ashwin 1', 'Paid'], ['1st floor', '16,000', 'Ashwin 1', 'Paid'], ['2nd floor', '16,000', 'Ashwin 5', 'Overdue']]},
      {t: 'Example · rider commissions', type: 'bars', labels: ['Ramesh', 'Sita', 'Bikash'], vals: [42, 55, 31]},
      {t: 'Example · staff advances', type: 'table', head: ['Staff', 'Advance', 'Deducted', 'Left'], rows: [['Hari', '10,000', '2,500', '7,500'], ['Maya', '6,000', '3,000', '3,000'], ['Kiran', '4,000', '4,000', '0']]}
    ]
  }
};

export const icons = {
  sheet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 9h16M4 15h16M10 3v18"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  drive: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M8 3h8l6 10-4 7H6l-4-7z"/><path d="M8 3l6 10h8M2 13h12l-4 7"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 6.9 7.5.7-5.7 5 1.7 7.4L12 18.3 5.5 22l1.7-7.4-5.7-5 7.5-.7z"/></svg>'
};

export const tickerFacts = [
  'Delivered straight to your email — no account or login needed',
  "Now welcoming Nepal's first moneyfinacc Club members",
  'Ready trackers · custom builds on request',
  'Custom trackers usually delivered within 48 hours',
  'Every tracker is a Google Sheet you fully own'
];

export const navLinks = [
  { href: '#video', label: 'Video' },
  { href: '#why', label: 'Why' },
  { href: '#trackers', label: 'Trackers' },
  { href: '#club', label: 'Club' },
  { href: '#how', label: 'How' },
];

export const sideRailLinks = [
  { href: '#video', label: 'video' },
  { href: '#why', label: 'why' },
  { href: '#start', label: 'start' },
  { href: '#who', label: 'who' },
  { href: '#trackers', label: 'trackers' },
  { href: '#club', label: 'club' },
  { href: '#request', label: 'request' },
  { href: '#dashboard', label: 'dashboard' },
  { href: '#custom', label: 'custom' },
  { href: '#how', label: 'how' },
  { href: '#quotes', label: 'quotes' },
];

export const quotes = [
  { text: "I got to know Suraj during my business audit. His trackers turned out to be far more useful than I expected.", avatar: "B", author: "Business owner", role: "Audit client" },
  { text: "If you're just starting a business, this is what you need. Not another new software.", avatar: "F", author: "First-time founder", role: "Advisory client" },
  { text: "He's a finance geek who turns every business problem into a simpler solution.", avatar: "R", author: "Retail business owner", role: "Audit client" },
  { text: "Amazing platform, amazing work. My head feels clearer now that everything is in one tracker.", avatar: "S", author: "Small business owner", role: "Audit client" }
];
