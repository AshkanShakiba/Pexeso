import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { GameComponent } from './components/game/game.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { RotateDeviceComponent } from './components/rotate-device/rotate-device.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    GameComponent,
    CardComponent,
    ButtonComponent,
    RotateDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
