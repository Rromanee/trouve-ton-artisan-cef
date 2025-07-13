import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanCardComponent } from '../../components/artisan-card/artisan-card.component';
import { ArtisansService } from '../../services/artisans.service';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-services',
  imports: [CommonModule, ArtisanCardComponent, BreadcrumbComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit {
  artisansServices: any[] = [];

  constructor(private artisanService: ArtisansService) {}
  
  ngOnInit(): void {
    this.artisanService.getProducts().subscribe(data => {
      this.artisansServices = data.filter(artisan => artisan.category === 'Services');
    });
  }  
}
