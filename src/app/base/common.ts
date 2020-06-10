import { NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
//歌单详情
export declare interface SongsModel {
    name: string; //歌单名称
    coverImgUrl: string; //歌单图片
    description: string; //简介
    tags: Array<string>; //标签
    playCount: number; //播放次数
    createTime: number; //创建时间戳
    subscribedCount:number; //收藏数
    shareCount: number; //分享数
    commentCount: number; //评论数
    trackIds: Array<TrackId>; //歌曲id列表
    creator: Creator; //创建者信息

}

declare interface Creator {
    userId: number;
    nickname: string;
    avatarUrl: string;
}

declare interface TrackId {
    id: number;
}

//歌曲详情
export declare interface SongModel {
    al: Album;
    ar:Array<Artists>;
    dt: number;
    id: number;
    mv: number;
    name: string;
    fee: number;
    alia:Array<string>;
    tns: Array<string>
}

declare interface Album {
    id: number;
    name: string;
    pic: number;
    picUrl: string;
    pic_str: string;
    tns: Array<any>
}
declare interface Artists {
    alias: Array<any>;
    id: number;
    name: string;
    tns: Array<any>
}

//歌曲url
export declare interface SongUrlModel{
    
}

//表格头设置
export declare interface ColumnItem {
    name: string;
    width: string;
    sortOrder?: NzTableSortOrder;
    sortFn?: NzTableSortFn;
  }