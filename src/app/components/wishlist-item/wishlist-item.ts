import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { upvoteItem, downvoteItem, removeItem } from '../../store/wishlist.actions';

@Component({
  selector: 'app-wishlist-item',
  standalone: true,
  templateUrl: './wishlist-item.html',
  styleUrl: './wishlist-item.css'
})
export class WishlistItemComponent {

  @Input() item: any;

  constructor(private store: Store) {}

  upvote() {
    this.store.dispatch(upvoteItem({ id: this.item.id }));
  }

  downvote() {
    this.store.dispatch(downvoteItem({ id: this.item.id }));
  }

  delete() {
    this.store.dispatch(removeItem({ id: this.item.id }));
  }
}