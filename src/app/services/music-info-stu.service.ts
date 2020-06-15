import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicInfoStuService {
  private infoStatus = new Subject <any>();
  infoShow: boolean = false; 
  constructor() { }
  set infoIsShow(val: boolean){
    this.infoShow = val;
    this.setStatusTo();
  }
  get infoIsShow(): boolean {
    return this.infoShow;
  }
  setStatusTo(): void{
    this.infoStatus.next({
      isShow: this.infoIsShow
    });
  }
  getStatus(): Observable<any>{
    return this.infoStatus.asObservable();
  }
}
