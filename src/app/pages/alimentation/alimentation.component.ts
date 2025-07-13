import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanCardComponent } from '../../components/artisan-card/artisan-card.component';
import { ArtisansService } from '../../services/artisans.service';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-alimentation',
  imports: [CommonModule, ArtisanCardComponent, BreadcrumbComponent],
  templateUrl: './alimentation.component.html',
  styleUrls: ['./alimentation.component.scss']
})

export class AlimentationComponent implements OnInit {

  artisansAlimentation: any[] = [];

  constructor(private artisanService: ArtisansService) {}
  
  ngOnInit(): void {
    this.artisanService.getProducts().subscribe(data => {
      this.artisansAlimentation = data.filter(artisan => artisan.category === 'Alimentation');
    });
  }  
}