import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";

const srcDir = "assets";
const outDir = "assets/opt";
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

// [file, maxWidth, quality]
const jobs = [
  ["logo.jpg", 200, 85],
  ["hero-equipe.jpg", 1400, 78],
  ["dra-thalita.jpg", 900, 78],
  ["galeria-1.jpeg", 700, 78],
  ["galeria-2.jpeg", 700, 78],
  ["galeria-3.jpeg", 700, 78],
  ["servico-implante.png", 500, 80],
  ["servico-estetica.jpeg", 500, 78],
  ["servico-proteses.png", 500, 80],
  ["servico-emergencia.jpeg", 500, 78],
  ["servico-carga-imediata.jpg", 500, 78],
  ["servico-ortodontia.png", 500, 80],
  ["servico-canal.jpg", 500, 78],
  ["servico-reabilitacao.jpeg", 500, 78],
  ["sobre-extra.jpg", 900, 78],
];

for (const [file, width, quality] of jobs) {
  const inPath = path.join(srcDir, file);
  const base = file.replace(/\.(jpg|jpeg|png)$/i, "");
  const outPath = path.join(outDir, `${base}.webp`);
  await sharp(inPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(outPath);
  console.log(`${file} -> ${outPath}`);
}
