import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private renderer: Renderer2;
  private addMusicSubject = new Subject<any>();
  private changeMusicSubject = new Subject<any>();
  audioEl: any;
  playList:any = [];
  constructor( private rendererFactory: RendererFactory2 ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  audioInit(audio): any {
    this.audioEl = this.renderer.createElement("AUDIO");
    let source = this.renderer.createElement("SOURCE");
    this.renderer.setAttribute(source, 'src', '');
    this.renderer.setAttribute(source, 'type', 'audio/mpeg');
    this.renderer.appendChild(this.audioEl, source);
    return this.audioEl   //currentTime 当前播放位置 duration总时长 volume音量     
  }
  //发送添加歌曲的消息
  addToPlay(music: any):void {
      this.addMusicSubject.next({
        music
      });
  }
  //接收添加歌曲这一消息
  getToPlay(): Observable<any> {
    return this.addMusicSubject.asObservable();
  }
  
  //发送下一首/上一首的消息
  changeIndex(code: any): void{
    this.changeMusicSubject.next({
      code
    });
  }

  //接收下一首/上一首的消息
  getChangeIndex(): Observable<any> {
    return this.changeMusicSubject.asObservable();
  }
}
