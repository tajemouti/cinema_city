import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RatingComponent } from "../rating/rating.component";

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HttpClientModule,
    NgIf,
    RatingComponent,
    NgFor,
],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    }
    if (this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
    }
    if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
    }
    this.getMovie();
  }

  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex((movie: {id: string}) => movie.id == this.id);
      if (index > -1) {
        this.movie = this.movies[index];
      }
    },
    (error) => {
      console.error('Error fetching movie data', error);
    }
  
  );
  }

}
