import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artisan-card',
  imports: [CommonModule],
  templateUrl: './artisan-card.component.html',
  styleUrl: './artisan-card.component.scss'
})
export class ArtisanCardComponent {
  @Input() artisan: any;
}