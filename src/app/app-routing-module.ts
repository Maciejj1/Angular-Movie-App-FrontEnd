import {NgModule} from "@angular/core";
import {RouterModule, ROUTES, Routes} from "@angular/router";
import {MoviesComponent} from "./pages/movies/movies.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {CategoriesComponent} from "./pages/categories/categories.component";
import {MovieDetailsComponent} from "./pages/movies/movie-details/movie-details.component";
import {MoviesInCategoryComponent} from "./pages/categories/movies-in-category/movies-in-category.component";
import {YearsComponent} from "./pages/years/years.component";
import {MovieInYearsComponent} from "./pages/years/movie-in-years/movie-in-years.component";


const routes: Routes = [
  {path: '' , redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'movie/:id', component: MovieDetailsComponent},
  {path: 'category/:category' , component: MoviesInCategoryComponent},
  {path: 'years' , component: YearsComponent},
  {path: 'years/:years' , component: MovieInYearsComponent },
  {path: '**' , component: PageNotFoundComponent},
]

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule{}
