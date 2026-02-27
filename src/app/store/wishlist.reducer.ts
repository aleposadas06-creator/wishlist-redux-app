import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, upvoteItem, downvoteItem } from './wishlist.actions';

export const initialState: any[] = [];

export const wishlistReducer = createReducer(
  initialState,

  on(addItem, (state, { item }) => [
    ...state,
    {
      ...item,
      id: Date.now(),
      upvotes: 0,
      downvotes: 0
    }
  ]),

  on(removeItem, (state, { id }) =>
    state.filter(item => item.id !== id)
  ),

  on(upvoteItem, (state, { id }) =>
    state.map(item =>
      item.id === id
        ? { ...item, upvotes: item.upvotes + 1 }
        : item
    )
  ),

  on(downvoteItem, (state, { id }) =>
    state.map(item =>
      item.id === id
        ? { ...item, downvotes: item.downvotes + 1 }
        : item
    )
  )
);