export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith("http") || src.startsWith("https")) return src;
  return `https://junddao-dev.netlify.app/${src}?w=${width}&q=${quality || 75}`;
}
