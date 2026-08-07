export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function isExternalUrl(url: string): boolean {
  return url.startsWith("http") || url.startsWith("[");
}

export function isPlaceholderUrl(url: string | undefined): boolean {
  if (!url) return true;
  return url.startsWith("[");
}
