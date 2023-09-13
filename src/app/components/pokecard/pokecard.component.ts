import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent implements OnInit {
  pokemons: any[] = []; // Aquí debes cargar tus datos de Pokémon
  currentPage: number = 1;
  
  displayedPageNumbers: number[] = [];
  cardsPerPage: number = 15;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
    this.updateDisplayedPageNumbers();

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
  
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedPageNumbers();
    }
  }

  nextPage() {
    const totalPages = this.getTotalPages();
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.updateDisplayedPageNumbers();
    }
  }

  goToPage(page: number) {
    const totalPages = this.getTotalPages();
    if (page >= 1 && page <= totalPages) {
      this.currentPage = page;
      this.updateDisplayedPageNumbers();
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.pokemons.length / this.cardsPerPage);
  }

  updateDisplayedPageNumbers() {
    const totalPages = this.getTotalPages();
    const mid = Math.floor(totalPages / 2);
    const offset = this.currentPage - mid;
    this.displayedPageNumbers = [];

    for (let i = 0; i < 3; i++) {
      const page = this.currentPage + i - 1;
      if (page >= 1 && page <= totalPages) {
        this.displayedPageNumbers.push(page);
      }
    }
  }
}