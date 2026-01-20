import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.contactForm.invalid) {
      alert("Please fill all fields!");
      return;
    }

    const data = this.contactForm.value;

    localStorage.setItem("contactData", JSON.stringify(data));

    this.http.post("http://localhost:3000/contactRequests", data)
      .subscribe({
        next: () => {
          alert("Form submitted successfully!");
          this.contactForm.reset();
        },
        error: () => {
          alert("Error saving to db.json");
        }
      });
  }
}
