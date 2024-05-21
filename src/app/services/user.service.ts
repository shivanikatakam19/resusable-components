import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList = new BehaviorSubject([
    { id: 1, firstName: 'Test', lastName: 'User 1', age: 24, address: 'Mahaboobnagar' },
    { id: 2, firstName: 'Test', lastName: 'User 2', age: 32, address: 'Mumbai' },
    { id: 3, firstName: 'Test', lastName: 'User 3', age: 44, address: 'Delhi' },
    { id: 4, firstName: 'Test', lastName: 'User 4', age: 67, address: 'Hyderabad' },
    { id: 5, firstName: 'Test', lastName: 'User 5', age: 18, address: 'Chennai' },
    { id: 6, firstName: 'Test', lastName: 'User 6', age: 16, address: 'Warangal' },
    { id: 7, firstName: 'Test', lastName: 'User 7', age: 3, address: 'Nagarkurnool' },
    { id: 8, firstName: 'Test', lastName: 'User 8', age: 45, address: 'Kurnool' },
    { id: 9, firstName: 'Test', lastName: 'User 9', age: 54, address: 'Banglore' },
  ])
  constructor() { }
}
