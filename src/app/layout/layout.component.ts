import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  
  constructor(private router: Router, private route: ActivatedRoute) {
    this.setMenu();
  }
  Menu = [];
  inputValue = '';
  

  ngOnInit(): void {
    this.checkMenuSelect();
  }

  onEnded(e) {

  }

  menuClick(ev): void {
    
  }
  
  onChange(e) {

  }

  goRouter(routerUrl: string): void {
    this.router.navigate([routerUrl], { relativeTo: this.route })
  }

  checkMenuSelect(): void {
    const path = this.router.url;
    this.Menu.forEach((index) => {
      for(const item of index.children){
        if (item.link == path)
        {
          item.select = true;
        }
      }
    })
  }
  setMenu() {
    this.Menu = [{
      title: '推荐',
      children:[
        {
          icon: 'fire',
          link: '/lay/find',
          select: false,
          linkClass: 'item-active',
          text: '发现音乐'
        },
        {
          icon: 'paper-clip',
          link: '/lay/private-fm',
          select: false,
          linkClass: 'item-active',
          text: '私人FM'
        },
        {
          icon: 'eye',
          link: '/lay/look-live',
          select: false,
          linkClass: 'item-active',
          text: 'LOOK直播'
        },
        {
          icon: 'video-camera',
          link: '/lay/video',
          select: false,
          linkClass: 'item-active',
          text: '视频'
        },
        {
          icon: 'team',
          link: '/lay/friends',
          select: false,
          linkClass: 'item-active',
          text: '朋友'
        }
      ],
    },
    {
      title: '我的音乐',
      children:[
        {
          icon: 'folder-open',
          link: '/lay/local-music',
          select: false,
          linkClass: 'item-active',
          text: '本地音乐'
        },
        {
          icon: 'download',
          link: '/lay/download-music',
          select: false,
          linkClass: 'item-active',
          text: '下载管理'
        },
        {
          icon: 'cloud',
          link: '/lay/cloud-music',
          select: false,
          linkClass: 'item-active',
          text: '音乐云盘'
        },
        {
          icon: 'star',
          link: '/lay/my-collection',
          select: false,
          linkClass: 'item-active',
          text: '我的收藏'
        },
      ]
      
    },
    {
      title: '创建的歌单',
      children: [
        {
          icon: 'heart',
          link: '',
          select: false,
          linkClass: 'item-active',
          text: '我喜欢的音乐'
        }
      ]
    },
    {
      title: '收藏的歌单',
      children: [
        {
          icon: 'star',
          link: '',
          select: false,
          linkClass: 'item-active',
          text: '我喜欢的音乐'
        }
      ]
    }
    ];
  }
}
