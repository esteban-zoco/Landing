export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const Component = props.href ? "a" : "button";
  const base =
    "inline-flex items-center justify-center rounded-[8px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fern/40";
  const sizes = {
    sm: "px-2.5 py-2 text-sm",
    md: "px-4 py-2.5 text-sm md:text-base",
    lg: "px-5 py-3 text-base md:text-lg",
  };
  const variants = {
    primary:
      "bg-[#2D3035] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#B1C20E]",
    secondary:
      "bg-white text-ink border border-ink/10 hover:border-ink/20 hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-ink/80 border border-transparent hover:text-ink",
  };

  return (
    <Component
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
