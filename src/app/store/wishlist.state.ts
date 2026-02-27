export interface WishlistItem {
  id: number;
  nombre: string;
  descripcion: string;
  votos: number;
}

export interface WishlistState {
  items: WishlistItem[];
}

export const initialState: WishlistState = {
  items: []
};