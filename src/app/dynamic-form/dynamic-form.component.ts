import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormService } from '../form.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

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
  form!: FormGroup;
  formSchema: any[] = [];

  constructor(private fb: FormBuilder, private formService: FormService) {}

  ngOnInit(): void {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Mock API for testing
    this.formService.getFormSchema(apiUrl).subscribe(
      schema => {
        this.formSchema = schema;
        this.createForm();
      },
      error => {
        console.error('API error:', error);
        // Handle the error accordingly
      }
    );
  }

  createForm() {
    const formGroup: { [key: string]: any } = {};
    this.formSchema.forEach(field => {
      formGroup[field.name] = [field.value || '', Validators.required];
    });
    this.form = this.fb.group(formGroup);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
