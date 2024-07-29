import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HttpClientModule,
    NgFor,
    NgbRatingModule,
    NgIf,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  trendingMovies: any;
  popularMovies: any;
  theatreMovies: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() :void {
    this.getTrendingMovies();
    this.getPopularMovies();
    this.getTheatreMovies();
  }

  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe( (movies) => {
      this.trendingMovies = movies;
    });
  }

  getTheatreMovies() {
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe( (movies) => {
      this.theatreMovies = movies;
    });
  }

  getPopularMovies() {
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe( (movies) => {
      this.popularMovies = movies;
    });
  }

  ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }
}
