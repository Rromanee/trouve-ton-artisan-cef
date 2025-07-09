import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisanSearchService } from '../../services/artisan-search.service';
import { ArtisanCardComponent } from '../artisan-card/artisan-card.component';

import { ArtisansService } from '../../services/artisans.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artisan-search',
  imports: [CommonModule, ArtisanCardComponent],
  templateUrl: './artisan-search.component.html',
  styleUrls: ['./artisan-search.component.scss']
})
export class ArtisanSearchComponent implements OnInit {
  artisans: any[] = [];
  filteredArtisans: any[] = [];
  query: string = '';

  constructor(
    private artisanSearchService: ArtisanSearchService,
    private artisanService: ArtisansService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.query = this.artisanSearchService.getSearchQuery().toLowerCase().trim();

    this.artisanService.getProducts().subscribe((data) => {
      this.artisans = data;

      if (this.query) {
        this.filteredArtisans = this.artisans.filter(artisan =>
          artisan.name.toLowerCase().includes(this.query) ||
          artisan.specialty.toLowerCase().includes(this.query) ||
          artisan.location.toLowerCase().includes(this.query)
        );
      } else {
        this.filteredArtisans = this.artisans;
      }
    });
  }
}
