import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent],
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

  person2: Person = {
    givenName: "Giorgos",
    surName: "Dafnakis",
    age: 25,
    email: "dafeas@aueb.gr",
    address: "Athens, Greece"
  };
}
