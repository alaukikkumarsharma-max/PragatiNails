export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'extensions' | 'stickers';
  images: string[];
  description?: string;
  hasSize: boolean;
}
