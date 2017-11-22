import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';

import { AppComponent } from './app.component';
import { RoutingModule } from './modules/routing/routing.module';
import { WebService } from './services/web.service';
import { JwtModule } from './modules/jwt/jwt.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    JwtModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
