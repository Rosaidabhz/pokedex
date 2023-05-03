import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokecardComponent } from './components/pokecard/pokecard.component';
import { PokeportadaComponent } from './components/pokeportada/pokeportada.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';
import { VspokemonComponent } from './components/vspokemon/vspokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PokecardComponent,
    PokeportadaComponent,
    PokemonComponent,
    VspokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
