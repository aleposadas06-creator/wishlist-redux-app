import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, upvoteItem, downvoteItem, trackClick } from './wishlist.actions';

export interface WishlistState {
  items: any[];
  tracking: {
    upvote: number;
    downvote: number;
    delete: number;
  };
}

export const initialState: WishlistState = {
  items: [],
  tracking: {
    upvote: 0,
    downvote: 0,
    delete: 0
  }
};

export const wishlistReducer = createReducer(
  initialState,

  on(addItem, (state, { item }) => ({
    ...state,
    items: [
      ...state.items,
      {
        ...item,
        id: Date.now(),
        upvotes: 0,
        downvotes: 0
      }
    ]
  })),

  on(removeItem, (state, { id }) => ({
    ...state,
    items: state.items.filter(item => item.id !== id)
  })),

  on(upvoteItem, (state, { id }) => ({
    ...state,
    items: state.items.map(item =>
      item.id === id
        ? { ...item, upvotes: item.upvotes + 1 }
        : item
    )
  })),

  on(downvoteItem, (state, { id }) => ({
    ...state,
    items: state.items.map(item =>
      item.id === id
        ? { ...item, downvotes: item.downvotes + 1 }
        : item
    )
  })),

  on(trackClick, (state, { tag }) => {

    // Si llega un tag desconocido no rompe la app
    if (!(tag in state.tracking)) {
      return state;
    }

    return {
      ...state,
      tracking: {
        ...state.tracking,
        [tag]: state.tracking[tag as keyof typeof state.tracking] + 1
      }
    };

  })

);