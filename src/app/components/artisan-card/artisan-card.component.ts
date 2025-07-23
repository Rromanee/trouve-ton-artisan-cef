import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-artisan-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './artisan-card.component.html',
  styleUrl: './artisan-card.component.scss'
})
export class ArtisanCardComponent {
  @Input() artisan: any;

}