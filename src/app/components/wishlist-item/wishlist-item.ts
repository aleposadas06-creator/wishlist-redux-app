import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { upvoteItem, downvoteItem, removeItem } from '../../store/wishlist.actions';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-wishlist-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist-item.html',
  styleUrl: './wishlist-item.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ])
  ]
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