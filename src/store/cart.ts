import { reactive, computed } from "vue";

export interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartState {
  items: Product[];
}

const state: CartState = reactive({
  items: [],
});

export function useCart() {
  const addToCart = (product: Product): void => {
    state.items.push(product);
  };

  const removeFromCart = (index: number): void => {
    state.items.splice(index, 1);
  };

  const total = computed<number>(() =>
    state.items.reduce((sum, item) => sum + item.price, 0),
  );

  return {
    items: state.items,
    addToCart,
    removeFromCart,
    total,
  };
}
