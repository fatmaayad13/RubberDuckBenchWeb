export function withBasePath(pathname) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!basePath) return pathname;
  if (!pathname.startsWith("/")) return pathname;
  return `${basePath}${pathname}`;
}

