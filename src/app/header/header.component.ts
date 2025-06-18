import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faBars = faBars;
  faXmark = faXmark;

  showSearchMobile = false;
  showMenuMobile = false;
  searchQuery: string = '';

  toggleSearchMobile() {
    this.showSearchMobile = !this.showSearchMobile;
    if (this.showMenuMobile) {
      this.showMenuMobile = false;
    }
  }

  toggleMenuMobile() {
    this.showMenuMobile = !this.showMenuMobile;
    if (this.showSearchMobile) {
      this.showSearchMobile = false;
    }
  }

  onSearch(event: Event) {
    event.preventDefault();
    if (this.searchQuery.trim()) {
      console.log('Recherche:', this.searchQuery);
    }
  }

  onMobileSearch() {
    if (this.searchQuery.trim()) {
      console.log('Recherche mobile:', this.searchQuery);
      this.showSearchMobile = false;
    }
  }

  closeMenuOnLinkClick() {
    this.showMenuMobile = false;
  }
}