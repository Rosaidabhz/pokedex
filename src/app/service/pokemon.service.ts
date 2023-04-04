import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
    constructor(private http : HttpClient){

    }
    getPokemons(){
        return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    }
    getMoreData(name: string){
        return this.http.get('https://pokeapi.co/api/v2/pokemon/'+name);
    }
  
  getPokemon(name: string){
      return this.http.get('https://pokeapi.co/api/v2/pokemon/'+name);
  }
  }