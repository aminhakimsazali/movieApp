import { Component, OnInit , EventEmitter} from '@angular/core';
import { MovieService, SearchType } from './../../services/movie.service';
// import { MovieService, SearchType } from './../../services/movie.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
 

  constructor(private movieService : MovieService) { }

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }

  ngOnInit() {
  }

}
