import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  avatar = "https://avatars.githubusercontent.com/u/47108137?s=400&u=a6b5b64fff3e7b762d0dea1445a9cc3a2983900b&v=4"
  name = "Azat";
  age = "21";
  constructor() { }

  ngOnInit(): void {
  }

}
