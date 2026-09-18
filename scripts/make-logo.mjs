// Builds the "R." monogram from real Fraunces outlines → SVG + PNG favicon set.
import opentype from "opentype.js";
const parse = opentype.parse ?? opentype.default?.parse;
import sharp from "sharp";
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";

const buf = readFileSync(process.argv[2]);
const font = parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
const SIZE = 64, FS = 44;
const glyphPath = font.getPath("R", 0, 0, FS);
const bb = glyphPath.getBoundingBox();
const gw = bb.x2 - bb.x1, gh = bb.y2 - bb.y1;
// Centre the R slightly left to leave room for the dot
const tx = (SIZE - gw) / 2 - bb.x1 - 3, ty = (SIZE - gh) / 2 - bb.y1;
const d = font.getPath("R", tx, ty, FS).toPathData(2);
const dotX = tx + bb.x2 + 6, dotY = ty + bb.y2 - 3;

const mark = (bg = true) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}">
  ${bg ? `<rect width="${SIZE}" height="${SIZE}" rx="14" fill="#0b0b0d"/>
  <rect x="1" y="1" width="${SIZE - 2}" height="${SIZE - 2}" rx="13" fill="none" stroke="#f5b84b" stroke-opacity="0.35"/>` : ""}
  <path d="${d}" fill="#f5b84b"/>
  <circle cx="${dotX.toFixed(1)}" cy="${dotY.toFixed(1)}" r="4" fill="#f5b84b"/>
</svg>`;

mkdirSync("public", { recursive: true });
writeFileSync("public/logo.svg", mark(true));
writeFileSync("public/logo-mark.svg", mark(false)); // transparent, for the nav
const svg = Buffer.from(mark(true));
await sharp(svg, { density: 384 }).resize(512, 512).png().toFile("public/icon-512.png");
await sharp(svg, { density: 384 }).resize(192, 192).png().toFile("public/icon-192.png");
await sharp(svg, { density: 384 }).resize(180, 180).png().toFile("app/apple-icon.png");
await sharp(svg, { density: 384 }).resize(64, 64).png().toFile("app/icon.png");
await sharp(svg, { density: 384 }).resize(32, 32).png().toFile("app/favicon-32.png");
// OG image: mark + wordmark on canvas
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0b0b0d"/>
  <circle cx="1000" cy="80" r="420" fill="#f5b84b" fill-opacity="0.12"/>
  <g transform="translate(96,96) scale(2.25)">${mark(true).replace(/<svg[^>]*>|<\/svg>/g, "")}</g>
  <text x="96" y="400" font-family="Georgia, serif" font-size="88" fill="#f4f1ea">Ryan Adaya</text>
  <text x="96" y="470" font-family="Consolas, monospace" font-size="26" letter-spacing="6" fill="#f5b84b">FULL-STACK DEVELOPER</text>
  <text x="96" y="540" font-family="Consolas, monospace" font-size="24" fill="#a3a09a">ragba.dev</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile("public/og.png");
console.log("logo assets written");
