import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-about',
  imports: [FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  name: string = '';
  email: string = '';
  message: string = '';

  showToast = signal(false);

  onSubmit() {
    console.log(this.name, this.email, this.message);

    // alert('Message sent!');

    // reset form
    this.name = '';
    this.email = '';
    this.message = '';

    this.showToast.set(true);

    setTimeout(() => {
      this.showToast.set(false);
    }, 3000);
  }
}
