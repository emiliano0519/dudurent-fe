import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.scss']
})
export class RentFormComponent {
  rentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rentForm = this.fb.group({
      pickupCity: ['', Validators.required],
      pickupDate: ['', Validators.required],
      pickupTime: ['', Validators.required],
      dropoffCity: ['', Validators.required],
      dropoffDate: ['', Validators.required],
      dropoffTime: ['', Validators.required],
      driverAge: ['', [Validators.required, Validators.min(18)]]
    });
  }

  onSubmit() {
    if (this.rentForm.valid) {
      console.log(this.rentForm.value);
      // Here you can handle the form submission, for example, send it to an API
    }
  }
}
