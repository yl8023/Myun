import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MvViewService {
  viewStatus: boolean = false;
  private sendStatus = new Subject <any>();
  constructor() { }
  closeView(): void {
    this.viewStatus = false;
    this.obNext({status: this.viewStatus});
  }
  openView(): void{
    this.viewStatus = true;
    this.obNext({status: this.viewStatus});
  }
  obNext(value: any): void{
    this.sendStatus.next({status: value});
  }
  resoldStu(): Observable<any> {
    return this.sendStatus.asObservable();
  }
}
