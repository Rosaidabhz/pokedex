import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = 'https://pokeapi.co/api/v2';

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
  getPokemonSpeciesDescription(url: string) {
    return this.http.get(url);
  }
  private apiUrl = 'https://pokeapi.co/api/v2/';

  getRandomPokemon(): Observable<any> {
    const randomId = Math.floor(Math.random() * 898) + 1;
    const url = `${this.apiUrl}pokemon/${randomId}`;
    return this.http.get(url);
  }

  searchPokemon(name: string): Observable<any> {
    const url = `${this.apiUrl}pokemon/${name}`;
    return this.http.get(url);
  }

  getRandomPokemons() {
    const randomIds = Array.from({ length: 6 }, () => Math.floor(Math.random() * 898) + 1);
    const requests = randomIds.map((id: number) => {
      return this.http.get(`${this.apiUrl}pokemon/${id}`);
    });
  }}