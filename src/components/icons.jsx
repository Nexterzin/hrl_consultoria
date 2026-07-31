function IconBase({ children, className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </IconBase>
  );
}

export function BriefcaseIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M3 13h18" />
    </IconBase>
  );
}

export function SearchIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.2-4.2" />
    </IconBase>
  );
}

export function GraduationCapIcon(props) {
  return (
    <IconBase {...props}>
      <path d="m3 8 9-4 9 4-9 4-9-4Z" />
      <path d="M7 10.5V15c0 1.1 2.2 2 5 2s5-.9 5-2v-4.5" />
      <path d="M21 9v5" />
    </IconBase>
  );
}

export function HeartHandshakeIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 20s-6-3.7-8.4-7A4.6 4.6 0 0 1 10 7.8L12 9.6l2-1.8A4.6 4.6 0 0 1 20.4 13C18 16.3 12 20 12 20Z" />
      <path d="m9.5 12 1.8 1.8L16 9.1" />
    </IconBase>
  );
}

export function LineChartIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m7 15 3-3 3 2 5-6" />
      <path d="m17 8h1v1" />
    </IconBase>
  );
}

export function MessageIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M21 15a4 4 0 0 1-4 4H9l-6 3 2-5a4 4 0 0 1-1-2V7a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4z" />
    </IconBase>
  );
}

export function GlobeIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </IconBase>
  );
}

export function ShieldIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 3 4 6v6c0 5 3.5 8.7 8 9 4.5-.3 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  );
}

export function CheckCircleIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5L15.5 10" />
    </IconBase>
  );
}

export function MenuIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

export function SparklesIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m5 5 2.5 2.5" />
      <path d="m16.5 16.5 2.5 2.5" />
      <path d="m19 5-2.5 2.5" />
      <path d="m7.5 16.5-2.5 2.5" />
      <path d="M12 8.5 13.2 12 16 13.2 13.2 14.4 12 18 10.8 14.4 8 13.2 10.8 12 12 8.5Z" />
    </IconBase>
  );
}

export function StarIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 3.5 14.9 9l6.1.9-4.4 4.3 1 6.1-5.6-3-5.6 3 1-6.1L3 9.9 9.1 9 12 3.5Z" />
    </IconBase>
  );
}
