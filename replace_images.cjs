const fs = require('fs');
const files = [
  'src/pages/DailyDashboard.tsx',
  'src/pages/FoodDiscovery.tsx',
  'src/pages/AlphaIntelligence.tsx',
  'src/pages/HealthProfile.tsx',
  'src/pages/MetabolicAudit.tsx'
];
const images = [
  'https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=800&fit=crop',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&fit=crop',
  'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&fit=crop',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&fit=crop',
  'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&fit=crop',
  'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&fit=crop',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&fit=crop'
];

let imgIndex = 0;
for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/https:\/\/lh3\.googleusercontent\.com[^\"\'\s]+/g, () => {
    const url = images[imgIndex % images.length];
    imgIndex++;
    return url;
  });
  fs.writeFileSync(file, content);
}
console.log('Images replaced!');
