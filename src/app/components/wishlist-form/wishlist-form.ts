import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-wishlist-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './wishlist-form.html',
  styleUrl: './wishlist-form.css'
})
export class WishlistFormComponent {

  @Output() itemCreated = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        this.minLengthCustom(3)
      ]],
      description: ['', Validators.required]
    });
  }

  minLengthCustom(min: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;

      return control.value.length < min
        ? { minLengthCustom: { requiredLength: min } }
        : null;
    };
  }

  submit() {
    if (this.form.valid) {
      this.itemCreated.emit(this.form.value);
      this.form.reset();
    }
  }

}