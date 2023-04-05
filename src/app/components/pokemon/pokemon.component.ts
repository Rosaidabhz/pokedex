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
  description: string = '';
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
      this.urlType = (this.urlType);
      this.urlHp = data.stats[0].base_stat;
      this.urlAtt = data.stats[1].base_stat;
      this.urlDef = data.stats[2].base_stat;
      this.urlSpAtt = data.stats[3].base_stat;
      this.urlSpDef = data.stats[4].base_stat;
      this.urlSpeed = data.stats[5].base_stat;
      this.description = data.species.url;
      this.pokemonService.getPokemonSpeciesDescription(this.description).subscribe((data: any) => {
        const description = data.flavor_text_entries.find((entry: any) => entry.language.name === 'es');
        this.description = description.flavor_text;
        console.log(data);
        this.showPokecard = true;
      });
    }); 
  }
  
  getTranslatedType() {
    switch(this.urlType) {
      case "normal":
        return "normal";
      case "fire":
        return "fuego";
      case "water":
        return "agua";
      case "electric":
        return "eléctrico";
      case "grass":
        return "planta";
      case "ice":
        return "hielo";
      case "fighting":
        return "lucha";
      case "poison":
        return "veneno";
      case "ground":
        return "tierra";
      case "flying":
        return "volador";
      case "psychic":
        return "psíquico";
      case "bug":
        return "bicho";
      case "rock":
        return "roca";
      case "ghost":
        return "fantasma";
      case "dragon":
        return "dragón";
      case "dark":
        return "oscuro";
      case "steel":
        return "acero";
      case "fairy":
        return "hada";
      default:
        return this.urlType;
    }
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

