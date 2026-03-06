import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Mapa } from '../mapa/mapa';
import { WishlistFormComponent } from '../wishlist-form/wishlist-form';
import { WishlistItemComponent } from '../wishlist-item/wishlist-item';

import { addItem } from '../../store/wishlist.actions';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [
    CommonModule,
    WishlistFormComponent,
    WishlistItemComponent,
    Mapa
  ],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css'
})
export class WishlistComponent {

  wishlist$: Observable<any[]>;
  tracking$: Observable<any>;

  constructor(private store: Store<{ wishlist: any }>) {

    // lista de items
    this.wishlist$ = this.store.select(state => state.wishlist.items);

    // tracking de clicks
    this.tracking$ = this.store.select(state => state.wishlist.tracking);

  }

  onItemCreated(item: any) {
    console.log('Dispatching:', item);
    this.store.dispatch(addItem({ item }));
  }

}