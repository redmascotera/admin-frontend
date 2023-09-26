const Icon = ({ color, size }: { color: string; size: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
    <polygon points="20 18 4 18 4 18 20 18 20 18" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polygon points="20 14 4 14 4 14 20 14 20 14" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polygon points="20 10 4 10 4 10 20 10 20 10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <polygon points="20 6 4 6 4 6 20 6 20 6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </svg>
  );
};

export default Icon;