const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, '..', 'src', 'assets', 'portfolio');
const outPath = path.join(__dirname, '..', 'src', 'data', 'projects.ts');

const dirs = fs.readdirSync(portfolioDir).filter(f => fs.statSync(path.join(portfolioDir, f)).isDirectory());

// Sort directories by index (e.g. _1-, _2-, _10-)
dirs.sort((a, b) => {
    const aMatch = a.match(/^_(\d+)/);
    const bMatch = b.match(/^_(\d+)/);
    const aNum = aMatch ? parseInt(aMatch[1]) : 0;
    const bNum = bMatch ? parseInt(bMatch[1]) : 0;
    return aNum - bNum;
});

function parseDirName(dir) {
    const parts = dir.split('-');
    const indexMatch = parts[0].match(/^_(\d+)/);
    const index = indexMatch ? indexMatch[1].padStart(2, '0') : '00';
    const year = parts[1] || '';

    let area = '';
    let locationParts = [];
    for (let i = 2; i < parts.length; i++) {
        if (/^\d+m2$/.test(parts[i])) {
            area = parts[i].replace('m2', ' m²');
        } else if (parts[i] !== '') {
            locationParts.push(parts[i]);
        }
    }

    const location = locationParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
    const slug = dir.substring(dir.indexOf('-') + 1);

    return { index, year, location, area, slug };
}

let output = `import type { ImageMetadata } from 'astro';

export interface ProjectImage {
  src: ImageMetadata;
  alt: string;
}

export interface Project {
  slug: string;
  cover: ImageMetadata;
  title: string;
  location: string;
  index: string;
  category: string;
  area: string;
  year: string;
  description: string;
  images: ProjectImage[];
}

// Load all portfolio images eagerly via glob (Vite handles special chars in globs correctly)
const allImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/portfolio/**/*.{webp,jpg,jpeg,png}',
  { eager: true }
);

function getImg(relativePath: string): ImageMetadata {
  const mod = allImages[relativePath];
  if (!mod) throw new Error(\`Image not found: \${relativePath}\`);
  return mod.default;
}

export const projects: Project[] = [
`;

for (const dir of dirs) {
    const { index, year, location, area, slug } = parseDirName(dir);
    const title = `Wnętrze ${location}`;
    const description = `Nowoczesny projekt wnętrza zlokalizowany w miejscowości ${location}.`;
    const category = 'mieszkalne';

    const dirPath = path.join(portfolioDir, dir);
    const files = fs.readdirSync(dirPath).filter(f => /\.(webp|jpg|jpeg|png)$/i.test(f));

    if (files.length === 0) continue;

    output += `  {\n`;
    output += `    slug: "${slug}",\n`;
    output += `    cover: getImg('../assets/portfolio/${dir}/${files[0]}'),\n`;
    output += `    title: "${title}",\n`;
    output += `    location: "${location}",\n`;
    output += `    index: "${index}",\n`;
    output += `    category: "${category}",\n`;
    output += `    area: "${area}",\n`;
    output += `    year: "${year}",\n`;
    output += `    description: "${description}",\n`;
    output += `    images: [\n`;

    for (const file of files) {
        const altName = file.replace(/\.(webp|jpg|jpeg|png)$/i, '').replace(/-/g, ' ');
        const alt = altName.charAt(0).toUpperCase() + altName.slice(1);
        output += `      { src: getImg('../assets/portfolio/${dir}/${file}'), alt: "${alt}" },\n`;
    }

    output += `    ]\n`;
    output += `  },\n`;
}

output += `];\n`;

fs.writeFileSync(outPath, output);
console.log('Successfully generated projects.ts with import.meta.glob');
