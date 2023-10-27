import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Dimitris";
  lastname: string = "Dananas";

  person: Person = {
    givenName: "Dimitris",
    surName: "Dananas",
    age: 25,
    email: "dimitrisdananas@aueb.gr",
    address: "Athens, Greece"
  };
}
