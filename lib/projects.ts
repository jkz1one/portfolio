export type Project = {
  slug: string;
  name: string;
  shortTagline: string;
  description: string;
  role: string;
  techStack: string[];
  highlights: string[];
  repoUrl: string;
  liveUrl?: string;
  order: number;
};

export const projects: Project[] = [
  {
    slug: "pitv",
    name: "PiTV",
    shortTagline: "Living-room kiosk on Raspberry Pi OS.",
    description:
      "Wayland-based Raspberry Pi TV dashboard that boots straight into a fullscreen Firefox ESR session tuned for TV use. Handles static geolocation, a touch-friendly Onboard keyboard, and a clean HTML dashboard.",
    role: "Solo builder · system design, bash, Firefox profile tuning, kiosk UX.",
    techStack: [
      "Raspberry Pi OS (Bookworm)",
      "Wayland / rpd-labwc",
      "Firefox ESR",
      "GeoClue",
      "Onboard",
      "HTML/CSS",
      "systemd",
    ],
    highlights: [
      "Boots directly into a fullscreen, remote-friendly dashboard.",
      "Static geolocation wired through GeoClue + XDG portals for streaming apps.",
      "On-screen keyboard auto-shows on text fields and stays above apps.",
      "Reproducible setup with isolated config files and a systemd user service.",
    ],
    repoUrl: "https://github.com/jkz1one/PiTV",
    order: 1,
  },
  {
    slug: "curator-finder",
    name: "Curator Finder",
    shortTagline: "Local-first playlist curator search tool.",
    description:
      "Desktop app that lets artists and teams search, filter, and manage Spotify playlist curator contact data entirely offline. Small FastAPI backend, HTML dashboard frontend, and PyInstaller packaging for distribution.",
    role: "Solo builder · API integration, FastAPI backend, desktop packaging, UI.",
    techStack: [
      "Python",
      "FastAPI",
      "HTML/CSS/JS",
      "SQLite / data files",
      "PyInstaller",
    ],
    highlights: [
      "Local-first architecture with no external backend or accounts needed.",
      "FastAPI handles search, enrichment, and data shaping behind the scenes.",
      "Dashboard is plain HTML/CSS/JS for instant load and easy debugging.",
      "Packaged as a desktop app with PyInstaller for macOS and Windows.",
    ],
    repoUrl: "https://github.com/jkz1one/CuratorFinder",
    order: 2,
  },
  {
    slug: "signalflow",
    name: "SignalFlow",
    shortTagline: "Tiered real-time stock screener and watchlist builder.",
    description:
      "A real-time stock scanning tool that builds a tiered watchlist using volume, price action, sector rotation, and risk filters. The system pulls from multiple data sources, scores tickers, and produces a daily ranked list.",
    role: "Solo builder · backend architecture, data pipelines, scoring logic, UI.",
    techStack: ["Python", "FastAPI", "Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Tiers and scores tickers using volume, price action, and sector rotation.",
      "Universe builder with caching to keep daily runs fast and predictable.",
      "Risk filters block low-liquidity / wide-spread tickers from the list.",
      "Front-end watchlist UI with tier toggles and breakdown views per ticker.",
    ],
    repoUrl: "https://github.com/jkz1one/SignalFlow",
    order: 3,
  },
  {
    slug: "keazemusic",
    name: "KeazeMusic.com",
    shortTagline: "Artist site with VHS-style visuals and custom discography.",
    description:
      "Artist website for Keaze built with Next.js 15 and Tailwind. Includes VHS-inspired visual treatments, a custom discography grid with lightbox-style credits, and room for a store/beat section.",
    role: "Solo builder · design, React/Next implementation, discography UX.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Discography grid with custom lightbox showing credits and links.",
      "VHS-style visual treatments on headers and images without hurting UX.",
      "Built on Next.js 15 app router with a simple deploy pipeline to Vercel.",
    ],
    repoUrl: "https://github.com/jkz1one/keazemusic",
    // add liveUrl once you point the domain
    order: 4,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
