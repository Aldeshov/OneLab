import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  search = ""
  list = [
    'Home work1', 'Something', 'One', '?//?', 'Two', 'TwOne'
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  check(value: string) {
    return value.startsWith(this.search);
  }
}
