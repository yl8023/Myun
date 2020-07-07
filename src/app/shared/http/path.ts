import { environment } from '../../../environments/environment';

export const pathUrl = {
    'userDetail': environment.url + '/user/detail',                          //用户详情（他人）
    'userPlaylist': environment.url + '/user/playlist',                      //获取用户歌单（他人）
    'userDj': environment.url + '/user/dj',                                  //获取用户电台（他人）
    'userFollows': environment.url + '/user/follows',                        //获取用户关注列表（他人）
    'userFolloweds': environment.url + '/user/followeds',                    //获取用户粉丝列表（他人）
    'userEvent': environment.url + '/user/event',                            //获取用户动态（他人）
    'userRecord': environment.url + '/user/record',                          //获取用户的播放记录
    'banner': environment.url + '/banner',                                   //轮播图
    'personalized': environment.url + '/personalized',                       //推荐歌单
    'personalizedDjprogram': environment.url + '/personalized/djprogram',    //推荐电台
    'personalizedMv': environment.url + '/personalized/mv',                  //推荐mv
    'personalizedNewsong': environment.url + '/personalized/newsong',        //推荐新音乐
    'programRecommend': environment.url + '/program/recommend',              //推荐节目
    'personalizedPrivatecontent': environment.url + '/personalized/privatecontent',   //独家放送
    'songDetail': environment.url + '/song/detail',                         //歌曲详情
    'songUrl': environment.url + '/song/url',                               //歌曲url
    'lyric': environment.url + '/lyric',                                    //歌词
    'playlistCatlist': environment.url + '/playlist/catlist',               //歌单所有类型
    'playlistHotCat': environment.url + '/playlist/hot',                    //歌单热门分类
    'topPlaylist': environment.url + '/top/playlist',                        //歌单列表  网友精选
    'topPlaylistHighquality': environment.url + '/top/playlist/highquality', //精品歌单  还未完成..
    'playlistDetail': environment.url + '/playlist/detail',                  //歌单详情
    'topList': environment.url + '/top/list',                               //排行榜
    'top-list': environment.url + '/toplist',                               //所有榜单
    'toplistDetail': environment.url + '/toplist/detail',                   //所有榜单内容摘要
    'toplistArtist': environment.url + '/toplist/artist',                   //歌手榜
    'artistList': environment.url + '/artist/list',                         //歌手分类列表
    'djBanner': environment.url + '/dj/banner',                             //电台轮播图
    'djCatelist': environment.url + '/dj/catelist',                         //电台分类
    'djRecommend': environment.url + '/dj/recommend',                       //电台推荐
    'djRecommendType': environment.url + '/dj/recommend/type',              //电台分类推荐
    'djToplistPay': environment.url + '/dj/toplist/pay',                   //电台-付费精品
    'djPaygift': environment.url + '/dj/paygift',                          //电台-付费精选
    'topSong': environment.url + '/top/song',                               //新歌速递
    'topAlbum': environment.url + '/top/album' ,                            //新碟上架
    'videoGroupList': environment.url + '/video/group/list',                //视频标签列表
    'videoGroup': environment.url + '/video/group',                         //视频分类下的视频
    
    'mvFirst': environment.url + '/mv/first',                                //最新Mv
    'mvAll': environment.url + '/mv/all',                                   //全部Mv
    'mvExclusiveRcmd': environment.url + '/mv/exclusive/rcmd',              //网易出品MV
    'mvUrl': environment.url + '/mv/url',                                   //mv播放地址
    'mvDetail': environment.url + '/mv/detail',                             //mv详情
    'mvDetailInfo': environment.url + '/mv/detail/info',                    //mv点赞评论转发
    'commentMusic': environment.url + '/comment/music',                     //歌曲评论
    'commentPlaylist': environment.url + '/comment/playlist',               //歌单评论
    'commentAlbum': environment.url + '/comment/album',                     //专辑评论
    'commentMv': environment.url + '/comment/mv',                           //MV评论
    'commentDj': environment.url + '/comment/dj',                           //电台节目评论
    'commentVideo': environment.url + '/comment/video',                     //视频评论
    'commentHot': environment.url + '/comment/hot',                         //热门评论
}