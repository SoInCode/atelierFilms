import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { DetailComponent } from "../detail/detail.component";
import { FilmService } from '../services/film.service';

@Component({
    selector: 'app-film',
    standalone: true,
    templateUrl: './film.component.html',
    styleUrl: './film.component.scss',
    imports: [CommonModule, DetailComponent]
})
export class FilmComponent implements OnInit {

  serviceFilm: FilmService = inject(FilmService);
  films:any;
  title: string="";
  plot: string="";

  ngOnInit(){
    this.getFilms();
  }

  getFilms() {
    this.serviceFilm.getFilms().subscribe({
      next: (data) => {
        console.log(data);
        this.films = data;
      }
    })
  }

  modifierTitre(t:string, d:string){
    console.log(t);
    this.title = t;
    this.plot = d;
  }

}
