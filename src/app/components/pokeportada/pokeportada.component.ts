import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokeportada',
  templateUrl: './pokeportada.component.html',
  styleUrls: ['./pokeportada.component.scss']
})
export class PokeportadaComponent implements OnInit {
  pokemons: any[] = [];
  nombresPokemones = ['eevee', 'pikachu', 'gengar', 'psyduck', 'jigglypuff', 'snorlax'];
  pokemonesMostrar: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((response: any) => {
      this.pokemons = response.results;
      this.pokemonesMostrar = this.pokemons.filter(pokemon => this.nombresPokemones.includes(pokemon.name.toLowerCase()));
    });
  }
  
}
