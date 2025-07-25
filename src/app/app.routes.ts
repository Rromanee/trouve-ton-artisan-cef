import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { DonneesPersonnellesComponent } from './pages/donnees-personnelles/donnees-personnelles.component';
import { AccessibiliteComponent } from './pages/accessibilite/accessibilite.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PolitiqueCookiesComponent } from './pages/politique-cookies/politique-cookies.component';
import { GestionCookiesComponent } from './pages/gestion-cookies/gestion-cookies.component'
import { BatimentComponent } from './pages/batiment/batiment.component';
import { ServicesComponent } from './pages/services/services.component';
import { FabricationComponent } from './pages/fabrication/fabrication.component';
import { AlimentationComponent } from './pages/alimentation/alimentation.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ArtisanSearchComponent } from './components/artisan-search/artisan-search.component';
import { ArtisanPageComponent } from './components/artisan-page/artisan-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'batiment', component: BatimentComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'fabrication', component: FabricationComponent },
    { path: 'alimentation', component: AlimentationComponent },
    { path: 'mentions-legales', component: MentionsLegalesComponent },
    { path: 'donnees-personnelles', component: DonneesPersonnellesComponent },
    { path: 'accessibilite', component: AccessibiliteComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'politique-cookies', component: PolitiqueCookiesComponent },
    { path: 'gestion-cookies', component: GestionCookiesComponent },
    { path: 'artisan/:id', component: ArtisanPageComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'recherche', component: ArtisanSearchComponent },
    { path: '**', redirectTo: '/not-found' },
];
