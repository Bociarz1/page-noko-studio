const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, '..', 'src', 'assets', 'portfolio');
const outPath = path.join(__dirname, '..', 'src', 'data', 'projects.ts');

const dirs = fs.readdirSync(portfolioDir).filter(f => fs.statSync(path.join(portfolioDir, f)).isDirectory());

let imports = `import type { ImageMetadata } from 'astro';\n\n`;
imports += `export interface ProjectImage {\n  src: ImageMetadata | string;\n  alt: string;\n}\n\n`;
imports += `export interface Project {\n  slug: string;\n  cover: ImageMetadata | string;\n  title: string;\n  location: string;\n  index: string;\n  category: string;\n  area: string;\n  year: string;\n  description: string;\n  images: ProjectImage[];\n}\n\n`;

let projectsCode = `export const projects: Project[] = [\n`;

let importCount = 0;

// Sort directories by index (e.g. #1, #2, #10)
dirs.sort((a, b) => {
    const aMatch = a.match(/^#(\d+)/);
    const bMatch = b.match(/^#(\d+)/);
    const aNum = aMatch ? parseInt(aMatch[1]) : 0;
    const bNum = bMatch ? parseInt(bMatch[1]) : 0;
    return aNum - bNum;
});

for (const dir of dirs) {
    // parse dir name e.g. #1-2025-izabelin-220m2
    const parts = dir.split('-');
    const indexMatch = parts[0].match(/^#(\d+)/);
    const index = indexMatch ? indexMatch[1].padStart(2, '0') : '00';
    const year = parts[1] || '';
    // handle case where location might have multiple dashes or area has multiple
    // e.g. #9-2024-wojny-szuby-wloscianskie-160m2
    // find the one ending with m2
    let area = '';
    let locationParts = [];
    for (let i = 2; i < parts.length; i++) {
        if (parts[i].endsWith('m2') || parts[i].endsWith('m2')) {
            area = parts[i].replace('m2', ' m²');
        } else {
            if (parts[i] !== '') {
                locationParts.push(parts[i]);
            }
        }
    }
    
    // Capitalize each part of the location
    const location = locationParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
    const title = `Wnętrze ${location}`;
    const slug = dir.substring(dir.indexOf('-') + 1); // e.g. 2025-izabelin-220m2
    const category = 'mieszkalne'; // default
    const description = `Nowoczesny projekt wnętrza zlokalizowany w miejscowości ${location}.`;

    const dirPath = path.join(portfolioDir, dir);
    const files = fs.readdirSync(dirPath).filter(f => f.match(/\.(webp|jpg|jpeg|png)$/i));

    if (files.length === 0) continue;

    let projectImagesCode = ``;
    let coverImportName = '';

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const importName = `img_${importCount++}`;
        imports += `import ${importName} from '../assets/portfolio/${dir}/${file}';\n`;
        
        if (i === 0) {
            coverImportName = importName;
        }

        const altName = file.replace(/\.(webp|jpg|jpeg|png)$/i, '').replace(/-/g, ' ');
        projectImagesCode += `      {\n        src: ${importName},\n        alt: "${altName.charAt(0).toUpperCase() + altName.slice(1)}"\n      },\n`;
    }

    projectsCode += `  {\n`;
    projectsCode += `    slug: "${slug}",\n`;
    projectsCode += `    cover: ${coverImportName},\n`;
    projectsCode += `    title: "${title}",\n`;
    projectsCode += `    location: "${location}",\n`;
    projectsCode += `    index: "${index}",\n`;
    projectsCode += `    category: "${category}",\n`;
    projectsCode += `    area: "${area}",\n`;
    projectsCode += `    year: "${year}",\n`;
    projectsCode += `    description: "${description}",\n`;
    projectsCode += `    images: [\n${projectImagesCode}    ]\n`;
    projectsCode += `  },\n`;
}

projectsCode += `];\n`;

fs.writeFileSync(outPath, imports + projectsCode);
console.log('Successfully generated projects.ts');
