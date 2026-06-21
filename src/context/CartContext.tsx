import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";
import type { CartAction, CartContextValue, CartState, Product } from "../types/types.ts";


function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingIndex = state.items.findIndex(
        (item) => item.product.id === action.product.id
      );
      if (existingIndex >= 0) {
        const updated = [...state.items];
        const existing = updated[existingIndex];
        if (existing) {
          updated[existingIndex] = {
            ...existing,
            quantity: existing.quantity + (action.quantity ?? 1),
          };
        }
        return { items: updated };
      }
      return {
        items: [
          ...state.items,
          { product: action.product, quantity: action.quantity ?? 1 },
        ],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        items: state.items.filter(
          (item) => item.product.id !== action.productId
        ),
      };

    case "INCREMENT_QUANTITY": {
      return {
        items: state.items.map((item) =>
          item.product.id === action.productId
            ? { ...item, quantity: Math.min(item.quantity + 1, 10) }
            : item
        ),
      };
    }

    case "DECREMENT_QUANTITY": {
      return {
        items: state.items
          .map((item) =>
            item.product.id === action.productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    }

    case "CLEAR_CART":
      return { items: [] };

    default:
      return state;
  }
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const totalItems = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const addToCart = (product: Product, quantity?: number) =>
    dispatch({ type: "ADD_TO_CART", product, quantity });

  const removeFromCart = (productId: number) =>
    dispatch({ type: "REMOVE_FROM_CART", productId });

  const incrementQuantity = (productId: number) =>
    dispatch({ type: "INCREMENT_QUANTITY", productId });

  const decrementQuantity = (productId: number) =>
    dispatch({ type: "DECREMENT_QUANTITY", productId });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const isInCart = (productId: number) =>
    state.items.some((item) => item.product.id === productId);

  return (
    <CartContext value={{
      items: state.items,
      totalItems,
      totalPrice,
      addToCart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      clearCart,
      isInCart,
    }}>
      {children}
    </CartContext>
  );
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
