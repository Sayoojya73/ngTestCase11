import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngtestCase11';
  form = { 
          username: '', 
          email: '', 
          address:'',
          dob:'',
          phone:'',
          password: '' };
  onSubmit(): void {
      console.log(this.form);
  }
  onReset(form: NgForm): void {
      form.reset();
  }
}
