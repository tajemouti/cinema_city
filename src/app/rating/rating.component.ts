import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [
    NgbRatingModule,
    NgIf,
  ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  @Input() rating: any;
  @Input() isReadOnly: boolean = false;
  
  ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}

}
