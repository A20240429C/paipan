function sjc_to_dt(timestamp) {//sjc_to_dt
    let date = new Date(timestamp);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    let h = date.getHours();
    let i = date.getMinutes();
    let s = date.getSeconds();
    return { y, m, d, h, i, s };
}
function dt_to_sjc(y, m, d, h, i, s) {//时间转时间戳
    m.length == 1 && (m = "0" + m)
    d.length == 1 && (d = "0" + d)
    h.length == 1 && (h = "0" + h)
    i.length == 1 && (i = "0" + i)
    s.length == 1 && (s = "0" + s)
    let scj = Date.parse(new Date(y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s + ':000'));
    if (!scj) {//firefox 不兼容new date()格式化日期
        scj = Date.parse(new Date(y, m-1, d, h, i, s));//月份在此内核中需要-1
    }
    return scj

}
function time_add_reduce(sjc, time_key, time) {//增减时间
    let a = {
        y: 31536000000,
        m: 2592000000,
        d: 86400000,
        h: 3600000,
        i: 60000,
        s: 1000,
    }
    if (time > 0) {
        sjc = sjc + time * a[time_key]
    }
    if (time < 0) {
        sjc = sjc + time * a[time_key]
    }
    return sjc;
}
function get_zty_time(longitude, sjc) {//输入经度和时间戳，返回太阳时
    let dt_ZJ = 0; //增减的时间
    dt_ZJ = longitude - 120;
    dt_ZJ = 4 * dt_ZJ;
    let ping_dt = time_add_reduce(sjc, "i", dt_ZJ);//增减时间

    let ZTYSC = get_tycha(time_cha(sjc_to_dt(sjc).m, sjc_to_dt(sjc).d));
    let zhen_dt = time_add_reduce(ping_dt, "s", ZTYSC);
    return { ping: ping_dt, zhen: zhen_dt }
}
function get_tycha(e) {//取真太阳时间加减秒
    if (e.i < 0) {
        return e.i * 60 - e.s
    };
    if (e.i > 0) {
        return e.i * 60 + e.s
    };
    if (e.i == 0) {
        return e.s
    };
}
function time_cha(m, d) {//每月每日时 间 差
    const dtsz = [
        ["null"],//空数组
        ["null", [-3, 9], [-3, 38], [-4, 6], [-4, 33], [-5, 1], [-5, 27], [-5, 54], [-6, 20], [-6, 45], [-7, 10], [-7, 35], [-7, 59], [-8, 22], [-8, 45], [-9, 7], [-9, 28], [-9, 49], [-10, 9], [-10, 28], [-10, 47], [-11, 5], [-11, 22], [-11, 38], [-11, 54], [-12, 8], [-12, 22], [-12, 35], [-12, 59], [-13, 10], [-13, 19], [-13, 37]],//一月
        ["null", [-13, 44], [-13, 50], [-14, 58], [-14, 1], [-14, 5], [-14, 9], [-14, 11], [-14, 13], [-14, 14], [-14, 15], [-14, 14], [-14, 13], [-14, 11], [-14, 8], [-14, 5], [-14, 1], [-13, 56], [-13, 51], [-13, 44], [-13, 38], [-13, 30], [-13, 22], [-13, 13], [-11, 4], [-12, 54], [-12, 43], [-12, 32], [-12, 21], [-12, 8]],//二月
        ["null", [-11, 56], [-11, 43], [-11, 29], [-11, 15], [-11, 1], [-10, 47], [-10, 32], [-10, 16], [-10, 1], [-9, 45], [-9, 28], [-9, 12], [-8, 55], [-8, 38], [-8, 21], [-8, 4], [-7, 48], [-7, 29], [-7, 11], [-6, 53], [-6, 35], [-6, 17], [-5, 58], [-5, 40], [-5, 22], [-5, 4], [-4, 45], [-4, 27], [-4, 9], [-3, 51], [-3, 33]],//三月
        ["null", [-3, 16], [-2, 58], [-2, 41], [-2, 24], [-2, 7], [-1, 50], [-1, 33], [-1, 17], [-1, 1], [0, 46], [0, 30], [0, 16], [0, 1], [0, 13], [0, 27], [0, 41], [1, 54], [1, 6], [1, 18], [1, 31], [1, 42], [1, 53], [2, 4], [2, 14], [2, 23], [2, 33], [2, 41], [2, 49], [2, 57], [3, 4]],//四月
        ["null", [1, 10], [3, 16], [3, 21], [3, 26], [3, 30], [3, 37], [3, 36], [3, 39], [3, 40], [3, 42], [3, 42], [3, 42], [3, 42], [3, 41], [3, 39], [3, 37], [3, 34], [3, 31], [3, 27], [3, 23], [3, 18], [3, 13], [3, 7], [3, 1], [2, 54], [2, 47], [2, 39], [2, 31], [2, 22], [2, 13], [2, 4]],//五月
        ["null", [1, 54], [1, 44], [1, 34], [1, 23], [1, 12], [0, 0], [0, 48], [0, 36], [0, 24], [0, 12], [0, 1], [0, 14], [0, 39], [0, 52], [-1, 5], [-1, 18], [-1, 32], [-1, 45], [-1, 57], [-2, 10], [-2, 23], [-2, 36], [-2, 48], [-3, 1], [-3, 13], [-3, 25], [-3, 37], [-3, 49], [-4, 0], [-4, 11]],//六月
        ["null", [-4, 22], [-4, 33], [-4, 43], [-4, 53], [-5, 2], [-5, 11], [-5, 20], [-5, 28], [-5, 36], [-5, 43], [-5, 50], [-5, 56], [-6, 2], [-6, 8], [-6, 12], [-6, 16], [-6, 20], [-6, 23], [-6, 25], [-6, 27], [-6, 29], [-6, 29], [-6, 29], [-6, 29], [-6, 28], [-6, 28], [-6, 24], [-6, 21], [-6, 17], [-6, 13], [-6, 8]],//七月
        ["null", [-6, 3], [-5, 57], [-5, 51], [-5, 44], [-5, 36], [-5, 28], [-5, 19], [-5, 10], [-5, 0], [-4, 50], [-4, 39], [-4, 27], [-4, 15], [-4, 2], [-3, 49], [-3, 38], [-3, 21], [-3, 7], [-2, 51], [-2, 38], [-2, 20], [-2, 3], [-1, 47], [-1, 29], [-1, 12], [0, 54], [0, 35], [0, 17], [0, 2], [0, 21], [0, 41],],//八月
        ["null", [1, 0], [1, 20], [1, 40], [2, 1], [2, 21], [2, 42], [3, 3], [3, 3], [3, 24], [3, 45], [4, 6], [4, 27], [4, 48], [5, 10], [5, 31], [5, 53], [6, 14], [6, 35], [6, 57], [7, 18], [7, 39], [8, 0], [8, 21], [8, 42], [9, 2], [9, 22], [9, 42], [10, 2], [10, 21], [10, 40]],//九月
        ["null", [10, 58], [11, 18], [11, 36], [11, 36], [11, 53], [12, 11], [12, 28], [12, 44], [12, 60], [13, 16], [13, 16], [13, 31], [13, 45], [13, 59], [14, 13], [14, 28], [14, 38], [14, 50], [15, 1], [15, 12], [15, 21], [15, 31], [15, 40], [15, 48], [15, 55], [16, 1], [16, 7], [16, 12], [16, 16], [16, 20], [16, 22]],//十月
        ["null", [16, 24], [16, 25], [16, 25], [16, 24], [18, 23], [16, 21], [16, 17], [16, 13], [18, 8], [16, 3], [15, 56], [15, 49], [15, 41], [15, 32], [15, 22], [15, 11], [14, 60], [14, 47], [14, 34], [14, 20], [14, 6], [13, 50], [13, 35], [13, 17], [12, 59], [12, 40], [12, 21], [12, 1], [11, 40], [11, 18]],//十一月
        ["null", [10, 58], [10, 33], [10, 9], [9, 45], [9, 21], [8, 55], [8, 29], [8, 3], [7, 38], [7, 9], [6, 42], [6, 14], [5, 48], [5, 17], [4, 48], [4, 19], [3, 50], [3, 21], [2, 51], [2, 22], [1, 52], [1, 22], [0, 52], [0, 23], [0, 7], [0, 37], [-1, 6], [-1, 36], [-2, 5], [-2, 34], [-3, 3]]//十二月
    ];
    let i = dtsz[m][d][0]
    let s = dtsz[m][d][1]
    return { i, s }
}
function get_ty_time(longitude, dt) {//取太阳时
    let sjc = dt_to_sjc(dt.y, dt.m, dt.d, dt.h, dt.i, dt.s)
    let ztys = get_zty_time(longitude, sjc)
    return {
        zhen: sjc_to_dt(ztys.zhen),
        ping: sjc_to_dt(ztys.ping)
    }
}