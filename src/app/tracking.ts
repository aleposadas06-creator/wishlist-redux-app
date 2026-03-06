import { Directive, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Store } from '@ngrx/store';
import { trackClick } from './store/wishlist.actions';

@Directive({
  selector: '[appTracking]',
  standalone: true
})
export class TrackingDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private store: Store
  ) {}

  ngOnInit() {

    fromEvent(this.el.nativeElement, 'click')
      .subscribe(() => {

        const tags = this.el.nativeElement.getAttribute('data-tracking-tags');

        if (tags) {

          const tagsArray = tags.split(' ');

          tagsArray.forEach((tag: string) => {
            this.store.dispatch(trackClick({ tag }));
          });

        }

      });

  }

}