import { Component, OnInit } from '@angular/core';
import { AppState } from './store/models/app-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingItem } from './store/models/shopping-item.model';
import { ShoppingReducer } from '../app/store/reducers/shopping.reducer';
import { AddItemAction, DeleteItemAction } from './store/actions/shopping.actions';
import {v4 as uuid} from 'uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  newShoppingItem: ShoppingItem = {id: '', name: ''};
  shoppingItems$ = new Array();
  obs$;
  title = 'ngrx-shopping-list';
  ngOnInit(): void {
    this.obs$ = this.store.select(store => store.shopping)
      .subscribe(value => {
        this.shoppingItems$ = value;
      });
    
  }
  constructor(private store: Store<AppState>) { }

  addItem() {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = {id: '', name: ''};
  }

  deleteItem(id:string){
    this.store.dispatch(new DeleteItemAction(id));
  }
  ngOnDelete(): void {
    this.obs$.unsubscribe();
  }
}
