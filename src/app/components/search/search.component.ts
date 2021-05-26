import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from 'src/app/services/movies.service';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  moviesList: any[] = [];

  constructor( public activatedRoute: ActivatedRoute,
               public ms: MoviesService ) { }

  public ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(params => {
      this.ms.search(params['keyword'])
      .subscribe((data:any) => { // obs. sin poner data de tipo any el ngFor no funciona en el html
        this.moviesList = data;
        console.log(this.moviesList)
      })
    })
  }

}
