import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fa1, fa2, fa3, fa4 } from '@fortawesome/free-solid-svg-icons';

import { ArtisansService } from '../services/artisans.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  icon1 = fa1;
  icon2 = fa2;
  icon3 = fa3;
  icon4 = fa4;

  steps = [
    {
      title: 'Choisir la catégorie d\'artisanat dans le menu',
      icon: fa1
    },
    {
      title: 'Choisir un artisan',
      icon: fa2
    },
    {
      title: 'Le contacter via le formulaire de contact',
      icon: fa3
    },
    {
      title: 'Une réponse sera apportée sous 48h',
      icon: fa4
    }
  ];

  artisansDuMois: any[] = [];

  error: string | null = null;

  constructor(
    private artisanService: ArtisansService
  ) { }

  ngOnInit(): void {
    this.artisanService.getProducts().subscribe(data => {
      this.artisansDuMois = data.filter(artisan => artisan.top === true);
    });
  }
}