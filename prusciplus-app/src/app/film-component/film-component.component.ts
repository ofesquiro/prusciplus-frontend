import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { IMovie } from '../Peli';
import { ObjectId } from 'mongodb';
import { Router } from '@angular/router';
import path from 'path';
import { get } from 'http';
@Component({
  selector: 'app-film-component',
  standalone: true,
  imports: [],
  templateUrl: './film-component.component.html',
  styleUrl: './film-component.component.css'
})
export class FilmComponentComponent implements OnChanges {
  @Input() film : IMovie = {
    _id: -1 as unknown as ObjectId,
    name: "error",
    comments : [],
    categoria: [],
    actors : [],
    image : "",
    video: ""
  };
  constructor(private router : Router) {

  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['film'] && changes['film'].currentValue) {
      this.film = changes['film'].currentValue;
    }
  }

  public onClickFilm () {
    this.router.navigate(["film", this.film._id]);
  }
}
