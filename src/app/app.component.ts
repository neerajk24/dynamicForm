import { Component } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    DynamicFormComponent
  ],
  template: '<app-dynamic-form></app-dynamic-form>',
  providers: [provideHttpClient()]
})
export class AppComponent {}
