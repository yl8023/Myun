import { environment } from '../../../environments/environment';

export const pathUrl = {
    'banner': environment.url + '/banner',
    'personalized': environment.url + '/personalized',             //推荐歌单
    'personalizedDjprogram': environment.url + '/personalized/djprogram',    //推荐电台
    'personalizedMv': environment.url + '/personalized/mv',             //推荐mv
    'personalizedNewsong': environment.url + '/personalized/newsong',       //推荐新音乐
    'programRecommend': environment.url + '/program/recommend',         //推荐节目
    'personalizedPrivatecontent': environment.url + '/personalized/privatecontent',   //独家放送
    'songDetail': environment.url + '/song/detail',
    'commentPlaylist': environment.url + '/comment/playlist',
    'songUrl': environment.url + '/song/url',
    'lyric': environment.url + '/lyric',
    'commentMusic': environment.url + '/comment/music',
    'playlistCatlist': environment.url + '/playlist/catlist',
    'playlistHotCat': environment.url + '/playlist/hot',
    'topPlaylist': environment.url + '/top/playlist',
    'topPlaylistHighquality': environment.url + '/top/playlist/highquality',
    'playlistDetail': environment.url + '/playlist/detail',
    'topList': environment.url + '/top/list',              //排行榜
    'top-list': environment.url + '/toplist',              //所有榜单
    'toplistDetail': environment.url + '/toplist/detail',   //所有榜单内容摘要
    'toplistArtist': environment.url + '/toplist/artist',  //歌手榜
    'artistList': environment.url + '/artist/list',  //歌手分类列表
    'djBanner': environment.url + '/dj/banner',    //电台banner
    'djCatelist': environment.url + '/dj/catelist',    //电台分类
}