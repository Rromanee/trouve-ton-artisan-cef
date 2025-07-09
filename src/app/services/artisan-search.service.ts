import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtisanSearchService {
  private searchQuerySource = new BehaviorSubject<string>('');
  searchQuery$ = this.searchQuerySource.asObservable();

  setSearchQuery(query: string): void {
    this.searchQuerySource.next(query);
  }

  getSearchQuery(): string {
    return this.searchQuerySource.getValue();
  }
}
