const paths = {
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm18 2-10 7L2 6",
  pin: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  check: "M22 11.1V12a10 10 0 1 1-5.9-9.1M22 4 12 14l-3-3",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  star: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2 2 9.3l6.9-1z",
  home: "m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 12V12h6v10",
  building:
    "M4 22V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18zM9 6h.01M15 6h.01M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 22v-4h4v4",
  bath: "M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zm2 0V5a2 2 0 0 1 3.5-1.3M7 20l-1 2m11-2 1 2",
  kitchen: "M3 3h18v18H3zM3 9h18M8 5.5h.01M12 5.5h.01M7 13h4v5H7zm7 0h3",
  frame: "M3 21V8l9-5 9 5v13M3 21h18M7 21V11m5 10V11m5 10V11M3 11h18",
  layers: "m12 2 10 5-10 5L2 7zm-10 10 10 5 10-5M2 17l10 5 10-5",
  brush:
    "M18.4 2.6a2 2 0 0 1 3 3L12 15l-3-3zM9 12a3.5 3.5 0 0 0-5 2.5c-.5 2.2-2 3.5-2 3.5s3.5 1.5 6.5-.5A3.5 3.5 0 0 0 9 12z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  worker: [
    "M4.5 16v-2a7.5 7.5 0 0 1 15 0v2",
    "M2 17.5a1.5 1.5 0 0 1 1.5-1.5h17a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 17.5z",
    "M10 7v5m4-5v5",
  ],
  materials: [
    "M6 3.5h13.5v5.5H6z",
    "M3.5 9.25h13.5v5.5H3.5z",
    "M6 15h13.5v5.5H6z",
  ],
  bullseye: [
    "M1.5 13.2a8.2 8.2 0 1 0 16.4 0 8.2 8.2 0 1 0-16.4 0",
    "M4.7 13.2a5 5 0 1 0 10 0 5 5 0 1 0-10 0",
    "M8.1 13.2a1.6 1.6 0 1 0 3.2 0 1.6 1.6 0 1 0-3.2 0",
    "M9.7 13.2 20.6 2.6",
    "M20.6 2.6 15 4.4 16.5 9.4z",
  ],
  wrench:
    "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z",
  expand: "M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7",
  droplet: "M12 2.7s-7 7.3-7 12.3a7 7 0 0 0 14 0c0-5-7-12.3-7-12.3z",
  alert: "M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z",
} as const;

export type IconName = keyof typeof paths;

type IconProps = {
  name: IconName;
  className?: string;
  filled?: boolean;
};

export function Icon({ name, className = "h-5 w-5", filled = false }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {(Array.isArray(paths[name]) ? paths[name] : [paths[name]]).map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

export function Stars({ count = 5, className = "h-4 w-4" }: { count?: number; className?: string }) {
  return (
    <span className="flex gap-0.5 text-brass" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Icon
          key={index}
          name="star"
          filled
          className={`${className} ${index < count ? "" : "opacity-25"}`}
        />
      ))}
    </span>
  );
}
