import { Component } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    DynamicFormComponent
  ],
  template: '<app-dynamic-form></app-dynamic-form>'
})
export class AppComponent {}
