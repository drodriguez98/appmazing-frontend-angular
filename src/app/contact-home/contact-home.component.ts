
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({

  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css'],

})

export class ContactHomeComponent implements OnInit {

  contacts: any = [];

  constructor( private contactsService: ContactsService ) {};

  ngOnInit(): void { throw new Error('Method not implemented'); }

  displayedColumns: string[] = ['id', 'name', 'surname1', 'surname2', 'phone', 'email'];
  
}