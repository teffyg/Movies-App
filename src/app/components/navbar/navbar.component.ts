import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor( public ms:MoviesService,
                 public router: Router ) { }

  ngOnInit(): void {
  }

  searchMovies( keyword: string ){
    if( keyword.length == 0 ){
      return;
    }
    console.log(keyword);
    this.router.navigate(['search', keyword])
  }
}
