import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../services/http.service";
import {Movie} from "../../../models/movie";
import {switchMap} from 'rxjs/operators'
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs";
@Component({
  selector: 'app-movie-in-years',
  templateUrl: './movie-in-years.component.html',
  styleUrls: ['./movie-in-years.component.css']
})
export class MovieInYearsComponent implements OnInit {
movies : Observable<Movie[]>
  constructor(private http: HttpService, private route:ActivatedRoute ,) { }

  ngOnInit(): void {
  this.movies = this.route.paramMap.pipe(
    switchMap((params:ParamMap)=>
    this.http.getMoviesFromYear(params.get('years'))
    )
  )
  }

}
