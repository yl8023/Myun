import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../shared/http/http.service';
import { pathUrl } from '../../shared/http/path';
import { SongModel, ColumnItem} from '../../base/common';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.less']
})
export class SongListComponent implements OnInit {
  @Input() trackIds: Array<any>;
  songList: Array<SongModel>;
  isLoading: boolean = true;
  constructor(
    private http: HttpService, 
    private audioSer: AudioService,
    ) { }

  ngOnInit(): void {
    this.getSongList();
  }
  //添加歌曲到播放列表
  addMusic(music: SongModel){
    console.log('歌单内添加歌曲');
    console.log(music);
    this.audioSer.addToPlay(music);
  }
  //获取歌单内歌曲详情
  getSongList(): void {
    const idList = this.trackIds.map( val => {
      const value = val.id;
      return value;
    });
    const ids = idList.join(',');
    this.http.get(pathUrl['songDetail'],{ids}).subscribe(res => {
      if (res.code == 200) {
        this.songList = res.songs;
      }
      this.isLoading = false;
    });
  }
  //添加整个歌单到播放列表
  addAlltoPlay(): void{
    this.audioSer.addToPlay(this.songList);
  }
  ths: ColumnItem[] = [
    {
      name:'',
      width:'50px',
    },
    {
      name:'操作',
      width:'60px',
    },
    {
      name:'音乐标题',
      width:'260px',
    },
    {
      name:'歌手',
      width:'180px',
    },
    {
      name:'专辑',
      width:'180px',
    },
    {
      name:'时长',
      width:'80px',
    }
  ]
}