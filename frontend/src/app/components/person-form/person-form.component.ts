import { Component } from '@angular/core';
import { PersonService, Person } from '../../services/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
})
export class PersonFormComponent {
  person: Person = { name: '', surname: '', email: '', phone: '' };

  constructor(private personService: PersonService) {}

  submitForm() {
    this.personService.addPerson(this.person).subscribe(() => {
      alert('Person hinzugefügt!');
    });
  }
}