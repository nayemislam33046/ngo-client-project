// Create placeholder images for ASH Foundation website
const fs = require('fs');
const path = require('path');

const imageSpecs = [
    { name: 'fund-general.jpg', width: 368, height: 248, title: 'General Fund', desc: 'Donation fund' },
    { name: 'fund-gaza.jpg', width: 368, height: 248, title: 'Gaza Fund', desc: 'Emergency fund' },
    { name: 'fund-zakat.jpg', width: 368, height: 248, title: 'Zakat Fund', desc: 'Zakat donations' },
    { name: 'fund-guest-house.jpg', width: 368, height: 248, title: 'Guest House', desc: 'Accommodation fund' },
    { name: 'fund-medical.jpg', width: 368, height: 248, title: 'Medical Fund', desc: 'Healthcare fund' },
    { name: 'fund-rehabilitation.jpg', width: 368, height: 248, title: 'Rehabilitation', desc: 'New Muslims fund' },
    { name: 'project-solar.jpg', width: 368, height: 248, title: 'Solar Project', desc: 'Gaza solar power' },
    { name: 'project-tubewell.jpg', width: 368, height: 248, title: 'Tubewell Project', desc: '1000 tubewells' },
    { name: 'project-mosque.jpg', width: 368, height: 248, title: 'Mosque Project', desc: 'Masjid-e-Fatema' },
    { name: 'blog-1.jpg', width: 342, height: 254, title: 'Blog 1', desc: 'Light of Hope' },
    { name: 'blog-2.jpg', width: 342, height: 254, title: 'Blog 2', desc: 'MoU with Global Medic' },
    { name: 'blog-3.jpg', width: 342, height: 254, title: 'Blog 3', desc: 'Fearless Journey' },
    { name: 'event-1.jpg', width: 368, height: 200, title: 'Event 1', desc: 'Winter Relief Gaza' },
    { name: 'event-2.jpg', width: 368, height: 200, title: 'Event 2', desc: 'Family Support' },
    { name: 'event-3.jpg', width: 368, height: 200, title: 'Event 3', desc: 'Martyr Support' },
    { name: 'video-1.jpg', width: 368, height: 207, title: 'Video 1', desc: 'Best place to donate' },
    { name: 'video-2.jpg', width: 368, height: 207, title: 'Video 2', desc: 'Islam in Nepal' },
    { name: 'video-3.jpg', width: 368, height: 207, title: 'Video 3', desc: 'Wedding expenses' },
    { name: 'gallery-1.jpg', width: 268, height: 179, title: 'Gallery 1', desc: 'Iftar' },
    { name: 'gallery-2.jpg', width: 268, height: 179, title: 'Gallery 2', desc: 'Qurbani' },
    { name: 'gallery-3.jpg', width: 268, height: 179, title: 'Gallery 3', desc: 'Winter Clothing' },
    { name: 'gallery-4.jpg', width: 268, height: 179, title: 'Gallery 4', desc: 'Van Distribution' },
    { name: 'gallery-5.jpg', width: 268, height: 201, title: 'Gallery 5', desc: 'Relief Distribution' },
    { name: 'gallery-6.jpg', width: 268, height: 201, title: 'Gallery 6', desc: 'Tube Well' },
    { name: 'gallery-7.jpg', width: 268, height: 201, title: 'Gallery 7', desc: 'Food Distribution' },
    { name: 'gallery-8.jpg', width: 268, height: 201, title: 'Gallery 8', desc: 'Orphan Care' },
    { name: 'world-map.jpg', width: 1164, height: 494, title: 'World Map', desc: 'Global presence' }
];

// Create SVG placeholder images
imageSpecs.forEach(spec => {
    const svg = `
<svg width="${spec.width}" height="${spec.height}" viewBox="0 0 ${spec.width} ${spec.height}" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" style="stop-color:#3D82CF"/>
<stop offset="100%" style="stop-color:#002556"/>
</linearGradient>
</defs>
<rect width="${spec.width}" height="${spec.height}" fill="url(#grad)"/>
<text x="${spec.width/2}" y="${spec.height/2 - 10}" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle">${spec.title}</text>
<text x="${spec.width/2}" y="${spec.height/2 + 20}" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle">${spec.desc}</text>
<rect x="0" y="0" width="${spec.width}" height="${spec.height}" stroke="white" stroke-width="2" fill="none"/>
</svg>`;
    
    const filePath = path.join('assets', spec.name);
    fs.writeFileSync(filePath, svg);
    console.log(`Created ${spec.name} (${spec.width}x${spec.height})`);
});

console.log('All placeholder images created successfully!');
