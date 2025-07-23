import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { ArtisansService } from '../../services/artisans.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-artisan-page',
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule, RouterModule],
  templateUrl: './artisan-page.component.html',
  styleUrl: './artisan-page.component.scss'
})
export class ArtisanPageComponent implements OnInit {

  title = 'Fiche Artisan';
  artisan: any;
  faArrowRight = faArrowRight;

  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  normalize(str: string): string {
    if (!str) return '';
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  constructor(
    private fb: FormBuilder,
    private artisanService: ArtisansService,
    private contactService: ContactService,
    private route: ActivatedRoute
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      company: ['']
    });
  }

  private sanitizeInput(value: string): string {
    return value?.trim() || '';
  }
  
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.artisanService.getProducts().subscribe((artisans) => {
      this.artisan = artisans.find((p: any) => p.id == id);
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.markFormGroupTouched(this.contactForm);
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const cleanData = {
      name: this.sanitizeInput(this.contactForm.value.name),
      subject: this.sanitizeInput(this.contactForm.value.subject),
      message: this.sanitizeInput(this.contactForm.value.message),
      company: this.sanitizeInput(this.contactForm.value.company)
    };
    
    if (!cleanData.name || !cleanData.subject || !cleanData.message) {
      this.submitError = true;
      this.isSubmitting = false;
      return;
    }

    this.contactService.sendEmail(cleanData).subscribe({    
      next: () => {
        this.submitSuccess = true;
        this.contactForm.reset();
        setTimeout(() => (this.submitSuccess = false), 5000);
      },
      error: (err) => {
        this.submitError = true;
        this.errorMessage =
          err?.error?.error === 'Trop de tentatives d\'envoi. Veuillez réessayer dans 15 minutes.'
            ? err.error.error
            : 'Une erreur s\'est produite. Veuillez réessayer.';
            setTimeout(() => {this.submitError = false; this.errorMessage = '';}, 5000);
      },           
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}