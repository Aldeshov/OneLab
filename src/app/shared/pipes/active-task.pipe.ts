import {Pipe, PipeTransform} from '@angular/core';
import {Task} from "../../models";

@Pipe({
  name: 'activeTask'
})
export class ActiveTaskPipe implements PipeTransform {

  transform(value: Task, ...args: unknown[]): any {
    console.log(value)
    return (!value.done && value.date.getTime() > Date.now()) ? value.name : null;
  }

}
