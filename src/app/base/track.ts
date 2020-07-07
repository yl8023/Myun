//播放模式
export const playingModel = {
    0: '顺序播放',
    1: '列表循环',
    2: '单曲循环',
    3: '随机播放'
}

//评论类型
export const commentType = [
    { code: 0, type: '歌曲' },
    { code: 1, type: '歌单' },
    { code: 2, type: '专辑' },
    { code: 3, type: 'mv' },
    { code: 4, type: '电台' },
    { code: 5, type: '视频' }
]

//歌手分类
export const singerType = {
    areas: [
        { c: -1, t: '全部', s: true },
        { c: 7, t: '华语', s: false },
        { c: 96, t: '欧美', s: false },
        { c: 8, t: '日本', s: false },
        { c: 16, t: '韩国', s: false },
        { c: 0, t: '其他', s: false },
    ],
    types: [
        { c: -1, t: '全部', s: true },
        { c: 1, t: '男歌手', s: false },
        { c: 2, t: '女歌手', s: false },
        { c: 3, t: '乐队', s: false },
    ],
    initials: [
        { c: '热门', t: -1, s: true },
        { c: 'a', s: false },
        { c: 'b', s: false },
        { c: 'c', s: false },
        { c: 'd', s: false },
        { c: 'e', s: false },
        { c: 'f', s: false },
        { c: 'g', s: false },
        { c: 'h', s: false },
        { c: 'i', s: false },
        { c: 'j', s: false },
        { c: 'k', s: false },
        { c: 'l', s: false },
        { c: 'm', s: false },
        { c: 'n', s: false },
        { c: 'o', s: false },
        { c: 'p', s: false },
        { c: 'q', s: false },
        { c: 'r', s: false },
        { c: 's', s: false },
        { c: 't', s: false },
        { c: 'u', s: false },
        { c: 'v', s: false },
        { c: 'w', s: false },
        { c: 'x', s: false },
        { c: 'y', s: false },
        { c: 'z', s: false },
        { c: '#', t: 0, s: false }
    ]
}