import type { Catalog } from '../types';

export const catalog: Catalog = {
    houseStyles: [
        {
            id: 'midwest-ranch',
            name: 'Midwest Ranch',
            thumbnail: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=150&h=150&fit=crop',
            image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2670&auto=format&fit=crop',
            defaultMaskPoints: [
                { x: 345, y: 350 }, // TL
                { x: 445, y: 350 }, // TR
                { x: 445, y: 580 }, // BR
                { x: 345, y: 580 }  // BL
            ]
        },
        {
            id: 'standard-twostory',
            name: 'Standard Two-Story',
            thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=150&h=150&fit=crop',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
            defaultMaskPoints: [
                { x: 382, y: 368 }, // TL
                { x: 448, y: 368 }, // TR
                { x: 448, y: 535 }, // BR
                { x: 382, y: 535 }  // BL
            ]
        },
        {
            id: 'brick-entry',
            name: 'Brick Traditional',
            thumbnail: 'https://images.unsplash.com/photo-1505843513577-22bb7d21ef45?w=150&h=150&fit=crop',
            image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21ef45?q=80&w=2670&auto=format&fit=crop',
            defaultMaskPoints: [
                { x: 375, y: 310 }, // TL
                { x: 468, y: 310 }, // TR
                { x: 468, y: 560 }, // BR
                { x: 375, y: 560 }  // BL
            ]
        }
    ],
    styles: [
        {
            id: 'flush',
            name: 'Modern Flush',
            thumbnail: 'https://images.unsplash.com/photo-1517646133499-2e06f9d27376?w=150&h=150&fit=crop',
            compatibleMaterials: ['steel', 'fiberglass'],
            compatibleGlass: ['full', 'half', 'none']
        },
        {
            id: '6-panel',
        {
            id: 'flush',
            name: 'Modern Flush',
            thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100',
            compatibleMaterials: ['fiberglass-smooth', 'steel', 'authentic-wood'],
            compatibleGlass: ['none', 'full-lite']
        },
        {
            id: '6-panel',
            name: 'Colonial 6-Panel',
            thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=100',
            compatibleMaterials: ['fiberglass-grain', 'fiberglass-smooth', 'steel'],
            compatibleGlass: ['none']
        },
        {
            id: '2-panel-square',
            name: '2-Panel Square',
            thumbnail: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=100',
            compatibleMaterials: ['fiberglass-grain', 'fiberglass-smooth', 'authentic-wood'],
            compatibleGlass: ['none', 'clear', 'frosted']
        },
        {
            id: '2-panel-arch',
            name: '2-Panel Arch Top',
            thumbnail: 'https://images.unsplash.com/photo-1493663249051-7f989ae1d87e?q=80&w=100',
            compatibleMaterials: ['fiberglass-grain', 'authentic-wood'],
            compatibleGlass: ['none']
        },
        {
            id: 'craftsman-3-lite',
            name: 'Craftsman 3-Lite',
            thumbnail: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=100',
            compatibleMaterials: ['fiberglass-grain', 'authentic-wood'],
            compatibleGlass: ['craftsman-lite']
        },
        {
            id: 'modern-pulse',
            name: 'Contemporary Pulse',
            thumbnail: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=100',
            compatibleMaterials: ['fiberglass-smooth', 'steel'],
            compatibleGlass: ['clear', 'frosted']
        },
        {
            id: 'farmhouse-x',
            name: 'Farmhouse X-Panel',
            thumbnail: 'https://images.unsplash.com/photo-1449156001437-37e671adb27b?q=80&w=100',
            compatibleMaterials: ['fiberglass-grain', 'authentic-wood'],
            compatibleGlass: ['none', 'clear']
        },
    ],
    materials: [
        { id: 'fiberglass-grain', name: 'Textured Fiberglass', thumbnail: 'Grain' },
        { id: 'fiberglass-smooth', name: 'Smooth Fiberglass', thumbnail: 'Smooth' },
        { id: 'steel', name: 'Steel', thumbnail: 'Steel' },
        { id: 'authentic-wood', name: 'Authentic Wood', thumbnail: 'Wood' },
    ],
    colors: {
        'fiberglass-grain': [
            { id: 'natural-oak', name: 'Natural Oak', thumbnail: '#d4a373' },
            { id: 'honey-stain', name: 'Honey Stain', thumbnail: '#c17e45' },
            { id: 'cherry-stain', name: 'Heritage Cherry', thumbnail: '#8b0000' },
            { id: 'walnut-stain', name: 'English Walnut', thumbnail: '#5d3a1a' },
            { id: 'mahogany-stain', name: 'Deep Mahogany', thumbnail: '#4a0e0e' },
            { id: 'raven', name: 'Raven (Black Stain)', thumbnail: '#1a1a1a' },
            { id: 'driftwood', name: 'Driftwood', thumbnail: '#a9a9a9' },
        ],
        'fiberglass-smooth': [
            { id: 'white', name: 'Arctic White', thumbnail: '#f8fafc' },
            { id: 'black', name: 'Onyx Black', thumbnail: '#0f172a' },
            { id: 'indigo', name: 'Naval Indigo', thumbnail: '#1e3a8a' },
            { id: 'sage', name: 'Evergreen Sage', thumbnail: '#4d7c0f' },
            { id: 'slate', name: 'Modern Slate', thumbnail: '#475569' },
            { id: 'terracotta', name: 'Adobe Terracotta', thumbnail: '#9a3412' },
        ],
        'steel': [
            { id: 'white', name: 'Standard White', thumbnail: '#ffffff' },
            { id: 'black', name: 'Standard Black', thumbnail: '#000000' },
            { id: 'grey', name: 'Cool Grey', thumbnail: '#94a3b8' },
            { id: 'brown', name: 'Architectural Brown', thumbnail: '#451a03' },
        ],
        'authentic-wood': [
            { id: 'oak-natural', name: 'White Oak Pure', thumbnail: '#e5c09e' },
            { id: 'mahogany-rich', name: 'Honduran Mahogany', thumbnail: '#5e2105' },
            { id: 'alder-knotty', name: 'Knotty Alder', thumbnail: '#b5835a' },
            { id: 'walnut-premium', name: 'Black Walnut', thumbnail: '#3a2414' },
        ]
    },
    glass: [
        { id: 'none', name: 'No Glass', thumbnail: 'Solid' },
        { id: 'clear', name: 'Clear Lite', thumbnail: 'Clear' },
        { id: 'frosted', name: 'Satin Etched', thumbnail: 'Privacy' },
        { id: 'rain', name: 'Rain Texture', thumbnail: 'Rain' },
        { id: 'craftsman-lite', name: 'Craftsman Lite', thumbnail: '3-Pane' },
        { id: 'full-lite', name: 'Full View Lite', thumbnail: 'Full' }
    ],
    hardware: [
        { id: 'classic-knob', name: 'Century Knob', thumbnail: 'Nickel' },
        { id: 'modern-lever', name: 'Latitude Lever', thumbnail: 'Chrome' },
        { id: 'handle-set', name: 'Camelot Handle Set', thumbnail: 'Bronze' },
        { id: 'smart-lock', name: 'Touchscreen Smart Lock', thumbnail: 'Black' }
    ]
};
