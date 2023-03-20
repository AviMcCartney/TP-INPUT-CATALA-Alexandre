import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FichePersonneComponent } from './fiche-personne/fiche-personne.component';
import { BoiteComponent } from './boite/boite.component';

@NgModule({
  declarations: [AppComponent, FichePersonneComponent, BoiteComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
