const Icono = ({ color, size }: { color: string; size: number }) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill='None'
        width={size}
        height={size}
        viewBox="0 0 24 24"
        stroke={color}
        >
        <path d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M10 12H20M20 12L17 9M20 12L17 15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
  );
};

export default Icono;