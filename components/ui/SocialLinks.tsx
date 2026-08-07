import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/data/site";
import { cn, isPlaceholderUrl } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
  const links = [
    {
      label: "GitHub",
      href: siteConfig.github,
      icon: GitHubIcon,
      show: !isPlaceholderUrl(siteConfig.github),
    },
    {
      label: "LinkedIn",
      href: siteConfig.linkedin,
      icon: LinkedInIcon,
      show: !isPlaceholderUrl(siteConfig.linkedin),
    },
    {
      label: "Email",
      href: isPlaceholderUrl(siteConfig.email)
        ? undefined
        : `mailto:${siteConfig.email}`,
      icon: Mail,
      show: !isPlaceholderUrl(siteConfig.email),
    },
  ].filter((link) => link.show && link.href);

  if (links.length === 0) {
    return (
      <div className={cn("flex items-center gap-4 text-sm text-foreground-muted", className)}>
        <span>GitHub: {siteConfig.github}</span>
        <span>LinkedIn: {siteConfig.linkedin}</span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map(({ label, href, icon: Icon }) => (
        <Link
          key={label}
          href={href!}
          target={href!.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground-secondary transition-all duration-300 hover:border-accent/30 hover:text-accent hover:shadow-sm"
        >
          <Icon size={iconSize} />
        </Link>
      ))}
    </div>
  );
}
