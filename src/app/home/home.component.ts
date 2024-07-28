import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private http: HttpClient) {}

  ngOnInit() :void {
    this.getTrendingMovies();
  }

  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe( (movies) => {
      this.trendingMovies = movies;
      console.log(this.trendingMovies);
    });
  }

  ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}
}
