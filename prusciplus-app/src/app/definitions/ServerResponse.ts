import { Observable } from "rxjs";
import { IMovie } from "../Peli";
import { IActor } from "../Actor";


export interface ServerResponse{
    success: boolean;
    status: number;
    message: string;
    data: Data;
}

export type Data = {
    token : string;
}

export interface LogInResponse {
    token: Observable<object>;
    user: Observable<object>;
}

export interface GetMovieResponse {
    success: boolean;
    film: Observable<MovieData>;
}

export type MovieData = {
    films: IMovie[];
}

export interface GetActorResponse {
    success: boolean;
    actor: Observable<ActorData>;
}

export type ActorData = {
    users: IActor[];
}