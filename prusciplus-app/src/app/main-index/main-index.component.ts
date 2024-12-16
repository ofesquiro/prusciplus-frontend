  import { Component } from '@angular/core';
  import { RouterLink, RouterOutlet } from '@angular/router';
  import { HttpClient } from '@angular/common/http';
  import Searcher from '../Searcher';
  import { IMovie } from '../Peli';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { FilmComponentComponent } from "../film-component/film-component.component";
  import { isAdmin } from '../definitions/StorageVariables';
import { PrusciPlusService } from '../PrusciPlus.Service';
  @Component({
    selector: 'app-main-index',
    standalone: true,
    imports: [RouterOutlet, CommonModule, FormsModule, FilmComponentComponent, RouterLink],
    templateUrl: './main-index.component.html',
    styleUrl: './main-index.component.css'
  })

  export class MainIndexComponent {
    title = 'app';
    private sercher : Searcher;
    public fotosUrl : string[] = [];
    public currentIndex = 0;
    public input : string;
    public films : IMovie[];
    public currentPage: number = 1;
    public readonly limit: number = 2;
    constructor(httpClient: HttpClient, private service : PrusciPlusService) {
      this.input = "";
      this.films = [];
      this.sercher = new Searcher(httpClient);
      this.fotosUrl = ["../../assets/Click.jpg","../../assets/home2.jpg","../../assets/home3.jpg"];
    }
    async ngOnInit() {
      this.sercher.setInput(this.input);
      this.films = await this.sercher.search();
    }
    async onChange() : Promise<void> {
      this.sercher.setInput(this.input);
      let auxFilm : IMovie[] = await this.sercher.search();
      if (auxFilm.length < this.limit) {
        this.films = auxFilm;
        return;
      }
      let res : IMovie[] = [];
      let ind : number = (this.currentPage * this.limit) - 1;
      res.push(auxFilm[ind]);
      res.push(auxFilm[ind + 1]);
      this.films = res;
    }
    public onPageChange(page: number) {
      this.currentPage = page;
      console.log(page);
      let res = this.sercher.onPageChange(page);
      console.log(res);
      this.films = res;
    }

    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.fotosUrl.length;
    }

    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.fotosUrl.length) % this.fotosUrl.length;
    }

    public getIsAdmin() : boolean{
      let isadmin : boolean = isAdmin();
      return isadmin;
    }
  }
