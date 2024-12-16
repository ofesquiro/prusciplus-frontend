import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PrusciPlusService } from '../PrusciPlus.Service';
import { GetMovieResponse } from '../definitions/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class FilmResolver implements Resolve<GetMovieResponse> {
  constructor(private service: PrusciPlusService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise  <GetMovieResponse> {
    const filmId = route.paramMap.get('id');
    return await this.service.getOneFilm(filmId as unknown as number);
  }
}