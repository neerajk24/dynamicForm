import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormService } from '../form.service';
import { FormField } from './form-field.interface'; // Importing the FormField interface

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
  formSchema: FormField[] = [];

  constructor(private fb: FormBuilder, private formService: FormService) {}

  ngOnInit(): void {
    // Replace with your API endpoint
    const apiUrl = 'https://example.com/api/form-schema';
    
    this.formService.getFormSchema(apiUrl).subscribe((schema: FormField[]) => {
      this.formSchema = schema;
      this.createForm();
    });
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
