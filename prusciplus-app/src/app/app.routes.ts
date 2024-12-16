
import { Routes } from '@angular/router';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { MainIndexComponent } from './main-index/main-index.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FilmContentComponent } from './film-content/film-content.component';
import { AddFilmFormComponent } from './add-film-form/add-film-form.component';
import { FilmResolver } from './film-component/resolver';
export const routes: Routes = [
    {
        path: "", 
        component: LogInFormComponent,
        title: "Log In"
    },{
        path: "home",
        component: MainIndexComponent,
        title: "Inicio",
    },
    {
        path: "sign-up", 
        component: SignUpFormComponent,
        title: "Sign Up"
    },
    {
        path: "film/:id",
        component: FilmContentComponent,
        title: "Film",
        resolve: {
            film: FilmResolver
        }
    },
    {
        path:"addfilm",
        component: AddFilmFormComponent,
        title: "agregar peliculas"
    },
    {
        path: "**", 
        component: ErrorPageComponent,
        title: "Informa Di Meglio"
    }
];
export class AppRoutingModule {}