import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  prerendered = '';
  prerendered2 = '';

  constructor(private http: HttpClient) {
    this.http
      .get('/assets/Folder%20space/test.txt', { responseType: 'text' })
      .subscribe((data: any) => (this.prerendered = data));
    this.http
      .get('/assets/FolderNospace/test.txt', { responseType: 'text' })
      .subscribe((data: any) => (this.prerendered2 = data));
  }
}
