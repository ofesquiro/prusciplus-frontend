
import {PrusciPlusService} from "./PrusciPlus.Service";
import { IMovie } from "./Peli";
import { HttpClient } from "@angular/common/http";
import { GetMovieResponse } from "./definitions/ServerResponse";
export class Searcher {
    private input : string;
    private service : PrusciPlusService;
    private fullSetOfMovies : IMovie[];
    private currentPageContent: IMovie[];
    private currentPage: number = 1;
    private readonly limit: number = 2;

    constructor(HttpClient: HttpClient) {
        this.input = "";
        this.service = new PrusciPlusService(HttpClient);
        this.fullSetOfMovies = [];
        this.currentPageContent = [];
        this.load();
        this.loadPageContent();
    }
    private load() : void {
        /* por el momento sin uso por la implementacion del get con paginacion*/
        let movieResponse : GetMovieResponse = this.service.getAllFilms();
        if (!movieResponse.success) {console.log("error"); return;}
        movieResponse.film.subscribe((data : any) => {
            this.fullSetOfMovies = data.films;
        });
    }
    public setInput(input : string) {
        this.input = input;
    }
    public getInput() : string {
        return this.input;
    }
    public async search() : Promise<IMovie[]> {
        /*
        Busca las peliculas que contengan el texto ingrd 
        en caso que el input sea vacio, retorna un array de todo lo que haya
        params: None (usa el this.input)
        returns: Array de IPeli
        */
        if (this.input === "") return this.fullSetOfMovies;
        return this.fullSetOfMovies.filter((film : IMovie) => film.name.toLowerCase().includes(this.input));
    }
    public loadPageContent() : void {
        const response = this.service.getAllWithPagination(this.currentPage,this.limit);
        if (response.success) {
          response.film.subscribe((data: any) => {
            this.currentPageContent = data.films;
          });
        } else {
          console.error('Failed to load films');
        }
    }
    public onPageChange(page: number) {
        if(this.currentPage > 2) {console.log(this.currentPageContent);return this.currentPageContent;}
        this.loadPageContent();
        this.currentPage = page;
        return this.currentPageContent;
    }
}
export default Searcher;