import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanCardComponent } from '../../components/artisan-card/artisan-card.component';
import { ArtisansService } from '../../services/artisans.service';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-batiment',
  imports: [CommonModule, ArtisanCardComponent, BreadcrumbComponent],
  templateUrl: './batiment.component.html',
  styleUrls: ['./batiment.component.scss']
})

export class BatimentComponent implements OnInit {
  artisansBatiment: any[] = [];

  constructor(private artisanService: ArtisansService) {}

  normalize(str: string): string {
    if (!str) return '';
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
  
  ngOnInit(): void {
    this.artisanService.getProducts().subscribe(data => {
      this.artisansBatiment = data.filter(artisan => {
        const normalizedCategory = this.normalize(artisan.category);
        return normalizedCategory === 'batiment';
      });
    });
  }  
}
