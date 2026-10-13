// Utility functions for the moneyfinacc app

// Generate SVG sparkline path
export function generateSparkline(data: number[], width: number = 100, height: number = 30): string {
  if (data.length < 2) return '';

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((val - min) / range) * height;
    return `${x},${y}`;
  });

  return `M ${points.join(' L ')}`;
}

// Generate SVG bar chart for dashboard
export function generateBarChart(sales: number, profit: number, maxValue: number): { salesHeight: number; profitHeight: number } {
  const maxHeight = 100; // percentage
  return {
    salesHeight: (sales / maxValue) * maxHeight,
    profitHeight: (profit / maxValue) * maxHeight
  };
}

// Generate SVG bars for product slides
export function generateBars(labels: string[], vals: number[]): { label: string; value: number; height: number; isNegative: boolean }[] {
  const maxAbs = Math.max(...vals.map(Math.abs));

  return labels.map((label, i) => ({
    label,
    value: vals[i],
    height: Math.abs(vals[i]) / maxAbs * 100,
    isNegative: vals[i] < 0
  }));
}

// Format number with commas (Nepali style)
export function formatNumber(num: number | string): string {
  const n = typeof num === 'string' ? parseFloat(num) : num;
  return n.toLocaleString('en-NP');
}

// Clamp a number between min and max
export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}
