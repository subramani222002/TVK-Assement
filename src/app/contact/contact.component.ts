import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const elements = document.querySelectorAll('.fade-in, .jump-in, .scale-in, .rotate-in');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); 
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }

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
          alert("Message sent successfully!");
          this.contactForm.reset();
        },
        error: () => {
          alert("Error saving to backend");
        }
      });
  }
}
