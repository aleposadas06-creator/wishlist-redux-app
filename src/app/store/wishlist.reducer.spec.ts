import { wishlistReducer, initialState } from './wishlist.reducer';
import { addItem, removeItem, upvoteItem, downvoteItem, trackClick } from './wishlist.actions';

describe('Wishlist Reducer', () => {

  it('should return the initial state', () => {
    const action = { type: 'Unknown' } as any;
    const state = wishlistReducer(undefined as any, action);

    expect(state).toEqual(initialState);
  });

  it('should add an item', () => {

    const item = {
      name: 'Japón',
      description: 'Viajar a Tokio'
    };

    const state = wishlistReducer(initialState, addItem({ item }));

    expect(state.items.length).toBe(1);
  });

  it('should remove an item', () => {

    const item = { name: 'Roma', description: 'Viaje' };

    const state1 = wishlistReducer(initialState, addItem({ item }));
    const id = state1.items[0].id;

    const state2 = wishlistReducer(state1, removeItem({ id }));

    expect(state2.items.length).toBe(0);
  });

  it('should upvote an item', () => {

    const item = { name: 'Madrid', description: 'Viaje' };

    const state1 = wishlistReducer(initialState, addItem({ item }));
    const id = state1.items[0].id;

    const state2 = wishlistReducer(state1, upvoteItem({ id }));

    expect(state2.items[0].upvotes).toBe(1);
  });

  it('should track click', () => {

    const state1 = wishlistReducer(initialState, trackClick({ tag: 'upvote' }));
    const state2 = wishlistReducer(state1, trackClick({ tag: 'upvote' }));

    expect(state2.tracking.upvote).toBe(2);

  });

});