import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSubmitted = false
  @ViewChild("registerForm")
  registerForm: NgForm;

  onSubmit() {
    this.isSubmitted = true
    this.registerForm.reset()
  }
}
