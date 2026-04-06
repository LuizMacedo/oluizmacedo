import sharp from "sharp";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const PHOTO_PATH = resolve(root, "public/images/luiz-macedo.jpg");
const OUTPUT_PATH = resolve(root, "public/og-image.png");

const WIDTH = 1200;
const HEIGHT = 630;
const PHOTO_SIZE = 180;
const PHOTO_X = 100;
const PHOTO_Y = Math.round((HEIGHT - PHOTO_SIZE) / 2);
const TEXT_X = PHOTO_X + PHOTO_SIZE + 60;

const BG = "#0c0a09";
const FG = "#fafaf9";
const MUTED = "#a8a29e";
const ACCENT = "#C8956C";

// Prepare circular photo
const photoBuffer = readFileSync(PHOTO_PATH);
const circlePhoto = await sharp(photoBuffer)
  .resize(PHOTO_SIZE, PHOTO_SIZE, { fit: "cover" })
  .composite([
    {
      input: Buffer.from(
        `<svg width="${PHOTO_SIZE}" height="${PHOTO_SIZE}">
          <rect width="${PHOTO_SIZE}" height="${PHOTO_SIZE}" rx="${PHOTO_SIZE / 2}" ry="${PHOTO_SIZE / 2}" fill="white"/>
        </svg>`
      ),
      blend: "dest-in",
    },
  ])
  .png()
  .toBuffer();

// Accent ring around photo
const ringSize = PHOTO_SIZE + 6;
const ringBuffer = Buffer.from(
  `<svg width="${ringSize}" height="${ringSize}">
    <circle cx="${ringSize / 2}" cy="${ringSize / 2}" r="${ringSize / 2}" fill="none" stroke="${ACCENT}" stroke-width="3" stroke-opacity="0.4"/>
  </svg>`
);

// Background SVG with text
const bgSvg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${BG}"/>

  <!-- Subtle accent glow -->
  <ellipse cx="${WIDTH / 2}" cy="0" rx="500" ry="300" fill="${ACCENT}" opacity="0.03"/>

  <!-- Name -->
  <text x="${TEXT_X}" y="${PHOTO_Y + 40}" fill="${FG}" font-family="system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif" font-size="42" font-weight="700" letter-spacing="-0.5">Luiz Macedo</text>

  <!-- Title -->
  <text x="${TEXT_X}" y="${PHOTO_Y + 78}" fill="${MUTED}" font-family="system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif" font-size="22" font-weight="400">Senior Product Manager @ Microsoft</text>

  <!-- Divider line -->
  <line x1="${TEXT_X}" y1="${PHOTO_Y + 100}" x2="${TEXT_X + 60}" y2="${PHOTO_Y + 100}" stroke="${ACCENT}" stroke-width="2" stroke-opacity="0.6"/>

  <!-- Tagline line 1 -->
  <text x="${TEXT_X}" y="${PHOTO_Y + 138}" fill="${FG}" font-family="system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif" font-size="24" font-weight="500" opacity="0.9">Produto, senioridade e carreira</text>

  <!-- Tagline line 2 -->
  <text x="${TEXT_X}" y="${PHOTO_Y + 170}" fill="${FG}" font-family="system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif" font-size="24" font-weight="500" opacity="0.9">internacional em Tech.</text>

  <!-- URL -->
  <text x="${WIDTH - 100}" y="${HEIGHT - 30}" fill="${MUTED}" font-family="system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif" font-size="16" font-weight="400" text-anchor="end" opacity="0.6">oluizmacedo.com.br</text>
</svg>`;

// Compose final image
await sharp(Buffer.from(bgSvg))
  .composite([
    {
      input: ringBuffer,
      top: PHOTO_Y - 3,
      left: PHOTO_X - 3,
    },
    {
      input: circlePhoto,
      top: PHOTO_Y,
      left: PHOTO_X,
    },
  ])
  .png({ quality: 90, compressionLevel: 9 })
  .toFile(OUTPUT_PATH);

console.log(`✓ OG image generated: ${OUTPUT_PATH}`);
