import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private addMusicSubject = new Subject<any>();
  private changeMusicSubject = new Subject<any>();
  private audioDuration = new Subject<any>();
  private operations = new Subject<any>();
  audioEl: any;
  playList:any = [];
  constructor() {
  }
  
  //发送添加歌曲的消息
  addToPlay(music: any):void {
      this.addMusicSubject.next({
        music
      });
  }
  getToPlay(): Observable<any> {
    return this.addMusicSubject.asObservable();
  }
  
  //发送下一首/上一首的消息
  changeIndex(code: any): void{
    this.changeMusicSubject.next({
      code
    });
  }
  getChangeIndex(): Observable<any> {
    return this.changeMusicSubject.asObservable();
  }

  //发送当前music播放时间
  sendToAudioDuration (time: any): void {
    this.audioDuration.next({
      time
    })
  }
  sendAudioDuration(): Observable<any> {
    return this.audioDuration.asObservable();
  }

  sendOpTolyric(op: any): void {
    this.operations.next({
      op
    })
  }

  sendOplyric(): Observable<any>{
    return this.operations.asObservable();
  }
}
