/** Prefix local links and images when deployed in a repository subdirectory. */
export function sitePath(value: string): string {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
  return value.startsWith('/') && !value.startsWith('//') ? base + value : value;
}
