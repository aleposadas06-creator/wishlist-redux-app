import { createAction, props } from '@ngrx/store';

export const addItem = createAction(
  '[Wishlist] Add Item',
  props<{ item: any }>()
);

export const removeItem = createAction(
  '[Wishlist] Remove Item',
  props<{ id: number }>()
);

export const upvoteItem = createAction(
  '[Wishlist] Upvote Item',
  props<{ id: number }>()
);

export const downvoteItem = createAction(
  '[Wishlist] Downvote Item',
  props<{ id: number }>()
);