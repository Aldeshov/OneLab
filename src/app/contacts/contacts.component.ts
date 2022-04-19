import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactsService} from "../shared/services/contacts.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  // green = "toGreen"

  contactsForm: FormGroup;

  first_name = '';
  last_name = '';
  email = '';
  phone_number = '';

  constructor(private contactsService: ContactsService) {
    this.contactsForm = new FormGroup({
      first_name: new FormControl(this.first_name || '', [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl(this.last_name || ''),
      email: new FormControl(this.email || '', [Validators.required]),
      phone_number: new FormControl(this.phone_number || ''),
    });
  }

  ngOnInit(): void {
    console.log(JSON.parse(this.contactsService.getData()))
  }

  submit() {
    this.contactsService.addData(this.contactsForm.value)
    location.reload()
  }

  clear() {
    this.contactsService.removeData()
    location.reload()
  }

  fieldCtrl(formGroup: FormGroup, ctrlName: string): any {
    return <FormGroup>formGroup.get(ctrlName)?.errors;
  }
}
