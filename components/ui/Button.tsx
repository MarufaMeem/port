import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  showArrow?: boolean;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-md hover:-translate-y-0.5",
  secondary:
    "bg-surface text-foreground border border-border-strong hover:border-foreground/20 hover:-translate-y-0.5 shadow-sm",
  ghost: "text-foreground-secondary hover:text-foreground hover:bg-foreground/5",
  outline:
    "border border-border-strong text-foreground hover:border-accent hover:text-accent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-6 py-3 text-base gap-2",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  showArrow = false,
  external = false,
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("group", classes)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={cn("group", classes)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn("group", classes)}
    >
      {content}
    </button>
  );
}
