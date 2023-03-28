import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  NavigationPartialState,
  selectIsAddButtonHidden,
  addEntity,
  showAddButton,
} from '@apollo-crm/shared/data-access-navigation';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Store } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'apollo-crm-toolbar-fab',
  templateUrl: './toolbar-fab.component.html',
  styleUrls: ['./toolbar-fab.component.scss'],
  standalone: true,
  imports: [ MatIconModule ],
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [
    trigger('showHide', [
      // ...
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('show => hide', [animate('0.5s')]),
      transition('hide => show', [animate('0.5s')]),
    ]),
  ],
})
export class ToolbarFabComponent {
  showAddButton = true;
  hide: boolean | undefined;

  constructor(private store: Store<NavigationPartialState>) {
    this.store.dispatch(showAddButton());
    this.store
      .select(selectIsAddButtonHidden)
      .subscribe((hide: boolean | undefined) => {
        this.hide = hide;
        // if (hide) {
        //   this.showAddButton = false;
        // } else {
        //   this.showAddButton = true;
        // }
      });
  }

  addButtonClicked() {
    console.log('Add button clicked');
    this.store.dispatch(addEntity());
  }
}
