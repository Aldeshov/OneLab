import {Component, OnInit} from '@angular/core';
import {Task} from "../models";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public zoom: number = 50;
  public taskList: Task[] = [
    {
      name: "Task1",
      done: true,
      date: new Date(2022, 4, 20, 12, 12, 30, 500)
    },
    {
      name: "Task2",
      done: false,
      date: new Date(2022, 4, 28, 12, 12, 30, 500)
    },
    {
      name: "Task3",
      done: true,
      date: new Date(2022, 2, 18, 12, 12, 30, 500)
    },
    {
      name: "Task4",
      done: false,
      date: new Date(2022, 4, 20, 12, 12, 30, 500)
    },
    {
      name: "Task5",
      done: false,
      date: new Date(2022, 4, 16, 12, 12, 30, 500)
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
