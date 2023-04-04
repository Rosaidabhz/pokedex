import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeportadaComponent } from './components/pokeportada/pokeportada.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokecardComponent } from './components/pokecard/pokecard.component';

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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
