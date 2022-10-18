import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formscomponent',
  templateUrl: './formscomponent.component.html',
  styleUrls: ['./formscomponent.component.css']
})
export class FormscomponentComponent implements OnInit {
  signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.signupForm = this.formBuilder.group({
      address: [''],
      city:[''],
      country:['']
})
  }


signUp() {
  console.log(this.signupForm.value)

}
}
