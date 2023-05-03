import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';


@Component({
  selector: 'app-vspokemon',
  templateUrl: './vspokemon.component.html',
  styleUrls: ['./vspokemon.component.scss']
})
export class VspokemonComponent {
  teamPokemons: Pokemon[] = [];
  randomPokemons: Pokemon[] = [];
  searchResults: Pokemon[] = [];
  searchTerm: string = '';
  teamStats: any = {};
  randomStats: any = {};
  battleStarted: boolean = false;
  battleResult: string = '';

  constructor(private pokemonService: PokemonService) {}

  addPokemonToTeam(pokemon: Pokemon) {
    if (!this.teamPokemons.includes(pokemon)) {
      this.teamPokemons.push(pokemon);
      this.calculateTeamStats();
    }
  }
  
  
  removePokemonFromTeam(pokemon: Pokemon) {
    const index = this.teamPokemons.indexOf(pokemon);
    if (index > -1) {
      this.teamPokemons.splice(index, 1);
      this.calculateTeamStats();
    }
  }
  
  selectRandomPokemons() {
    this.randomPokemons = [];
    for (let i = 0; i < 6; i++) {
      this.pokemonService.getRandomPokemon().subscribe((data: any) => {
        const pokemon: Pokemon = {
          urlImg: data.sprites.versions['generation-v']['black-white'].animated.front_default,
          name: data.name,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          specialAttack: data.stats[3].base_stat,
          specialDefense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
        };
        this.randomPokemons.push(pokemon);
        this.calculateRandomStats();
      });
    }
  }
getPokemonImage(name: string) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{{ pokemon.url.split('/')[6] }}.png`;
}

  search() {
    this.pokemonService.searchPokemon(this.searchTerm.toLowerCase()).subscribe((data: any) => {
      const pokemon: Pokemon = {
        name: data.name,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        specialAttack: data.stats[3].base_stat,
        specialDefense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
        urlImg: data.sprites.versions['generation-v']['black-white'].animated.front_default,
      };
      this.searchResults = [pokemon];
    });
  }

  calculateTeamStats() {
    let totalAttack = 0;
    let totalDefense = 0;
    let totalSpecialAttack = 0;
    let totalSpecialDefense = 0;
    let totalSpeed = 0;
    for (let pokemon of this.teamPokemons) {
      totalAttack += pokemon.attack;
      totalDefense += pokemon.defense;
      totalSpecialAttack += pokemon.specialAttack;
      totalSpecialDefense += pokemon.specialDefense;
      totalSpeed += pokemon.speed;
    }
    this.teamStats = {
      attack: totalAttack,
      defense: totalDefense,
      specialAttack: totalSpecialAttack,
      specialDefense: totalSpecialDefense,
      speed: totalSpeed
    };
  }

  calculateRandomStats() {
    let totalAttack = 0;
    let totalDefense = 0;
    let totalSpecialAttack = 0;
    let totalSpecialDefense = 0;
    let totalSpeed = 0;
    for (let pokemon of this.randomPokemons) {
    totalAttack += pokemon.attack;
    totalDefense += pokemon.defense;
    totalSpecialAttack += pokemon.specialAttack;
    totalSpecialDefense += pokemon.specialDefense;
    totalSpeed += pokemon.speed;
    }
    this.randomStats = {
    attack: totalAttack,
    defense: totalDefense,
    specialAttack: totalSpecialAttack,
    specialDefense: totalSpecialDefense,
    speed: totalSpeed
    };
    }
    
    startBattle() {
      const teamTotal = this.calculateTeamAverage();
      const randomTotal = this.calculateRandomAverage();
      if (teamTotal > randomTotal) {
        this.battleResult = 'Ganaste la batalla!';
      } else if (teamTotal < randomTotal) {
        this.battleResult = 'Perdiste 💔';
      } else {
        this.battleResult = 'Intentalo de nuevo :( !';
      }
      this.battleStarted = true;
    }
    
calculateTeamAverage() {
  let totalAttack = 0;
  let totalDefense = 0;
  let totalSpecialAttack = 0;
  let totalSpecialDefense = 0;
  let totalSpeed = 0;
  let numPokemon = this.teamPokemons.length;
  for (let pokemon of this.teamPokemons) {
    totalAttack += pokemon.attack;
    totalDefense += pokemon.defense;
    totalSpecialAttack += pokemon.specialAttack;
    totalSpecialDefense += pokemon.specialDefense;
    totalSpeed += pokemon.speed;
  }
  return (totalAttack + totalDefense + totalSpecialAttack + totalSpecialDefense + totalSpeed) / (numPokemon * 5);
}

calculateRandomAverage() {
  let totalAttack = 0;
  let totalDefense = 0;
  let totalSpecialAttack = 0;
  let totalSpecialDefense = 0;
  let totalSpeed = 0;
  let numPokemon = this.randomPokemons.length;
  for (let pokemon of this.randomPokemons) {
    totalAttack += pokemon.attack;
    totalDefense += pokemon.defense;
    totalSpecialAttack += pokemon.specialAttack;
    totalSpecialDefense += pokemon.specialDefense;
    totalSpeed += pokemon.speed;
  }
  return (totalAttack + totalDefense + totalSpecialAttack + totalSpecialDefense + totalSpeed) / (numPokemon * 5);
}
    resetBattle() {
    this.teamPokemons = [];
    this.randomPokemons = [];
    this.searchResults = [];
    this.searchTerm = '';
    this.teamStats = {};
    this.randomStats = {};
    this.battleStarted = false;
    this.battleResult = '';
    }
    
    }
    
    interface Pokemon {
    name: string;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    urlImg: string;
    }
  