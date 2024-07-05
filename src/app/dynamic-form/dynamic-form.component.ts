import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { apiConfig } from '../api-config';

interface FormField {
  key: string;
  type: string;
  label: string;
  required: boolean;
}

interface FormConfig {
  formName: string;
  url: string;
  schema: FormField[];
}

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup = this.fb.group({});
  config: FormConfig[] = apiConfig;
  selectedConfig: FormConfig | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {}

  selectForm(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedIndex = Number(selectElement.value);
    this.selectedConfig = this.config[selectedIndex];
    this.form = this.createFormGroup(this.selectedConfig.schema);
    this.loadData(this.selectedConfig.url);
  }

  createFormGroup(schema: FormField[]): FormGroup {
    const group: { [key: string]: any } = {};
    schema.forEach(field => {
      group[field.key] = ['', field.required ? Validators.required : null];
    });
    return this.fb.group(group);
  }

  loadData(url: string): void {
    this.http.get<any>(url).subscribe(data => {
      if (data && data.length > 0) {
        this.form.patchValue(data[0]); // Assuming you're dealing with an array and using the first item
      }
    });
  }

  onSubmit() {
    console.log('Form Submitted', this.form.value);
  }
}
