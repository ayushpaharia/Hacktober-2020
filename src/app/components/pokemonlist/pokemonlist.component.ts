import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {
  pokeObj: Object;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('../../../assets/dex.json').subscribe((data) => {
      this.pokeObj = data
    }, null, () => {
      console.log('observable completed');
    });
  }

}
