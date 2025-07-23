import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ArtisanCardComponent } from '../artisan-card/artisan-card.component';
import { ArtisansService } from '../../services/artisans.service';


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
    private artisanService: ArtisansService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const query = params['query']?.toLowerCase().trim() || '';
      this.query = query;
      
    this.artisanService.getProducts().subscribe((data) => {
      this.artisans = data;
  
        this.filteredArtisans = query
          ? this.artisans.filter(artisan =>
              artisan.name.toLowerCase().includes(this.query) ||
              artisan.specialty.toLowerCase().includes(this.query) ||
              artisan.location.toLowerCase().includes(this.query)
            )
          : this.artisans;
      });
    });
  }
}