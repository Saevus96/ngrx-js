import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { ShoppingItem } from './store/models/shopping-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http: HttpClient) { }

  private SHOPPING_URL = "http://localhost:3000/shopping";

  getShoppingItems() {
    return this.http.get<ShoppingItem[]>(this.SHOPPING_URL).pipe(
      delay(500)
    );
  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    return this.http.post(this.SHOPPING_URL, shoppingItem);
  }

  deleteShoppingItem(id: string) {
    return this.http.delete(`${this.SHOPPING_URL}/${id}`).pipe(
      delay(500)
    );
  }
}
