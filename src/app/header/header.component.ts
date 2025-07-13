import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
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


  constructor(
    private router: Router,
  ) {}
  
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

  onSearch(event: Event): void {
    event.preventDefault();
    const q = this.searchQuery.trim();
    if (q) {
      this.router.navigate(['/recherche'], {
        queryParams: { query: q }
      });
    }
    this.searchQuery = '';
  }

  onMobileSearch(): void {
    const q = this.searchQuery.trim();
    if (q) {
      this.router.navigate(['/recherche'], {
        queryParams: { query: q }
      });
      this.showSearchMobile = false;
    }
    this.searchQuery = '';
  }

  closeMenuOnLinkClick(): void {
    this.showMenuMobile = false;
  }
}