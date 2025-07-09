import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanCardComponent } from '../../components/artisan-card/artisan-card.component';
import { ArtisansService } from '../../services/artisans.service';

@Component({
  selector: 'app-fabrication',
  imports: [CommonModule, ArtisanCardComponent],
  templateUrl: './fabrication.component.html',
  styleUrls: ['./fabrication.component.scss']
})

export class FabricationComponent implements OnInit {
  artisansFabrication: any[] = [];

  constructor(private artisanService: ArtisansService) {}
  
  ngOnInit(): void {
    this.artisanService.getProducts().subscribe(data => {
      this.artisansFabrication = data.filter(artisan => artisan.category === 'Fabrication');
    });
  }  
}