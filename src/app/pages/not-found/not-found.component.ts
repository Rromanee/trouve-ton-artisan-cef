// not-found.component.ts
import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule, BreadcrumbComponent],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  faHouse = faHouse;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

}