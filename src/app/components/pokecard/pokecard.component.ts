import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent implements OnInit {

  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemons().subscribe((response: any) => {
      this.pokemons = response.results;
      for (const pokemon of this.pokemons) {
        this.pokemonService.getMoreData(pokemon.name).subscribe((data: any) => {
          pokemon.id = data.id;
          pokemon.type = data.types[0].type.name;
          pokemon.height = data.height;
          pokemon.hp = data.stats[0].base_stat;
        });
      }
    });
  }
  getTipoPokemonClass(tipo: string) {
    switch (tipo) {
      case 'fire':
        return 'tipo-fuego';
      case 'water':
        return 'tipo-agua';
      case 'grass':
        return 'tipo-planta';
      case 'electric':
        return 'tipo-electrico';
      case 'psychic':
        return 'tipo-psiquico';
      case 'rock':
        return 'tipo-roca';
      case 'ice':
        return 'tipo-hielo';
      case 'fighting':
        return 'tipo-lucha';
      case 'poison':
        return 'tipo-veneno';
      case 'normal':
        return 'tipo-normal';
      case 'bug':
        return 'tipo-bicho';
      case 'ground':
        return 'tipo-tierra';
      case 'dragon':
        return 'tipo-dragon';
      case 'fairy':
        return 'tipo-hada';
      case 'ghost':
        return 'tipo-fantasma';
      default:
        return '';
    }
  }
  
  
}
