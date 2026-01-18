const CART_KEY = "cart";

export const getCart = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (car: any) => {
  const cart = getCart();
  const exists = cart.find((item: any) => item.id === car.id);

  if (!exists) {
    cart.push({ ...car, days: 1 });
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
};

export const removeFromCart = (id: number) => {
  const cart = getCart().filter((item: any) => item.id !== id);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};