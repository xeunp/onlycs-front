export interface SkinItem {
  id: string;
  fullName: string;        // "USP-S | PC-GRN (Factory New)"
  shortName: string;       // "USP-S | PC-GRN"
  slug: string;           // "usp-s-pc-grn-factory-new"
  weapon: string;         // "USP-S"
  skinName: string;       // "PC-GRN"
  condition: string;      // "Factory New"
  rarity: RarityType;     // "Mil-Spec Grade"
  collection: string;     // "The Fever Collection"
  price: {
    current: number;
    currency: string;
    low?: number;
    high?: number;
  };
  images: {
    icon: string;
    preview: string;
    screenshot: string;
    large: string;
  };
  is3DAvailable: boolean;
  steamMarketUrl: string;
  wikiUrl: string;
  floatRange: [number, number];
  isStatTrak: boolean;
  isSouvenir: boolean;
  availability: AvailabilityType;
  pattern?: number;
  quality: QualityType;
  type: WeaponType;
}

export type RarityType = 
  | 'Consumer Grade'
  | 'Industrial Grade'
  | 'Mil-Spec Grade'
  | 'Restricted'
  | 'Classified'
  | 'Covert'
  | 'Contraband';

export type AvailabilityType = 
  | 'InStock'
  | 'OutOfStock'
  | 'Limited';

export type QualityType = 
  | 'Factory New'
  | 'Minimal Wear'
  | 'Field-Tested'
  | 'Well-Worn'
  | 'Battle-Scarred';

export type WeaponType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8; // CS:GO weapon type IDs

export interface WeaponCategory {
  id: string;
  name: string;
  slug: string;
  weapons: string[];
}

export interface SkinCollection {
  id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
  items: SkinItem[];
}

export interface MarketStats {
  totalItems: number;
  averagePrice: number;
  priceRange: {
    min: number;
    max: number;
  };
  popularItems: SkinItem[];
}

export interface SearchFilters {
  weapon?: string;
  rarity?: RarityType[];
  condition?: QualityType[];
  collection?: string;
  priceMin?: number;
  priceMax?: number;
  isStatTrak?: boolean;
  isSouvenir?: boolean;
  availability?: AvailabilityType[];
}

export interface SearchParams {
  query?: string;
  filters?: SearchFilters;
  sort?: 'price_asc' | 'price_desc' | 'name_asc' | 'name_desc' | 'rarity_asc' | 'rarity_desc';
  limit?: number;
  offset?: number;
}

export interface ApiResponse<T> {
  data: T;
  total?: number;
  page?: number;
  limit?: number;
  success: boolean;
  message?: string;
}
