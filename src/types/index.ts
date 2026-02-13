export type Category = 'houseType' | 'style' | 'material' | 'color' | 'glass' | 'hardware';

export interface ProductOption {
    id: string;
    name: string;
    thumbnail: string; // URL or path
    price?: number;
    metadata?: Record<string, any>;
}

export interface DoorStyle extends ProductOption {
    compatibleMaterials: string[]; // IDs of materials
    compatibleGlass: string[]; // IDs of glass options
}

export interface HouseStyle extends ProductOption {
    image: string;
    defaultMaskPoints: { x: number; y: number }[];
}

export interface ConfigurationState {
    step: number;
    maxStep: number;
    selections: {
        [key in Category]?: string; // ID of selected option
    };
    uploadedImage: string | null; // Base64 or ObjectURL
    maskPoints: { x: number; y: number }[]; // 4 points for the door area
    doorScale: number; // Pixels per inch (optional, for advanced scaling)
}

export interface Catalog {
    houseStyles: HouseStyle[];
    styles: DoorStyle[];
    materials: ProductOption[];
    colors: Record<string, ProductOption[]>; // Keyed by material ID
    glass: ProductOption[];
    hardware: ProductOption[];
}
