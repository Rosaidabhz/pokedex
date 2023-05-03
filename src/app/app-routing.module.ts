import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeportadaComponent } from './components/pokeportada/pokeportada.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { VspokemonComponent } from './components/vspokemon/vspokemon.component';

const routes: Routes = [
{
  path:'',
  component:PokeportadaComponent
},
{
  path:'pokemones',
  component:PokemonComponent
},
{
  path:'home',
  component:PokeportadaComponent
},
{
  path:'vs',
  component:VspokemonComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
