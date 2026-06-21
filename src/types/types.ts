export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  category: "Chronograph" | "Diver" | "Dress" | "Sport";
  images: string[];
  rating: number;
  reviewCount: number;
  badge?: "new" | "sale" | "bestseller";
  inStock: boolean;
}

export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}


export type CartAction =
  | { type: "ADD_TO_CART"; product: Product; quantity?: number }
  | { type: "REMOVE_FROM_CART"; productId: number }
  | { type: "INCREMENT_QUANTITY"; productId: number }
  | { type: "DECREMENT_QUANTITY"; productId: number }
  | { type: "CLEAR_CART" };


export interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  clearCart: () => void;
  isInCart: (productId: number) => boolean;
}