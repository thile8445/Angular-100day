import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../models/user';
@Pipe({
  name: 'isAdult',
  pure: false
})
export class IsAdultPipe implements PipeTransform {

  transform(value: User[]): User[] {
    return value.filter(u =>u.age >=18);
  }

}
