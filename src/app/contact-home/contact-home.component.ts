
import { Component } from '@angular/core';

export interface Contact {
  id: number,
  name: string;
  surname1: string;
  surname2: string;
  phone: string;
  email: string;
}

const ELEMENT_DATA: Contact[] = [
  {id: 1, name: 'Diego', surname1: 'Rodríguez', surname2: 'Barros', phone: '658729931', email: 'diego.rodriguez@gmail.com'},
  {id: 2, name: 'Pablo', surname1: 'Méndez', surname2: 'García', phone: '619773596', email: 'pablo.mendez@gmail.com'},
  {id: 3, name: 'María', surname1: 'Penedo', surname2: 'Castillo', phone: '691275622', email: 'maria.penedo@gmail.com'},
  {id: 4, name: 'Carla', surname1: 'Lopez', surname2: 'Castro', phone: '617852200', email: 'carla.lopez@gmail.com'},
  {id: 5, name: 'Diego', surname1: 'Rodríguez', surname2: 'Barros', phone: '658729931', email: 'diego.rodriguez@gmail.com'},
  {id: 6, name: 'Pablo', surname1: 'Méndez', surname2: 'García', phone: '619773596', email: 'pablo.mendez@gmail.com'},
  {id: 7, name: 'María', surname1: 'Penedo', surname2: 'Castillo', phone: '691275622', email: 'maria.penedo@gmail.com'},
  {id: 8, name: 'Carla', surname1: 'Lopez', surname2: 'Castro', phone: '617852200', email: 'carla.lopez@gmail.com'},
  {id: 9, name: 'Diego', surname1: 'Rodríguez', surname2: 'Barros', phone: '658729931', email: 'diego.rodriguez@gmail.com'},
  {id: 10, name: 'Pablo', surname1: 'Méndez', surname2: 'García', phone: '619773596', email: 'pablo.mendez@gmail.com'},
];

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css'],
})

export class ContactHomeComponent {
  displayedColumns: string[] = ['id', 'name', 'surname1', 'surname2', 'phone', 'email'];
  contacts = ELEMENT_DATA;
}