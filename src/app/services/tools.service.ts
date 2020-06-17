import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  private setTimeoutId: any;
  private start: any;
  private remaining: any;
  private callback: any;
  constructor() { }
  pauseTime(): void {
    clearTimeout(this.setTimeoutId);
    this.setTimeoutId = null;
    const timestamp = new Date().valueOf() - this.start;
    this.remaining -= timestamp;
  }
  playTime(callback: any, remaining: any, keepOn?: boolean): void {
    if(!keepOn){
      this.remaining = remaining;
      this.callback = callback;
    }else {
      console.log(callback, remaining);
    }
    this.start = new Date().valueOf();
    this.setTimeoutId= setTimeout(this.callback, this.remaining);
  }
  
}
