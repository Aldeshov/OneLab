import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() {
  }

  getData(): any {
    return localStorage.getItem("Contacts");
  }

  addData(data: any) {
    localStorage.setItem("Contacts", JSON.stringify(data));
  }

  removeData() {
    localStorage.removeItem("Contacts");
  }
}
