/**
 * Decorative QR-style marker. Not a scannable code — it renders a stable
 * pseudo-random module pattern (seeded, so it never flickers between renders)
 * with the three standard finder squares.
 */
const SIZE = 25;

function isFinderZone(row, col) {
  const inBox = (r0, c0) => row >= r0 && row < r0 + 8 && col >= c0 && col < c0 + 8;
  return inBox(0, 0) || inBox(0, SIZE - 8) || inBox(SIZE - 8, 0);
}

function Finder({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="7" height="7" rx="1.6" fill="currentColor" />
      <rect x="1" y="1" width="5" height="5" rx="1" fill="#fff" />
      <rect x="2" y="2" width="3" height="3" rx="0.6" fill="currentColor" />
    </g>
  );
}

export default function QrCode({ className = "" }) {
  const modules = [];
  let seed = 20260414;

  for (let row = 0; row < SIZE; row += 1) {
    for (let col = 0; col < SIZE; col += 1) {
      // xorshift keeps the pattern deterministic across renders
      seed ^= seed << 13;
      seed ^= seed >>> 17;
      seed ^= seed << 5;
      if (isFinderZone(row, col)) continue;
      if ((seed >>> 0) % 100 < 46) {
        modules.push(<rect key={`${row}-${col}`} x={col} y={row} width="1" height="1" />);
      }
    }
  }

  return (
    <svg
      className={className}
      viewBox="-1 -1 27 27"
      role="img"
      aria-label="QR code to download the Cogo app"
      color="#131a2a"
    >
      <rect x="-1" y="-1" width="27" height="27" rx="2" fill="#fff" />
      <g fill="currentColor" shapeRendering="crispEdges">
        {modules}
      </g>
      <Finder x={0} y={0} />
      <Finder x={SIZE - 7} y={0} />
      <Finder x={0} y={SIZE - 7} />
    </svg>
  );
}
