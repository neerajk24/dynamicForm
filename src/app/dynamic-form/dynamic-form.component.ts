import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormService } from '../form.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { apiConfig } from '../api-config';

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
  config = apiConfig;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.createFormGroup(this.config.schema);
    this.loadData();
  }

  createFormGroup(schema: any[]): FormGroup {
    const group: any = {};
    schema.forEach(field => {
      group[field.key] = ['', field.required ? Validators.required : null];
    });
    return this.fb.group(group);
  }

  loadData(): void {
    this.http.get<any>(this.config.url).subscribe(data => {
      this.form.patchValue(data[0]); // Assuming you're dealing with an array and using the first item
    });
  }

  onSubmit() {
    console.log('Form Submitted', this.form.value);
  }
  
}