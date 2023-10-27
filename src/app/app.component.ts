import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Dimitris";
  lastname: string = "Dananas"

  person = {
    givenName: "Dimitris",
    surName: "Dananas",
    age: 25,
    email: "dimitrisdananas@aueb.gr"
  };
}
