import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

private messageSource = new BehaviorSubject<any>({});
currentMessage = this.messageSource.asObservable();

  constructor() { }
change(message:any){
  this.messageSource.next(message);
}

}
