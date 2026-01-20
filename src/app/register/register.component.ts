import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      fatherName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],

      gender: ['', Validators.required],

      degreeType: ['', Validators.required],   
      degreeName: ['', Validators.required],   
      tenth: ['', Validators.required],
      twelfth: ['', Validators.required],

      cgpa: ['', Validators.required],
      collegeName: ['', Validators.required],

      passedOut: ['', Validators.required],
      native: ['', Validators.required]

    });
  }

  onSubmit() {
    if (!this.registerForm.valid) {
      alert("Please fill all fields correctly!");
      return;
    }

    alert("Registered Successfully!");

    this.http.post('http://localhost:3001/users', this.registerForm.value)
      .subscribe(() => {
        this.router.navigate(['/testlink']);
      });
  }
}
