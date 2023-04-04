import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  name: string = '';
  urlId: number = 0;
  urlImg: string = '';
  urlNam: string = '';
  urlType: string = '';
  urlType2: string = '';
  urlHeight: string = '';
  urlHp: number = 0;
  urlAtt: number = 0;
  urlDef: number = 0;
  urlSpAtt: number = 0;
  urlSpDef: number = 0;
  urlSpeed: number = 0;

  showPokecard: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}

  search() {
    let pokemonName = this.name.toLowerCase();
  
    this.pokemonService.getPokemon(pokemonName).subscribe((data: any) => {
      this.urlImg = data.sprites.versions['generation-v']['black-white'].animated.front_default;
      this.urlHeight = data.height;
      this.urlNam = data.Name;
      this.urlId = data.id;

      if (data.types.length < 2) {
        this.urlType2 = "";
        this.urlType = data.types[0].type.name;
      } else {
        this.urlType = data.types[0].type.name;
        this.urlType2 = data.types[1].type.name;
      }

      this.urlHp = data.stats[0].base_stat;
      this.urlAtt = data.stats[1].base_stat;
      this.urlDef = data.stats[2].base_stat;
      this.urlSpAtt = data.stats[3].base_stat;
      this.urlSpDef = data.stats[4].base_stat;
      this.urlSpeed = data.stats[5].base_stat;

      console.log(data);
      this.showPokecard = true;
    });
  }
  get pokemonTypeClass() {
    let cssClass = '';
    switch (this.urlType) {
      case 'grass':
        cssClass = 'grass-type';
        break;
      case 'fire':
        cssClass = 'fire-type';
        break;
      case 'water':
        cssClass = 'water-type';
        break;
      case 'bug':
        cssClass = 'bug-type';
        break;
      case 'normal':
        cssClass = 'normal-type';
        break;
      case 'poison':
        cssClass = 'poison-type';
        break;
      case 'electric':
        cssClass = 'electric-type';
        break;
      case 'ground':
        cssClass = 'ground-type';
        break;
      case 'fairy':
        cssClass = 'fairy-type';
        break;
      case 'fighting':
        cssClass = 'fighting-type';
        break;
      case 'psychic':
        cssClass = 'psychic-type';
        break;
      case 'rock':
        cssClass = 'rock-type';
        break;
      case 'steel':
        cssClass = 'steel-type';
        break;
      case 'ice':
        cssClass = 'ice-type';
        break;
      case 'ghost':
        cssClass = 'ghost-type';
        break;
      case 'dragon':
        cssClass = 'dragon-type';
        break;
      default:
        cssClass = '';
        break;
    }
    return cssClass;
  }
}

