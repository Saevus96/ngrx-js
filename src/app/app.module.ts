import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from './store/reducers/shopping.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ShopingEffects} from '../app/store/effects/shopping.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([ShopingEffects]),
    StoreModule.forRoot({ shopping: ShoppingReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
