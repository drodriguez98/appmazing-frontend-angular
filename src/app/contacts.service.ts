import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ContactsService {

  constructor(private http: HttpClient) {}

  getContacts(): Observable<any> {

    const url = 'http://localhost:30030/contacts/getAll';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, {headers})

  }

  getContact(contactId: number): Observable<any> {

    const url = 'http://localhost:30030/contacts/get';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({id: contactId});
    return this.http.post(url, body, {headers});

  }

  newContact(contact : any): void {

    const url = 'http://localhost:30030/contacts/add';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = contact;
    this.http.post(url, body, { headers }).subscribe();

  }

  editContact(contact : any): void {

    const url = 'http://localhost:30030/contacts/update';
    const body = contact;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.put(url, body,{headers}).subscribe();

  }

  deleteContact (contactId: number): void {

    const url = 'http://localhost:30030/contacts/delete';
    const body = { id: contactId };
    const options = {
      body: body,
      headers: new HttpHeaders()
    };
    this.http.delete(url, options).subscribe();
    
  }

}