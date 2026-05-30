/**
 * Prefix an internal path with the configured base path so links work both
 * locally (base "/") and on GitHub Pages (base "/show-and-tell"). Use only for
 * internal links/assets — pass external URLs (https://, mailto:) through as-is.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(path = "/"): string {
	const p = path.startsWith("/") ? path : `/${path}`;
	return `${base}${p}`;
}
