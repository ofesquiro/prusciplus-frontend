import { booleanAttribute, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Searcher from './Searcher';
import { IMovie } from './Peli';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HammerModule } from '@angular/platform-browser';
import { IgxCarouselModule } from 'igniteui-angular';
import {getUsarName, getLevel, isAdmin, isAuthentificated} from './definitions/StorageVariables';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, RouterLink, RouterLinkActive, HammerModule, IgxCarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'app';
  private sercher : Searcher;
  public input : string;
  public films : IMovie[];
  constructor(httpClient: HttpClient) {
    this.input = "";
    this.films = [];
    this.sercher = new Searcher(httpClient);
  }
  async onChange() : Promise<void> {
    this.sercher.setInput(this.input);
    this.films = await this.sercher.search();
  }
  public onNavBarClicked() : void {
    if(isAuthentificated() === false){
      alert("Inicie sesión para acceder a esta funcionalidad");
    }else{
      window.location.href = "/home";
    }
  }
  public getIsAdmin() : boolean{
    let isadmin : boolean = isAdmin();
    return isadmin;
  }
  public getUserName() : string{
    return getUsarName();
  }
  public getUserLevel() : number{
    return getLevel();
  }

  public isAuthentificated() : boolean{
    let isauthentificated : boolean = isAuthentificated();
    return isauthentificated;
  }
}
