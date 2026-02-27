import { Routes } from '@angular/router';
import { WishlistComponent } from './components/wishlist/wishlist';

export const routes: Routes = [
  { path: '', redirectTo: 'wishlist', pathMatch: 'full' },
  { path: 'wishlist', component: WishlistComponent }
];