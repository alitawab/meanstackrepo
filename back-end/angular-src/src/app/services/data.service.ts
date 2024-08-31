import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cartCount = new BehaviorSubject(0);
  currentCount = this.cartCount.asObservable();

  constructor() { }

  changeCount(count) {
    this.cartCount.next(count);
  }
}
