export function formatDisplayName(name: string) {
  if (!name) return '';

  const trimmed = name.trim();
  if (!trimmed) return '';

  return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
}
