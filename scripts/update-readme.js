const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Función para generar la estructura de carpetas
function generateFolderStructure(dir, prefix = '') {
  const files = fs.readdirSync(dir)
    .filter(file => !file.startsWith('.') && 
                   file !== 'node_modules' && 
                   file !== 'dist' && 
                   file !== 'build' &&
                   !file.endsWith('.map'));
  
  let structure = '';
  
  files.forEach((file, index) => {
    const fullPath = path.join(dir, file);
    const isLast = index === files.length - 1;
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      structure += `${prefix}${isLast ? '└── ' : '├── '}${file}/\n`;
      const newPrefix = `${prefix}${isLast ? '    ' : '│   '}`;
      structure += generateFolderStructure(fullPath, newPrefix);
    } else if (file !== 'package-lock.json' && !file.endsWith('.log')) {
      structure += `${prefix}${isLast ? '└── ' : '├── '}${file}\n`;
    }
  });
  
  return structure;
}

// Función para actualizar el README
function updateReadme() {
  const readmePath = path.join(__dirname, '../README.md');
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  
  // Obtener el hash del último commit
  const gitHash = execSync('git rev-parse --short HEAD').toString().trim();
  const lastUpdated = new Date().toLocaleString('es-AR', { 
    timeZone: 'America/Argentina/Buenos_Aires',
    dateStyle: 'medium',
    timeStyle: 'short'
  });
  
  // Generar la estructura de carpetas
  const structure = generateFolderStructure(path.join(__dirname, '..'));
  
  // Crear la sección de estructura
  const structureSection = `## 📂 Estructura del Proyecto

\`\`\`
${structure}\`\`\`

*Última actualización: ${lastUpdated} (${gitHash})*
`;

  // Actualizar o agregar la sección de estructura en el README
  if (readmeContent.includes('## 📂 Estructura del Proyecto')) {
    readmeContent = readmeContent.replace(
      /## 📂 Estructura del Proyecto[\s\S]*?(?=## |$)/,
      structureSection
    );
  } else {
    // Si la sección de estructura no existe, agregarla después del título
    readmeContent = readmeContent.replace(
      /# 🚗 Car Market Platform\n/,
      `# 🚗 Car Market Platform\n\n${structureSection}\n`
    );
  }

  // Escribir el contenido actualizado en README.md
  fs.writeFileSync(readmePath, readmeContent);
  console.log('✅ README actualizado con la estructura del proyecto');
}

// Ejecutar la actualización
updateReadme();
