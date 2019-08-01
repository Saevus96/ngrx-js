import { Component, OnInit } from '@angular/core';
import { AppState } from './store/models/app-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingItem } from './store/models/shopping-item.model';
import { ShoppingReducer } from '../app/store/reducers/shopping.reducer';
import { AddItemAction, DeleteItemAction, LoadShoppingAction } from './store/actions/shopping.actions';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  newShoppingItem: ShoppingItem = { id: '', name: '' };
  shoppingItems$: Observable<Array<ShoppingItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  title = 'ngrx-shopping-list';
  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping.list);
    this.loading$ = this.store.select(store => store.shopping.loading);
    this.error$ = this.store.select(store => store.shopping.error);

    this.store.dispatch(new LoadShoppingAction());
  }
  constructor(private store: Store<AppState>) { }

  addItem() {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = { id: '', name: '' };
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
  ngOnDelete(): void {

  }
}
