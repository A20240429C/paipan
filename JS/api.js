let dbName = 'helloIndexDB'
let db_version = 1
let storeName = 'helloStore'
let indexedDB = window.indexedDB
let db
let db_sch = null//数据库打开检测
const request = indexedDB.open(dbName, db_version)
request.onsuccess = function (event) {
    db = event.target.result // 数据库对象
    db_sch = true
    // console.log('数据库打开成功')
}
request.onerror = function (event) {
    // console.log('数据库打开报错')
}
request.onupgradeneeded = function (event) {
    // 数据库创建或升级的时候会触发
    console.log('数据库创建或升级')
    db = event.target.result // 数据库对象
    let objectStore
    if (!db.objectStoreNames.contains(storeName)) {
        objectStore = db.createObjectStore(storeName, { keyPath: 'id' }) // 创建表
        // objectStore.createIndex('name', 'name', { unique: true }) // 创建索引 可以让你搜索任意字段
    }
}


const indexDB = {
    get: function (key) {//查
        // console.log("indexDB_get=>", key)
        return new Promise(function (resolve) {
            let int0 = setInterval(function () {
                if (db_sch) {//需要数据库打开成功
                    let request = db.transaction([storeName]).objectStore(storeName).get(key)
                    request.onerror = function (event) {
                        resolve(false)
                    }
                    request.onsuccess = function (event) {
                        resolve(request.result ? request.result.data : '')
                    }
                    clearInterval(int0)
                }

            }, 10);
        })
    },
    set: function (id, value) {//改,没有则自动创建
        return new Promise(function (resolve) {
            let int0 = setInterval(function () {
                if (db_sch) {//需要数据库打开成功
                    let data = {}
                    data.id = id
                    data.data = value
                    let request = db.transaction([storeName], 'readwrite').objectStore(storeName).put(data)
                    request.onsuccess = function () {
                        resolve(true)
                    }
                    request.onerror = function () {
                        resolve(false)
                    }
                    clearInterval(int0)
                }
            }, 10);
        })
    },
    add: function (id, value) {//增
        return new Promise(function (resolve) {
            let int0 = setInterval(function () {
                if (db_sch) {//需要数据库打开成功
                    let data = {}
                    data.id = id
                    data.data = value
                    let request = db.transaction([storeName], 'readwrite').objectStore(storeName).add(data)
                    request.onsuccess = function (event) {
                        resolve(true);
                    }
                    request.onerror = function (event) {
                        resolve({ zt: false, error: event.target.error });
                    }
                    clearInterval(int0)
                }
            }, 10);
        })
    },
    un: function (id) {//删
        return new Promise(function (resolve) {
            let int0 = setInterval(function () {
                if (db_sch) {//需要数据库打开成功
                    let request = db.transaction([storeName], 'readwrite').objectStore(storeName).delete(id)
                    request.onsuccess = function () {
                        resolve(true)
                    }
                    request.onerror = function () {
                        resolve(false)
                    }
                    clearInterval(int0)
                }
            }, 10);
        })

    }
}



function dq_time(e) {//获取当前时间
    let date = new Date();
    let Y = date.getFullYear();
    let M = date.getMonth() + 1;
    let D = date.getDate();
    let h = date.getHours();
    let i = date.getMinutes();
    let s = date.getSeconds();
    if (e == 0) {
        return {
            y: Y,
            m: M,
            d: D,
            h: h,
            i: i,
            s: s,
        };
    };
    if (e == 1) {
        return Y + "年" + M + "月" + D + "日" + h + "时" + i + "分"
    };
};


function md5(e) {
    return t(e)
}

function d(n, t) {
    var r = (65535 & n) + (65535 & t);
    return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
}

function f(n, t, r, e, o, u) {
    return d(function (n, t) {
        return n << t | n >>> 32 - t
    }(d(d(t, n), d(e, u)), o), r)
}

function l(n, t, r, e, o, u, c) {
    return f(t & r | ~t & e, n, t, o, u, c)
}

function g(n, t, r, e, o, u, c) {
    return f(t & e | r & ~e, n, t, o, u, c)
}

function v(n, t, r, e, o, u, c) {
    return f(t ^ r ^ e, n, t, o, u, c)
}

function m(n, t, r, e, o, u, c) {
    return f(r ^ (t | ~e), n, t, o, u, c)
}

function i(n, t) {
    var r, e, o, u, c;
    n[t >> 5] |= 128 << t % 32, n[14 + (t + 64 >>> 9 << 4)] = t;
    var f = 1732584193,
        i = -271733879,
        a = -1732584194,
        h = 271733878;
    for (r = 0; r < n.length; r += 16) i = m(i = m(i = m(i = m(i = v(i = v(i = v(i = v(i = g(i = g(i = g(i = g(i = l(i = l(i = l(i = l(o = i, a = l(u = a, h = l(c = h, f = l(e = f, i, a, h, n[r], 7, -680876936), i, a, n[r + 1], 12, -389564586), f, i, n[r + 2], 17, 606105819), h, f, n[r + 3], 22, -1044525330), a = l(a, h = l(h, f = l(f, i, a, h, n[r + 4], 7, -176418897), i, a, n[r + 5], 12, 1200080426), f, i, n[r + 6], 17, -1473231341), h, f, n[r + 7], 22, -45705983), a = l(a, h = l(h, f = l(f, i, a, h, n[r + 8], 7, 1770035416), i, a, n[r + 9], 12, -1958414417), f, i, n[r + 10], 17, -42063), h, f, n[r + 11], 22, -1990404162), a = l(a, h = l(h, f = l(f, i, a, h, n[r + 12], 7, 1804603682), i, a, n[r + 13], 12, -40341101), f, i, n[r + 14], 17, -1502002290), h, f, n[r + 15], 22, 1236535329), a = g(a, h = g(h, f = g(f, i, a, h, n[r + 1], 5, -165796510), i, a, n[r + 6], 9, -1069501632), f, i, n[r + 11], 14, 643717713), h, f, n[r], 20, -373897302), a = g(a, h = g(h, f = g(f, i, a, h, n[r + 5], 5, -701558691), i, a, n[r + 10], 9, 38016083), f, i, n[r + 15], 14, -660478335), h, f, n[r + 4], 20, -405537848), a = g(a, h = g(h, f = g(f, i, a, h, n[r + 9], 5, 568446438), i, a, n[r + 14], 9, -1019803690), f, i, n[r + 3], 14, -187363961), h, f, n[r + 8], 20, 1163531501), a = g(a, h = g(h, f = g(f, i, a, h, n[r + 13], 5, -1444681467), i, a, n[r + 2], 9, -51403784), f, i, n[r + 7], 14, 1735328473), h, f, n[r + 12], 20, -1926607734), a = v(a, h = v(h, f = v(f, i, a, h, n[r + 5], 4, -378558), i, a, n[r + 8], 11, -2022574463), f, i, n[r + 11], 16, 1839030562), h, f, n[r + 14], 23, -35309556), a = v(a, h = v(h, f = v(f, i, a, h, n[r + 1], 4, -1530992060), i, a, n[r + 4], 11, 1272893353), f, i, n[r + 7], 16, -155497632), h, f, n[r + 10], 23, -1094730640), a = v(a, h = v(h, f = v(f, i, a, h, n[r + 13], 4, 681279174), i, a, n[r], 11, -358537222), f, i, n[r + 3], 16, -722521979), h, f, n[r + 6], 23, 76029189), a = v(a, h = v(h, f = v(f, i, a, h, n[r + 9], 4, -640364487), i, a, n[r + 12], 11, -421815835), f, i, n[r + 15], 16, 530742520), h, f, n[r + 2], 23, -995338651), a = m(a, h = m(h, f = m(f, i, a, h, n[r], 6, -198630844), i, a, n[r + 7], 10, 1126891415), f, i, n[r + 14], 15, -1416354905), h, f, n[r + 5], 21, -57434055), a = m(a, h = m(h, f = m(f, i, a, h, n[r + 12], 6, 1700485571), i, a, n[r + 3], 10, -1894986606), f, i, n[r + 10], 15, -1051523), h, f, n[r + 1], 21, -2054922799), a = m(a, h = m(h, f = m(f, i, a, h, n[r + 8], 6, 1873313359), i, a, n[r + 15], 10, -30611744), f, i, n[r + 6], 15, -1560198380), h, f, n[r + 13], 21, 1309151649), a = m(a, h = m(h, f = m(f, i, a, h, n[r + 4], 6, -145523070), i, a, n[r + 11], 10, -1120210379), f, i, n[r + 2], 15, 718787259), h, f, n[r + 9], 21, -343485551), f = d(f, e), i = d(i, o), a = d(a, u), h = d(h, c);
    return [f, i, a, h]
}

function a(n) {
    var t, r = "",
        e = 32 * n.length;
    for (t = 0; t < e; t += 8) r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
    return r
}

function h(n) {
    var t, r = [];
    for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
    var e = 8 * n.length;
    for (t = 0; t < e; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
    return r
}

function e(n) {
    var t, r, e = "0123456789abcdef",
        o = "";
    for (r = 0; r < n.length; r += 1) t = n.charCodeAt(r), o += e.charAt(t >>> 4 & 15) + e.charAt(15 & t);
    return o
}

function r(n) {
    return unescape(encodeURIComponent(n))
}

function o(n) {
    return function (n) {
        return a(i(h(n), 8 * n.length))
    }(r(n))
}

function u(n, t) {
    return function (n, t) {
        var r, e, o = h(n),
            u = [],
            c = [];
        for (u[15] = c[15] = void 0, 16 < o.length && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1) u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r];
        return e = i(u.concat(h(t)), 512 + 8 * t.length), a(i(c.concat(e), 640))
    }(r(n), r(t))
}

function t(n, t, r) {
    return t ? r ? u(t, n) : function (n, t) {
        return e(u(n, t))
    }(t, n) : r ? o(n) : function (n) {
        return e(o(n))
    }(n)
}

function doc_id(name) {
    return document.getElementById(name)
}


let xxk_fh0 = null, xxk_fh1 = null, xxk_fh2 = null, jjk_fh2 = null
xxk = {
    jindutiao(ID, min, max, sel) {
        if (!min) {
            xx = '0'
        }
        if (!max) {
            time = '100'
        }
        if (!sel) {
            time = '80'
        }
        let a1 = '<div style="width:50vw;"><div style="width:100%;display: flex;"><div style="margin-right:.5em ;">0%</div> <div id="JDT_FG" style="width:100%;border:1px solid rgb(0, 0, 0) ;display:flex;">'
        let b2 = '</div><div style="margin-left:.5em ;">100%</div></div></div>'
        doc_id(ID).innerHTML = a1 + b2

        let a = document.getElementById('JDT_FG')
        let dg_wid = window.getComputedStyle(a).width.split('px')[0] / max
        let sc_txt = ''
        // let bfb = sel / max * 100

        // document.getElementById('JDT_bfb').innerHTML = parseInt(bfb) + "%"
        for (let i = 0; i < sel; i++) {
            let t = '<div style="background: #1f2b23;height: 100%;width:' + dg_wid + 'px"></div>'
            sc_txt = sc_txt + t
        }




        doc_id('JDT_FG').innerHTML = sc_txt





    },
    loading(xx, xy) {
        let html = `<div">
            <svg style="margin: 2vh 0px;" id="T" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 1000">
                <defs>
                    <style>
                        .cls-1,
                        .cls-4 {
                            fill: none;
                        }
    
                        .cls-1,
                        .cls-2,
                        .cls-4 {
                            stroke: #2a6e77;
                        }
    
                        .cls-1 {
                            stroke-width: 10px;
                        }
    
                        .cls-2,
                        .cls-5 {
                            fill: #2a6e77;
                            fill-rule: evenodd;
                        }
    
                        .cls-2 {
                            stroke-width: 2px;
                        }
    
                        .cls-3,
                        .cls-6 {
                            font-size: 86.02px;
                        }
    
                        .cls-3 {
                            fill: #ff8004;
                        }
    
                        .cls-3,
                        .cls-6,
                        .cls-7 {
                            text-anchor: middle;
                            font-family: KaiTi;
                        }
    
                        .cls-4 {
                            stroke-width: 9px;
                        }
    
                        .cls-6 {
                            fill: #109dff;
                        }
    
                        .cls-7 {
                            font-size: 75px;
                        }
                    </style>
                </defs>
                <g id="tx">
                    <circle class="cls-1" cx="500.5" cy="500.5" r="392.813" />
                    <circle class="cls-1" cx="500.5" cy="500.5" r="284.125" />
                    <path class="cls-2" d="M688.974,162.235l9.052,5.226L644.2,260.7l-9.051-5.226Z" />
                    <path class="cls-2" d="M832.539,301.974l5.226,9.052-93.234,53.828-5.226-9.051Z" />
                    <path class="cls-2" d="M887,494.774v10.452H779.343V494.774H887Z" />
                    <path class="cls-2" d="M837.765,688.974l-5.226,9.052L739.305,644.2l5.226-9.051Z" />
                    <path class="cls-2" d="M698.026,832.539l-9.052,5.226-53.828-93.234,9.051-5.226Z" />
                    <path class="cls-2" d="M505.226,887H494.774V779.343h10.452V887Z" />
                    <path class="cls-2" d="M311.026,837.765l-9.052-5.226L355.8,739.305l9.051,5.226Z" />
                    <path class="cls-2" d="M167.461,698.026l-5.226-9.052,93.234-53.828L260.7,644.2Z" />
                    <path class="cls-2" d="M113,505.226V494.774H220.657v10.452H113Z" />
                    <path class="cls-2" d="M162.235,311.026l5.226-9.052L260.7,355.8l-5.226,9.051Z" />
                    <path class="cls-2" d="M301.974,167.461l9.052-5.226,53.828,93.234L355.8,260.7Z" />
                    <path class="cls-2" d="M494.774,113h10.452V220.657H494.774V113Z" />
                    <animateTransform attributeName="transform" type="rotate" from="0 500 500" to="360 500 500" dur="4s"
                        repeatCount="indefinite" />
                </g>
                <g id="_12zhi" data-name="12zhi">
                    <text class="cls-3" transform="translate(581.966 202.083) rotate(15) scale(0.748)">
                        <tspan x="0">子</tspan>
                    </text>
                    <text class="cls-3" transform="translate(720.023 282.672) rotate(45) scale(0.748)">
                        <tspan x="0">丑</tspan>
                    </text>
                    <text class="cls-3" transform="translate(799.289 421.493) rotate(75) scale(0.748)">
                        <tspan x="0">寅</tspan>
                    </text>
                    <text class="cls-3" transform="translate(798.526 581.348) rotate(105) scale(0.748)">
                        <tspan x="0">卯</tspan>
                    </text>
                    <text class="cls-3" transform="translate(717.937 719.405) rotate(135) scale(0.748)">
                        <tspan x="0">辰</tspan>
                    </text>
                    <text class="cls-3" transform="translate(579.117 798.672) rotate(165) scale(0.748)">
                        <tspan x="0">巳</tspan>
                    </text>
                    <text class="cls-3" transform="translate(419.261 797.908) rotate(-165) scale(0.748)">
                        <tspan x="0">午</tspan>
                    </text>
                    <text class="cls-3" transform="translate(281.204 717.319) rotate(-135) scale(0.748)">
                        <tspan x="0">未</tspan>
                    </text>
                    <text class="cls-3" transform="translate(201.938 578.499) rotate(-105) scale(0.748)">
                        <tspan x="0">申</tspan>
                    </text>
                    <text class="cls-3" transform="translate(202.701 418.643) rotate(-75) scale(0.748)">
                        <tspan x="0">酉</tspan>
                    </text>
                    <text class="cls-3" transform="translate(283.29 280.586) rotate(-45) scale(0.748)">
                        <tspan x="0">戌</tspan>
                    </text>
                    <text class="cls-3" transform="translate(422.111 201.32) rotate(-15) scale(0.748)">
                        <tspan x="0">亥</tspan>
                    </text>
                    <animateTransform attributeName="transform" type="rotate" from="0 500 500" to="360 500 500" dur="4s"
                        repeatCount="indefinite" />
                </g>
                <g id="tx-2" data-name="tx">
                    <circle class="cls-4" cx="500.5" cy="500.5" r="284.125" />
                    <circle class="cls-4" cx="500.5" cy="500.5" r="179.188" />
                    <path class="cls-5" d="M567.381,229.213l9.659,2.588-26.4,98.524-9.66-2.588Z" />
                    <path class="cls-5" d="M693.747,299.182l7.071,7.071-72.125,72.125-7.071-7.071Z" />
                    <path class="cls-5" d="M768.2,422.96l2.588,9.659-98.524,26.4-2.588-9.66Z" />
                    <path class="cls-5" d="M770.787,567.381L768.2,577.04l-98.524-26.4,2.588-9.66Z" />
                    <path class="cls-5" d="M700.818,693.747l-7.071,7.071-72.125-72.125,7.071-7.071Z" />
                    <path class="cls-5" d="M577.04,768.2l-9.659,2.588-26.4-98.524,9.66-2.588Z" />
                    <path class="cls-5" d="M432.619,770.787L422.96,768.2l26.4-98.524,9.66,2.588Z" />
                    <path class="cls-5" d="M306.253,700.818l-7.071-7.071,72.125-72.125,7.071,7.071Z" />
                    <path class="cls-5" d="M231.8,577.04l-2.588-9.659,98.524-26.4,2.588,9.66Z" />
                    <path class="cls-5" d="M229.213,432.619l2.588-9.659,98.524,26.4-2.588,9.66Z" />
                    <path class="cls-5" d="M299.182,306.253l7.071-7.071,72.125,72.125-7.071,7.071Z" />
                    <path class="cls-5" d="M422.96,231.8l9.659-2.588,26.4,98.524-9.66,2.588Z" />
                    <animateTransform attributeName="transform" type="rotate" from="360 500 500" to="0 500 500" dur="5s"
                        repeatCount="indefinite" />
                </g>
                <g id="_12shen" data-name="12shen">
                    <text class="cls-6" transform="translate(602.694 325.165) rotate(30) scale(0.49)">
                        <tspan x="0">天后</tspan>
                    </text>
                    <text class="cls-6" transform="translate(676.399 399.578) rotate(60) scale(0.49)">
                        <tspan x="0">贵人</tspan>
                    </text>
                    <text class="cls-6" transform="matrix(0, 0.49, -0.49, 0, 703.023, 500.874)">
                        <tspan x="0">腾蛇</tspan>
                    </text>
                    <text class="cls-6" transform="translate(675.432 601.911) rotate(120) scale(0.49)">
                        <tspan x="0">朱雀</tspan>
                    </text>
                    <text class="cls-6" transform="translate(601.02 675.617) rotate(150) scale(0.49)">
                        <tspan x="0">六合</tspan>
                    </text>
                    <text class="cls-6" transform="matrix(-0.49, 0, 0, -0.49, 499.724, 702.241)">
                        <tspan x="0">勾陈</tspan>
                    </text>
                    <text class="cls-6" transform="translate(398.686 674.65) rotate(-150) scale(0.49)">
                        <tspan x="0">青龙</tspan>
                    </text>
                    <text class="cls-6" transform="translate(324.981 600.238) rotate(-120) scale(0.49)">
                        <tspan x="0">天空</tspan>
                    </text>
                    <text class="cls-6" transform="matrix(0, -0.49, 0.49, 0, 298.357, 498.941)">
                        <tspan x="0">白虎</tspan>
                    </text>
                    <text class="cls-6" transform="translate(325.947 397.904) rotate(-60) scale(0.49)">
                        <tspan x="0">太常</tspan>
                    </text>
                    <text class="cls-6" transform="translate(400.36 324.199) rotate(-30) scale(0.49)">
                        <tspan x="0">元武</tspan>
                    </text>
                    <text class="cls-6" transform="matrix(0.49, 0, 0, 0.49, 501.656, 297.575)">
                        <tspan x="0">太阴</tspan>
                    </text>
                    <animateTransform attributeName="transform" type="rotate" from="360 500 500" to="0 500 500" dur="5s"
                        repeatCount="indefinite" />
                </g>
                <g id="tx-3" data-name="tx">
                    <path class="cls-2" d="M367.573,25.093l9.659-2.588L403.89,122l-9.659,2.588Z" />
                    <path class="cls-2" d="M622.768,22.5l9.659,2.588-26.658,99.49L596.11,122Z" />
                    <path class="cls-2" d="M845.068,147.861l7.071,7.071-72.832,72.832-7.071-7.071Z" />
                    <path class="cls-2" d="M974.907,367.573l2.589,9.659L878.005,403.89l-2.588-9.659Z" />
                    <path class="cls-2" d="M977.5,622.768l-2.589,9.659-99.49-26.658,2.588-9.659Z" />
                    <path class="cls-2" d="M852.139,845.068l-7.071,7.071-72.832-72.832,7.071-7.071Z" />
                    <path class="cls-2" d="M632.427,974.907l-9.659,2.589L596.11,878.005l9.659-2.588Z" />
                    <path class="cls-2" d="M377.232,977.5l-9.659-2.589,26.658-99.49,9.659,2.588Z" />
                    <path class="cls-2" d="M154.932,852.139l-7.071-7.071,72.832-72.832,7.071,7.071Z" />
                    <path class="cls-2" d="M25.093,632.427L22.5,622.768,122,596.11l2.588,9.659Z" />
                    <path class="cls-2" d="M22.5,377.232l2.588-9.659,99.49,26.658L122,403.89Z" />
                    <path class="cls-2" d="M147.861,154.932l7.071-7.071,72.832,72.832-7.071,7.071Z" />
                    <circle class="cls-4" cx="500.5" cy="500.5" r="495.5" />
                    <circle class="cls-4" cx="500.5" cy="500.5" r="392.813" />
                    <animateTransform attributeName="transform" type="rotate" from="360 500 500" to="0 500 500" dur="3s"
                        repeatCount="indefinite" />
                </g>
                <g id="_12zhi-2" data-name="12zhi">
                    <text class="cls-7" x="501.971" y="87.317">
                        <tspan x="501.971">子</tspan>
                    </text>
                    <text class="cls-7" transform="matrix(0.866, 0.5, -0.5, 0.866, 708.048, 143.592)">
                        <tspan x="0">丑</tspan>
                    </text>
                    <text class="cls-7" transform="matrix(0.5, 0.866, -0.866, 0.5, 858.379, 295.366)">
                        <tspan x="0">寅</tspan>
                    </text>
                    <text class="cls-7" transform="matrix(0, 1, -1, 0, 912.683, 501.971)">
                        <tspan x="0">卯</tspan>
                    </text>
                    <text class="cls-7" transform="matrix(-0.5, 0.866, -0.866, -0.5, 856.408, 708.048)">
                        <tspan x="0">辰</tspan>
                    </text>
                    <text class="cls-7" transform="matrix(-0.866, 0.5, -0.5, -0.866, 704.634, 858.379)">
                        <tspan x="0">巳</tspan>
                    </text>
                    <text class="cls-7" transform="translate(498.029 912.683) rotate(180)">
                        <tspan x="0">午</tspan>
                    </text>
                    <text class="cls-7" transform="matrix(-0.866, -0.5, 0.5, -0.866, 291.952, 856.408)">
                        <tspan x="0">未</tspan>
                    </text>
                    <text class="cls-7" transform="matrix(-0.5, -0.866, 0.866, -0.5, 141.621, 704.634)">
                        <tspan x="0">申</tspan>
                    </text>
                    <text class="cls-7" transform="matrix(0, -1, 1, 0, 87.317, 498.029)">
                        <tspan x="0">酉</tspan>
                    </text>
                    <text class="cls-7" transform="matrix(0.5, -0.866, 0.866, 0.5, 143.592, 291.952)">
                        <tspan x="0">戌</tspan>
                    </text>
                    <text class="cls-7" transform="matrix(0.866, -0.5, 0.5, 0.866, 295.366, 141.621)">
                        <tspan x="0">亥</tspan>
                    </text>
                    <animateTransform attributeName="transform" type="rotate" from="360 500 500" to="0 500 500" dur="3s"
                        repeatCount="indefinite" />
                </g>
            </svg>
            
            <div id="LOADING_TXT" style="text-align: center;
            margin: 1vh 0px;
            font-size: 3vw;
            color: #0970cb;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;">
      `
        if (!xx) {
            xx = '加载中'
        }



        if (!doc_id("mt_loading_bj")) {
            let a = document.createElement("div");
            a.id = "mt_loading_bj"
            a.style = `    position: fixed;
            top: -100vh;
            left: -100vw;
            background: #00000094;
            width: 300vw;
            height: 300vh;
            z-index: 999;
           `
            document.body.appendChild(a);
        }

        if (!doc_id("mt_loading0")) {
            // console.log("信息框不存在，创建")
            var btn = document.createElement("div");
            btn.id = "mt_loading0"
            btn.style = `position: fixed;
            background: rgb(231 231 231);
            border-radius: 0.2em;
            display: flex;
            flex-flow: column nowrap;
            top: 0px;
            left: 0px;
            padding: 2vw;
            width: 25.5vw;
            margin: 120px 35vw 0vw 35vw;
            z-index:9998;
           `
            btn.innerHTML = html + xx + '</div></div>'
            document.body.appendChild(btn);

        } else {
            if (xy) {
                doc_id("mt_loading0").style.display = "block"
                doc_id("LOADING_TXT").innerHTML = xx
                doc_id("mt_loading_bj").style.display = "block"
            } else {
                doc_id("mt_loading0").style.display = "none"
                doc_id("mt_loading_bj").style.display = "none"
            }

        }

    },
    dibutishi(xx, time) {
        if (!xx) {
            xx = '加载中'
        }
        if (!time) {
            time = '2.5'
        }

        let html1 = '<div style="animation: hidetip ' + time + 's 1;    animation-fill-mode: forwards;    animation-timing-function: cubic-bezier(1, 0.09, 0.91, 0.63);    position: fixed;    margin: 0vh 2.5vw 0px 2.5vw;    z-index: 99;    bottom: 15vh;    border-radius: .5em;    display: flex;    justify-content: space-evenly;    width: 95vw;">'
        let html2 = '<div id="ddts_XXID_2022" style="display: flex;align-items: center;justify-content: flex-start;background: #272828;padding: .2em 1em;border-radius: .2em;color: white;">' + xx + '</div></div>'

        if (!doc_id("mt_dbts0")) {
            // console.log("信息框不存在，创建")
            var btn = document.createElement("div");
            btn.id = "mt_dbts0"
            btn.innerHTML = html1 + html2
            document.body.appendChild(btn);
        } else {
            doc_id('ddts_XXID_2022').innerHTML = xx
            doc_id("mt_dbts0").style.display = "block"
        }
        var int0 = setInterval(function () {
            doc_id("mt_dbts0").style.display = "none"
            clearInterval(int0)
        }, time);



    },
    yinchang_jiazai() {
        if (jjk_fh2 = false) {
            return 'ok'
        } else {
            return 'ng'
        }

    },
    jiazai(xx) {
        if (!xx) {
            xx = '加载中'
        }
        jjk_fh2 = true
        let svg = '<svg t="1661000102722" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2712"  width="8vw" height="8vw" ><path d="M827.211075 221.676536m-54.351151 0a54.351151 54.351151 0 1 0 108.702302 0 54.351151 54.351151 0 1 0-108.702302 0Z" p-id="2713"></path><path d="M940.905298 515.399947m-67.086951 0a67.086952 67.086952 0 1 0 134.173903 0 67.086952 67.086952 0 1 0-134.173903 0Z" p-id="2714"></path><path d="M829.755035 810.595334m-78.974766 0a78.974766 78.974766 0 1 0 157.949532 0 78.974766 78.974766 0 1 0-157.949532 0Z" p-id="2715"></path><path d="M534.831643 928.64149m-91.48657 0a91.486571 91.486571 0 1 0 182.973141 0 91.486571 91.486571 0 1 0-182.973141 0Z" p-id="2716"></path><path d="M243.780191 805.955407m-101.902408 0a101.902408 101.902408 0 1 0 203.804816 0 101.902408 101.902408 0 1 0-203.804816 0Z" p-id="2717"></path><path d="M536.623615 107.870315m-107.854315 0a107.854315 107.854315 0 1 0 215.70863 0 107.854315 107.854315 0 1 0-215.70863 0Z" p-id="2718"></path><path d="M243.780191 224.220497m-107.854315 0a107.854315 107.854315 0 1 0 215.70863 0 107.854315 107.854315 0 1 0-215.70863 0Z" p-id="2719"></path><path d="M129.429978 512.008m-102.766395 0a102.766394 102.766394 0 1 0 205.532789 0 102.766394 102.766394 0 1 0-205.532789 0Z" p-id="2720"></path></svg>'

        let yyy = '<svg t="1662001896246" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1775" width="8vw" height="8vw" ><path d="M902.072201 353.393759c-9.668274-18.792015-14.50441-39.196842-26.312339-56.913383-22.551678-42.954406-53.689959-82.685387-90.204712-116.512954-19.329253-12.347266-35.435181-27.917955-54.761336-40.268219-17.182402-11.275889-35.976516-20.402728-53.693057-30.067904-27.381717-10.738651-53.693057-22.011342-82.153346-28.993429-11.27379-1.072476-20.935868-6.441752-32.213756-6.441752L516.024683 68.826742c-24.160292-2.684188-49.397157-0.537237-74.098883 1.072476-55.297574 4.2969-104.159592 22.551678-153.019512 44.027881-84.295101 41.878932-160.0005 114.363005-201.344293 200.269818-31.14028 64.968846-48.322682 139.061633-46.175831 209.935993 0 9.128938 2.685187 22.550678 1.612711 31.14028 4.294801 16.646164 3.756564 32.213756 8.054463 47.787543C76.823444 722.793015 153.605416 834.470832 266.357709 897.291828c20.401729 15.033452 44.024783 21.476204 66.57756 30.60714 79.459965 30.064806 179.870188 35.432083 263.62905 12.885502 119.730282-27.385815 230.339721-113.827766 285.637295-227.120394 1.080571-1.070377 2.685187-1.070377 1.613711-3.219327C937.508382 601.987259 946.630125 469.904614 902.072201 353.393759zM389.849651 266.949709c13.956879-11.813126 31.139281-21.477203 52.077248-16.645165 15.03755 3.758663 27.92615 14.497214 35.979514 28.455193 7.514128 13.959977 10.198316 37.049891 0 51.00687-9.134035 15.572688-26.845479 28.458191-45.103355 28.996527-20.942064-1.075474-43.488645-10.203413-51.542009-31.680616C369.982062 307.218927 376.425813 284.129013 389.849651 266.949709zM872.541534 686.819597c-35.440278 82.14815-108.997826 161.076074-190.070502 199.735678-25.236865 13.42174-51.008869 25.771005-78.928823 30.067904-12.347266 0-23.086916 3.220326-35.440278 3.220326l-32.214755-3.220326c-6.971794-1.611712-13.42174-6.445849-20.936868-4.834137-36.508557-5.905514-70.339221-25.773103-98.255078-52.081345-51.00687-52.617583-71.411597-130.470932-51.00687-198.659105 10.203413-33.826467 30.600045-66.041322 57.445524-90.202713 32.75509-23.088915 66.045419-44.565119 97.726035-70.87336 38.119269-27.383716 80.537537-56.914383 98.790317-100.940265 15.031354-22.01444 17.716541-48.85992 22.551678-75.168161 8.053464-78.390586-30.605142-159.465361-101.480601-200.272916-13.957978-9.663077-30.600045-13.959977-45.103355-22.013441-16.642067-2.685187-31.136183-9.663077-47.243111-9.663077-1.615809-1.075474 0.535239-1.075474-0.540335-1.609713 38.658605-6.44375 88.592-2.149949 129.401554 6.440752 109.527869 23.088915 213.687461 96.108227 271.677318 193.828066l16.643066 29.530667C923.00807 428.56292 925.692258 577.824868 872.541534 686.819597zM605.151823 704.538237c6.984086 20.939966 2.150948 45.638594-14.493117 61.208184-15.572688 11.275889-35.439278 20.939966-55.306768 13.960976-15.031354-5.369276-30.598946-16.646164-38.119269-30.606141-6.984086-15.031354-4.835136-34.362705 2.149949-48.85992 10.199315-19.864491 32.215854-27.380718 51.00787-34.361706C574.550778 665.343393 596.027981 683.062033 605.151823 704.538237zM660.336873 1012.196168l-0.53314 0.53314-1.609713-2.148949C658.733355 1011.119594 659.267494 1011.654833 660.336873 1012.196168zM595.907263 1022.93272 596.447598 1022.93272 596.447598 1022.93272ZM590.002748 1023.468859c0 0.53314-0.53314 0.53314-1.608614 0.53314C588.93337 1022.93272 589.469608 1023.468859 590.002748 1023.468859z" p-id="1776"></path></svg>'

        let html = '<div><div style="display:flex;justify-content: space-evenly;padding: 5vw;background: aliceblue; margin: 45vh 10px 20px 10px;"><div style="display: flex;align-items: center;justify-content: flex-start;width: 100%;"><div style="animation:jjk0_css_dh0 2s infinite;animation-timing-function: linear;width: 8vw;height: 8vw;">' + yyy + '</div><div style="margin-left:.9em;" id="jjk_XXID_2022" >' + xx + '</div></div></div> </div>'

        if (!doc_id("mt_jjk0")) {
            // console.log("信息框不存在，创建")
            var btn = document.createElement("div");
            btn.id = "mt_jjk0"
            btn.style = 'position: fixed;height: 100vh;width: 100vw;background: #a09d99bd;z-index: 180;top:0px'
            btn.innerHTML = html
            document.body.appendChild(btn);
        } else {
            doc_id('jjk_XXID_2022').innerHTML = xx
            doc_id("mt_jjk0").style.display = "block"
        }
        return new Promise(function (resolve) {
            var int0 = setInterval(function () {
                if (!jjk_fh2) {
                    let jg = {
                        jg: jjk_fh2
                    }
                    jjk_fh2 = null
                    doc_id("mt_jjk0").style.display = "none"
                    clearInterval(int0)
                    resolve(jg);
                }
            }, 100);
        })


    },
    tan0(bt, xx, qr) {
        if (!doc_id("mt_xxk0")) {
            // console.log("信息框不存在，创建")
            var btn = document.createElement("div");
            btn.id = "mt_xxk0"

            btn.style = "position: fixed;height: 100vh;width: 100vw;background: #a09d99e3;z-index: 180;top:0px"
            let htmlt = '<div ><div style="position: fixed;background: #eaeaea;border-radius:.4vw;width: 80vw;margin: 0vh 10vw 0vh 10vw;height: 19em;margin-top: 10em;z-index: 181;">'
            htmlt += '<div style="text-align: center;margin-top: .5em;margin-bottom: .5em;" id="xxk_bt_tc">' + bt + '</div>'
            htmlt += '<div style="padding: .5em;height: 13em;word-wrap:break-word;overflow: scroll;"><text id="xxk_xx_tc" style="white-space: pre-wrap;">' + xx + '</text></div>'
            htmlt += '<div style="position: absolute;width: 100%;border-top:2px solid #c1bbbb;">'

            htmlt += '<div style="width: 95%; display: flex;justify-content: space-between;">'
            let okfh = "'ok'"
            htmlt += '<div style="text-align: center;cursor: pointer;margin-top: .5em;" > </div>'
            htmlt += '<div  id="xxk_qr_tc" style="text-align: center;cursor: pointer;background: #fd4c4c;padding: .2em;border-radius: 10%;margin-top: .5em;" onclick="xxk_fh0=' + okfh + '">' + qr + '</div>'
            htmlt += '</div>'

            htmlt += '</div></div></div>'
            btn.innerHTML = htmlt
            document.body.appendChild(btn);
        } else {
            doc_id('xxk_xx_tc').innerHTML = xx
            doc_id('xxk_bt_tc').innerHTML = bt
            doc_id('xxk_qr_tc').innerHTML = qr
            doc_id("mt_xxk0").style.display = "block"
        }
        return new Promise(function (resolve) {
            var int0 = setInterval(function () {
                if (xxk_fh0 != null) {
                    let jg = {
                        jg: xxk_fh0
                    }
                    xxk_fh0 = null
                    doc_id("mt_xxk0").style.display = "none"
                    clearInterval(int0)
                    resolve(jg);
                }
            }, 100);
        })
    },

    tan1(bt, xx, qx, qr) {
        if (!doc_id("mt_xxk1")) {
            var btn = document.createElement("div");
            btn.id = "mt_xxk1"
            btn.style = "position: fixed;height: 100vh;width: 100vw;background: #a09d99e3;z-index: 180;top:0px"
            let htmlt = '<div ><div style="position: fixed;background: #eaeaea;border-radius:.4vw;width: 80vw;margin: 0vh 10vw 0vh 10vw;height: 19em;margin-top: 10em;z-index: 181;">'
            htmlt += '<div style="text-align: center;margin-top: .5em;margin-bottom: .5em;">' + bt + '</div>'
            htmlt += '<div style="padding: .5em;height: 13em;word-wrap:break-word;overflow: scroll;">' + xx + '</div>'
            htmlt += '<div style="position: absolute;bottom: 0.5em;width: 80vw; display: flex;justify-content: space-around;padding-top: 0.5em;border-top: 2px solid #c1bbbb;">'
            let nofh = "'no'"
            htmlt += '<div style="width: 50%;text-align: center;cursor: pointer;margin-top: .5em;border-right: 2px solid #c1bbbb;;" onclick="xxk_fh1=' + nofh + '">' + qx + '</div>'
            let okfh = "'ok'"
            htmlt += ' <div style="width: 50%;text-align: center;cursor: pointer;margin-top: .5em;" onclick="xxk_fh1=' + okfh + '">' + qr + '</div></div></div></div>'
            btn.innerHTML = htmlt
            document.body.appendChild(btn);
        } else {
            doc_id("mt_xxk1").style.display = "block"
        }
        return new Promise(function (resolve) {
            var int1 = setInterval(function () {
                if (xxk_fh1 != null) {
                    let jg = {
                        jg: xxk_fh1
                    }
                    xxk_fh1 = null
                    clearInterval(int1)
                    doc_id("mt_xxk1").style.display = "none"
                    resolve(jg);
                }
            }, 100);
        })
    },
    tan2(bt, xx, qx, qr) {
        if (!doc_id("mt_xxk2")) {
            var btn = document.createElement("div");
            btn.id = "mt_xxk2"
            btn.style = "position: fixed;height: 100vh;width: 100vw;background: #a09d99e3;z-index: 180;top:0px"
            let htmlt = '<div ><div style="position: fixed;background: #eaeaea;border-radius: .4vw;width: 80vw;margin: 0vh 10vw 0vh 10vw;height: 7em;margin-top: 17em;z-index: 181;">'
            htmlt += '<div style="text-align: center;margin-top: .5em;margin-bottom: .5em;">' + bt + '</div>'

            htmlt += '<div style="display:flex;justify-content:space-evenly">'
            htmlt += '<div style="width: 80%;">'
            htmlt += '<input id="xxk2_bxk" style="padding-top: .5em;height: 1.5em;width:99.5%" value=' + xx + '></input>'
            htmlt += '</div>'
            htmlt += '</div>'

            htmlt += '<div style="position: absolute;bottom: 0.5em;width: 80vw; display: flex;justify-content: space-around;border-top:2px solid #c1bbbb;;margin-top: 1em;">'
            let nofh = "'no'"
            htmlt += '<div style="width: 50%;text-align: center;cursor: pointer;margin-top: .5em;border-right: 2px solid #c1bbbb;" onclick="xxk_fh2=' + nofh + '">' + qx + '</div>'
            let okfh = "'ok'"
            htmlt += ' <div style="width: 50%;text-align: center;cursor: pointer;margin-top: .5em;" onclick="xxk_fh2=' + okfh + '">' + qr + '</div></div></div></div>'
            btn.innerHTML = htmlt
            document.body.appendChild(btn);
        } else {
            doc_id("mt_xxk2").style.display = "block"
        }
        return new Promise(function (resolve) {
            var int2 = setInterval(function () {
                if (xxk_fh2 != null) {
                    let jg = {
                        jg: xxk_fh2,
                        value: doc_id("xxk2_bxk").value
                    }
                    xxk_fh2 = null
                    clearInterval(int2)
                    doc_id("mt_xxk2").style.display = "none"
                    resolve(jg);
                }
            }, 100);
        })
    }
}


function cs_jwd() {
    //输入城市，转换经纬度,如cs_jwd('长沙')
    let data = '{"北京市":{"北京":{"bw":"39.55","dj":"116.24"}},"天津市":{"天津":{"bw":"39.02","dj":"117.12"}},"上海市":{"上海":{"bw":"31.14","dj":"121.29"}},"重庆市":{"重庆":{"bw":"29.35","dj":"106.33"},"合川":{"bw":"30.02","dj":"106.15"},"江津":{"bw":"29.18","dj":"106.16"},"南川":{"bw":"29.10","dj":"107.05"},"永川":{"bw":"29.23","dj":"105.53"}},"河北省":{"石家庄":{"bw":"38.02","dj":"114.30"},"安国":{"bw":"38.24","dj":"115.20"},"保定":{"bw":"38.51","dj":"115.30"},"霸州":{"bw":"39.06","dj":"116.24"},"泊头":{"bw":"38.04","dj":"116.34"},"沧州":{"bw":"38.18","dj":"116.52"},"承德":{"bw":"40.59","dj":"117.57"},"定州":{"bw":"38.30","dj":"115.00"},"丰南":{"bw":"39.34","dj":"118.06"},"高碑店":{"bw":"39.20","dj":"115.51"},"蒿城":{"bw":"38.02","dj":"114.50"},"邯郸":{"bw":"36.36","dj":"114.28"},"河间":{"bw":"38.26","dj":"116.05"},"衡水":{"bw":"37.44","dj":"115.42"},"黄骅":{"bw":"38.21","dj":"117.21"},"晋州":{"bw":"38.02","dj":"115.02"},"冀州":{"bw":"37.34","dj":"115.33"},"廓坊":{"bw":"39.31","dj":"116.42"},"鹿泉":{"bw":"38.04","dj":"114.19"},"南宫":{"bw":"37.22","dj":"115.23"},"秦皇岛":{"bw":"39.55","dj":"119.35"},"任丘":{"bw":"38.42","dj":"116.07"},"三河":{"bw":"39.58","dj":"117.04"},"沙河":{"bw":"36.51","dj":"114.30"},"深州":{"bw":"38.01","dj":"115.32"},"唐山":{"bw":"39.36","dj":"118.11"},"武安":{"bw":"36.42","dj":"114.11"},"邢台":{"bw":"37.04","dj":"114.30"},"辛集":{"bw":"37.54","dj":"115.12"},"新乐":{"bw":"38.20","dj":"114.41"},"张家口":{"bw":"40.48","dj":"114.53"},"涿州":{"bw":"39.29","dj":"115.59"},"遵化":{"bw":"40.11","dj":"117.58"}},"山西省":{"太原":{"bw":"37.54","dj":"112.33"},"长治":{"bw":"36.11","dj":"113.06"},"大同":{"bw":"40.06","dj":"113.17"},"高平":{"bw":"35.48","dj":"112.55"},"古交":{"bw":"37.54","dj":"112.09"},"河津":{"bw":"35.35","dj":"110.41"},"侯马":{"bw":"35.37","dj":"111.21"},"霍州":{"bw":"36.34","dj":"111.42"},"介休":{"bw":"37.02","dj":"111.55"},"晋城":{"bw":"35.30","dj":"112.51"},"临汾":{"bw":"36.05","dj":"111.31"},"潞城":{"bw":"36.21","dj":"113.14"},"朔州":{"bw":"39.19","dj":"112.26"},"孝义":{"bw":"37.08","dj":"111.48"},"忻州":{"bw":"38.24","dj":"112.43"},"阳泉":{"bw":"37.51","dj":"113.34"},"永济":{"bw":"34.52","dj":"110.27"},"原平":{"bw":"38.43","dj":"112.42"},"榆次":{"bw":"37.41","dj":"112.43"},"运城":{"bw":"35.02","dj":"110.59"}},"内蒙古自治区":{"呼和浩特":{"bw":"40.48","dj":"111.41"},"包头":{"bw":"40.39","dj":"109.49"},"赤峰":{"bw":"42.17","dj":"118.58"},"东胜":{"bw":"39.48","dj":"109.59"},"二连浩特":{"bw":"43.38","dj":"111.58"},"额尔古纳":{"bw":"50.13","dj":"120.11"},"丰镇":{"bw":"40.27","dj":"113.09"},"根河":{"bw":"50.48","dj":"121.29"},"海拉尔":{"bw":"49.12","dj":"119.39"},"霍林郭勒":{"bw":"45.32","dj":"119.38"},"集宁":{"bw":"41.02","dj":"113.06"},"临河":{"bw":"40.46","dj":"107.22"},"满洲里":{"bw":"49.35","dj":"117.23"},"通辽":{"bw":"43.37","dj":"122.16"},"乌兰浩特":{"bw":"46.03","dj":"122.03"},"乌海":{"bw":"39.40","dj":"106.48"},"锡林浩特":{"bw":"43.57","dj":"116.03"},"牙克石":{"bw":"49.17","dj":"120.40"},"扎兰屯":{"bw":"48.00","dj":"122.47"}},"辽宁省":{"沈阳":{"bw":"41.48","dj":"123.25"},"鞍山":{"bw":"41.07","dj":"123.00"},"北票":{"bw":"41.48","dj":"120.47"},"本溪":{"bw":"41.18","dj":"123.46"},"朝阳":{"bw":"41.34","dj":"120.27"},"大连":{"bw":"38.55","dj":"121.36"},"丹东":{"bw":"40.08","dj":"124.22"},"大石桥":{"bw":"40.37","dj":"122.31"},"东港":{"bw":"39.53","dj":"124.08"},"凤城":{"bw":"40.28","dj":"124.02"},"抚顺":{"bw":"41.51","dj":"123.54"},"阜新":{"bw":"42.01","dj":"121.39"},"盖州":{"bw":"40.24","dj":"122.21"},"海城":{"bw":"40.51","dj":"122.43"},"葫芦岛":{"bw":"40.45","dj":"120.51"},"锦州":{"bw":"41.07","dj":"121.09"},"开原":{"bw":"42.32","dj":"124.02"},"辽阳":{"bw":"41.16","dj":"123.12"},"凌海":{"bw":"41.10","dj":"121.21"},"凌源":{"bw":"41.14","dj":"119.22"},"盘锦":{"bw":"41.07","dj":"122.03"},"普兰店":{"bw":"39.23","dj":"121.58"},"铁法":{"bw":"42.28","dj":"123.32"},"铁岭":{"bw":"42.18","dj":"123.51"},"瓦房店":{"bw":"39.37","dj":"122.00"},"兴城":{"bw":"40.37","dj":"120.41"},"新民":{"bw":"41.59","dj":"122.49"},"营口":{"bw":"40.39","dj":"122.13"},"庄河":{"bw":"39.41","dj":"122.58"}},"吉林省":{"长春":{"bw":"43.54","dj":"125.19"},"白城":{"bw":"45.38","dj":"122.50"},"白山":{"bw":"41.56","dj":"126.26"},"大安":{"bw":"45.30","dj":"124.18"},"德惠":{"bw":"44.32","dj":"125.42"},"敦化":{"bw":"43.22","dj":"128.13"},"公主岭":{"bw":"43.31","dj":"124.49"},"和龙":{"bw":"42.32","dj":"129.00"},"桦甸":{"bw":"42.58","dj":"126.44"},"珲春":{"bw":"42.52","dj":"130.22"},"集安":{"bw":"41.08","dj":"126.11"},"蛟河":{"bw":"43.42","dj":"127.21"},"吉林":{"bw":"43.52","dj":"126.33"},"九台":{"bw":"44.09","dj":"125.51"},"辽源":{"bw":"42.54","dj":"125.09"},"临江":{"bw":"41.49","dj":"126.53"},"龙井":{"bw":"42.46","dj":"129.26"},"梅河口":{"bw":"42.32","dj":"125.40"},"舒兰":{"bw":"44.24","dj":"126.57"},"四平":{"bw":"43.10","dj":"124.22"},"松原":{"bw":"45.11","dj":"124.49"},"洮南":{"bw":"45.20","dj":"122.47"},"通化":{"bw":"41.43","dj":"125.56"},"图们":{"bw":"42.57","dj":"129.51"},"延吉":{"bw":"42.54","dj":"129.30"},"愉树":{"bw":"44.49","dj":"126.32"}},"黑龙江省":{"哈尔滨":{"bw":"45.44","dj":"126.36"},"阿城":{"bw":"45.32","dj":"126.58"},"安达":{"bw":"46.24","dj":"125.18"},"北安":{"bw":"48.15","dj":"126.31"},"大庆":{"bw":"46.36","dj":"125.01"},"富锦":{"bw":"47.15","dj":"132.02"},"海林":{"bw":"44.35","dj":"129.21"},"海伦":{"bw":"47.28","dj":"126.57"},"鹤岗":{"bw":"47.20","dj":"130.16"},"黑河":{"bw":"50.14","dj":"127.29"},"佳木斯":{"bw":"46.47","dj":"130.22"},"鸡西":{"bw":"45.17","dj":"130.57"},"密山":{"bw":"45.32","dj":"131.50"},"牡丹江":{"bw":"44.35","dj":"129.36"},"讷河":{"bw":"48.29","dj":"124.51"},"宁安":{"bw":"44.21","dj":"129.28"},"齐齐哈尔":{"bw":"47.20","dj":"123.57"},"七台河":{"bw":"45.48","dj":"130.49"},"双城":{"bw":"45.22","dj":"126.15"},"尚志":{"bw":"45.14","dj":"127.55"},"双鸭山":{"bw":"46.38","dj":"131.11"},"绥芬河":{"bw":"44.25","dj":"131.11"},"绥化":{"bw":"46.38","dj":"126.59"},"铁力":{"bw":"46.59","dj":"128.01"},"同江":{"bw":"47.39","dj":"132.30"},"五常":{"bw":"44.55","dj":"127.11"},"五大连池":{"bw":"48.38","dj":"126.07"},"伊春":{"bw":"47.42","dj":"128.56"},"肇东":{"bw":"46.04","dj":"125.58"}},"江苏省":{"南京":{"bw":"32.03","dj":"118.46"},"常熟":{"bw":"31.39","dj":"120.43"},"常州":{"bw":"31.47","dj":"119.58"},"丹阳":{"bw":"32.00","dj":"119.32"},"东台":{"bw":"32.51","dj":"120.19"},"高邮":{"bw":"32.47","dj":"119.27"},"海门":{"bw":"31.53","dj":"121.09"},"淮安":{"bw":"33.30","dj":"119.09"},"淮阴":{"bw":"33.36","dj":"119.02"},"江都":{"bw":"32.26","dj":"119.32"},"姜堰":{"bw":"32.34","dj":"120.08"},"江阴":{"bw":"31.54","dj":"120.17"},"靖江":{"bw":"32.02","dj":"120.17"},"金坛":{"bw":"31.46","dj":"119.33"},"昆山":{"bw":"31.23","dj":"120.57"},"连去港":{"bw":"34.36","dj":"119.10"},"溧阳":{"bw":"31.26","dj":"119.29"},"南通":{"bw":"32.01","dj":"120.51"},"邳州":{"bw":"34.19","dj":"117.59"},"启乐":{"bw":"31.48","dj":"121.39"},"如皋":{"bw":"32.23","dj":"120.33"},"宿迁":{"bw":"33.58","dj":"118.18"},"苏州":{"bw":"31.19","dj":"120.37"},"太仓":{"bw":"31.27","dj":"121.06"},"泰兴":{"bw":"32.10","dj":"120.01"},"泰州":{"bw":"32.30","dj":"119.54"},"通州":{"bw":"32.05","dj":"121.03"},"吴江":{"bw":"31.10","dj":"120.39"},"无锡":{"bw":"31.34","dj":"120.18"},"兴化":{"bw":"32.56","dj":"119.50"},"新沂":{"bw":"34.22","dj":"118.20"},"徐州":{"bw":"34.15","dj":"117.11"},"盐在":{"bw":"33.22","dj":"120.08"},"扬中":{"bw":"32.14","dj":"119.49"},"扬州":{"bw":"32.23","dj":"119.26"},"宜兴":{"bw":"31.21","dj":"119.49"},"仪征":{"bw":"32.16","dj":"119.10"},"张家港":{"bw":"31.52","dj":"120.32"},"镇江":{"bw":"32.11","dj":"119.27"}},"浙江省":{"杭州":{"bw":"30.16","dj":"120.10"},"慈溪":{"bw":"30.11","dj":"121.15"},"东阳":{"bw":"29.16","dj":"120.14"},"奉化":{"bw":"29.39","dj":"121.24"},"富阳":{"bw":"30.03","dj":"119.57"},"海宁":{"bw":"30.32","dj":"120.42"},"湖州":{"bw":"30.52","dj":"120.06"},"建德":{"bw":"29.29","dj":"119.16"},"江山":{"bw":"28.45","dj":"118.37"},"嘉兴":{"bw":"30.46","dj":"120.45"},"金华":{"bw":"29.07","dj":"119.39"},"兰溪":{"bw":"29.12","dj":"119.28"},"临海":{"bw":"28.51","dj":"121.08"},"丽水":{"bw":"28.27","dj":"119.54"},"龙泉":{"bw":"28.04","dj":"119.08"},"宁波":{"bw":"29.52","dj":"121.33"},"平湖":{"bw":"30.42","dj":"121.01"},"衢州":{"bw":"28.58","dj":"118.52"},"瑞安":{"bw":"27.48","dj":"120.38"},"上虞":{"bw":"30.01","dj":"120.52"},"绍兴":{"bw":"30.00","dj":"120.34"},"台州":{"bw":"28.41","dj":"121.27"},"桐乡":{"bw":"30.38","dj":"120.32"},"温岭":{"bw":"28.22","dj":"121.21"},"温州":{"bw":"28.01","dj":"120.39"},"萧山":{"bw":"30.09","dj":"120.16"},"义乌":{"bw":"29.18","dj":"120.04"},"乐清":{"bw":"28.08","dj":"120.58"},"余杭":{"bw":"30.26","dj":"120.18"},"余姚":{"bw":"30.02","dj":"121.10"},"永康":{"bw":"29.54","dj":"120.01"},"舟山":{"bw":"30.01","dj":"122.06"},"诸暨":{"bw":"29.43","dj":"120.14"}},"安徽省":{"合肥":{"bw":"31.52","dj":"117.17"},"安庆":{"bw":"30.31","dj":"117.02"},"蚌埠":{"bw":"32.56","dj":"117.21"},"亳州":{"bw":"33.52","dj":"115.47"},"巢湖":{"bw":"31.36","dj":"117.52"},"滁州":{"bw":"32.18","dj":"118.18"},"阜阳":{"bw":"32.54","dj":"115.48"},"贵池":{"bw":"30.39","dj":"117.28"},"淮北":{"bw":"33.57","dj":"116.47 "},"淮南":{"bw":"32.37","dj":"116.58"},"黄山":{"bw":"29.43","dj":"118.18"},"界首":{"bw":"33.15","dj":"115.21"},"六安":{"bw":"31.44","dj":"116.28"},"马鞍山":{"bw":"31.43","dj":"118.28"},"明光":{"bw":"32.47","dj":"117.58"},"宿州":{"bw":"33.38","dj":"116.58"},"天长":{"bw":"32.41","dj":"118.59"},"铜陵":{"bw":"30.56","dj":"117.48"},"芜湖":{"bw":"31.19","dj":"118.22"},"宣州":{"bw":"30.57","dj":"118.44"}},"福建省":{"福州":{"bw":"26.05","dj":"119.18"},"长乐":{"bw":"25.58","dj":"119.31"},"福安":{"bw":"27.06","dj":"119.39"},"福清":{"bw":"25.42","dj":"119.23"},"建瓯":{"bw":"27.03","dj":"118.20"},"建阳":{"bw":"27.21","dj":"118.07"},"晋江":{"bw":"24.49","dj":"118.35"},"龙海":{"bw":"24.26","dj":"117.48"},"龙岩":{"bw":"25.06","dj":"117.01"},"南安":{"bw":"24.57","dj":"118.23"},"南平":{"bw":"26.38","dj":"118.10"},"宁德":{"bw":"26.39","dj":"119.31"},"莆田":{"bw":"24.26","dj":"119.01"},"泉州":{"bw":"24.56","dj":"118.36"},"三明":{"bw":"26.13","dj":"117.36"},"邵武":{"bw":"27.20","dj":"117.29"},"石狮":{"bw":"24.44","dj":"118.38"},"武夷山":{"bw":"27.46","dj":"118.02"},"厦..门":{"bw":"24.27","dj":"118.06"},"永安":{"bw":"25.58","dj":"117.23"},"漳平":{"bw":"25.17","dj":"117.24"},"漳州":{"bw":"24.31","dj":"117.39"}},"江西省":{"南昌":{"bw":"28.40","dj":"115.55"},"德兴":{"bw":"28.57","dj":"117.35"},"丰城":{"bw":"28.12","dj":"115.48"},"赣州":{"bw":"28.52","dj":"114.56"},"高安":{"bw":"28.25","dj":"115.22"},"吉安":{"bw":"27.07","dj":"114.58"},"景德镇":{"bw":"29.17","dj":"117.13"},"井冈山":{"bw":"26.34","dj":"114.10"},"九江":{"bw":"29.43","dj":"115.58"},"乐平":{"bw":"28.58","dj":"117.08"},"临川":{"bw":"27.59","dj":"116.21"},"萍乡":{"bw":"27.37","dj":"113.50"},"瑞昌":{"bw":"29.40","dj":"115.38"},"瑞金":{"bw":"25.53","dj":"116.01"},"上饶":{"bw":"25.27","dj":"117.58"},"新余":{"bw":"27.48","dj":"114.56"},"宜春":{"bw":"27.47","dj":"114.23"},"鹰潭":{"bw":"28.14","dj":"117.03"}},"山东省":{"济南":{"bw":"36.40","dj":"117.00"},"安丘":{"bw":"36.25","dj":"119.12"},"滨州":{"bw":"37.22","dj":"118.02"},"昌邑":{"bw":"39.52","dj":"119.24"},"德州":{"bw":"37.26","dj":"116.17"},"东营":{"bw":"37.27","dj":"118.30"},"肥城":{"bw":"36.14","dj":"116.46"},"高密":{"bw":"36.22","dj":"119.44"},"菏泽":{"bw":"35.14","dj":"115.26"},"胶南":{"bw":"35.53","dj":"119.58"},"胶州":{"bw":"36.17","dj":"120.00"},"即墨":{"bw":"36.22","dj":"120.28"},"济宁":{"bw":"35.23","dj":"116.33"},"莱芜":{"bw":"36.12","dj":"117.40"},"莱西":{"bw":"36.52","dj":"120.31"},"莱阳":{"bw":"36.58","dj":"120.42"},"莱州":{"bw":"37.10","dj":"119.57"},"乐陵":{"bw":"37.44","dj":"117.12"},"聊城":{"bw":"36.26","dj":"115.57"},"临清":{"bw":"36.51","dj":"115.42"},"临沂":{"bw":"35.03","dj":"118.20"},"龙口":{"bw":"37.39","dj":"120.21"},"蓬莱":{"bw":"37.48","dj":"120.45"},"平度":{"bw":"36.47","dj":"119.58"},"青岛":{"bw":"36.03","dj":"120.18"},"青州":{"bw":"36.42","dj":"118.28"},"曲阜":{"bw":"35.36","dj":"116.58"},"日照":{"bw":"35.23","dj":"119.32"},"荣成":{"bw":"37.10","dj":"122.25"},"乳山":{"bw":"36.54","dj":"121.31"},"寿光":{"bw":"36.53","dj":"118.44"},"泰安":{"bw":"36.11","dj":"117.08"},"滕州":{"bw":"35.06","dj":"117.09"},"潍坊":{"bw":"36.43","dj":"119.06"},"威海":{"bw":"37.31","dj":"122.07"},"文登":{"bw":"37.12","dj":"122.03"},"新泰":{"bw":"35.54","dj":"117.45"},"烟台":{"bw":"37.32","dj":"121.24"},"兖州":{"bw":"35.32","dj":"116.49"},"禹城":{"bw":"36.56","dj":"116.39"},"枣庄":{"bw":"34.52","dj":"117.33"},"章丘":{"bw":"36.43","dj":"117.32"},"招远":{"bw":"37.21","dj":"120.23"},"诸城":{"bw":"35.59","dj":"119.24"},"淄博":{"bw":"36.48","dj":"118.03"},"邹城":{"bw":"35.24","dj":"116.58"}},"河南省":{"郑州":{"bw":"34.46","dj":"113.40"},"安阳":{"bw":"36.06","dj":"114.21"},"长葛":{"bw":"34.12","dj":"113.47"},"登封":{"bw":"34.27","dj":"113.02"},"邓州":{"bw":"32.42","dj":"112.05"},"巩义":{"bw":"34.46","dj":"112.58"},"鹤壁":{"bw":"35.54","dj":"114.11"},"辉县":{"bw":"35.27","dj":"113.47"},"焦作":{"bw":"35.14","dj":"113.12"},"济源":{"bw":"35.04","dj":"112.35"},"开封":{"bw":"34.47","dj":"114.21"},"灵宝":{"bw":"34.31","dj":"110.52"},"林州":{"bw":"36.03","dj":"113.49"},"漯河":{"bw":"33.33","dj":"114.02"},"洛阳":{"bw":"34.41","dj":"112.27"},"南阳":{"bw":"33.00","dj":"112.32"},"平顶山":{"bw":"33.44","dj":"113.17"},"濮阳":{"bw":"35.44","dj":"115.01"},"沁阳":{"bw":"35.05","dj":"112.57"},"汝州":{"bw":"34.09","dj":"112.50"},"三门峡":{"bw":"34.47","dj":"111.12"},"商丘":{"bw":"34.26","dj":"115.38"},"卫辉":{"bw":"35.24","dj":"114.03"},"舞钢":{"bw":"33.17","dj":"113.30"},"项城":{"bw":"33.26","dj":"114.54"},"荥阳":{"bw":"34.46","dj":"113.21"},"新密":{"bw":"34.31","dj":"113.22"},"新乡":{"bw":"35.18","dj":"113.52"},"信阳":{"bw":"32.07","dj":"114.04"},"新郑":{"bw":"34.24","dj":"113.43"},"许昌":{"bw":"34.01","dj":"113.49"},"偃师":{"bw":"34.43","dj":"112.47"},"义马":{"bw":"34.43","dj":"111.55"},"禹州":{"bw":"34.09","dj":"113.28"},"周口":{"bw":"33.37","dj":"114.38"},"驻马店":{"bw":"32.58","dj":"114.01"}},"湖北省":{"武汉":{"bw":"30.35","dj":"114.17"},"安陆":{"bw":"31.15","dj":"113.41"},"当阳":{"bw":"30.50","dj":"111.47"},"丹江口":{"bw":"32.33","dj":"108.30"},"大冶":{"bw":"30.06","dj":"114.58"},"恩施":{"bw":"30.16","dj":"109.29"},"鄂州":{"bw":"30.23","dj":"114.52"},"广水":{"bw":"31.37","dj":"113.48"},"洪湖":{"bw":"29.48","dj":"113.27"},"黄石":{"bw":"30.12","dj":"115.06"},"黄州":{"bw":"30.27","dj":"114.52"},"荆门":{"bw":"31.02","dj":"112.12"},"荆沙":{"bw":"30.18","dj":"112.16"},"老河口":{"bw":"32.23","dj":"111.40"},"利川":{"bw":"30.18","dj":"108.56"},"麻城":{"bw":"31.10","dj":"115.01"},"浦圻":{"bw":"29.42","dj":"113.51"},"潜江":{"bw":"30.26","dj":"112.53"},"石首":{"bw":"29.43","dj":"112.24"},"十堰":{"bw":"32.40","dj":"110.47"},"随州":{"bw":"31.42","dj":"113.22"},"天门":{"bw":"60.39","dj":"113.10"},"武穴":{"bw":"29.51","dj":"115.33"},"襄樊":{"bw":"32.02","dj":"112.08"},"咸宁":{"bw":"29.53","dj":"114.17"},"仙桃":{"bw":"30.22","dj":"113.27"},"孝感":{"bw":"30.56","dj":"113.54"},"宜昌":{"bw":"30.42","dj":"111.17"},"宜城":{"bw":"31.42","dj":"112.15"},"应城":{"bw":"30.57","dj":"113.33"},"枣阳":{"bw":"32.07","dj":"112.44"},"枝城":{"bw":"30.23","dj":"111.27"},"钟祥":{"bw":"31.10","dj":"112.34"}},"湖南省":{"长沙":{"bw":"28.12","dj":"112.59"},"常德":{"bw":"29.02","dj":"111.51"},"郴州":{"bw":"25.46","dj":"113.02"},"衡阳":{"bw":"26.53","dj":"112.37"},"洪江":{"bw":"27.07","dj":"109.59"},"怀化":{"bw":"27.33","dj":"109.58"},"津市":{"bw":"29.38","dj":"111.52"},"吉首":{"bw":"28.18","dj":"109.43"},"耒阳":{"bw":"26.24","dj":"112.51"},"冷水江":{"bw":"27.42","dj":"111.26"},"冷水滩":{"bw":"26.26","dj":"111.35"},"涟源":{"bw":"27.41","dj":"111.41"},"醴陵":{"bw":"27.40","dj":"113.30"},"临湘":{"bw":"29.29","dj":"113.27"},"浏阳":{"bw":"28.09","dj":"113.37"},"娄底":{"bw":"27.44","dj":"111.59"},"汨罗":{"bw":"28.49","dj":"113.03"},"韶山":{"bw":"27.54","dj":"112.29"},"邵阳":{"bw":"27.14","dj":"111.28"},"武冈":{"bw":"26.43","dj":"110.37"},"湘潭":{"bw":"27.52","dj":"112.53"},"湘乡":{"bw":"27.44","dj":"112.31"},"益阳":{"bw":"28.36","dj":"112.20"},"永州":{"bw":"26.13","dj":"111.37"},"沅江":{"bw":"28.50","dj":"112.22"},"岳阳":{"bw":"29.22","dj":"113.06"},"张家界":{"bw":"29.08","dj":"110.29"},"株洲":{"bw":"27.51","dj":"113.09"},"资兴":{"bw":"25.58","dj":"113.13"}},"广东省":{"广州":{"bw":"23.08","dj":"113.14"},"潮阳":{"bw":"23.16","dj":"116.36"},"潮州":{"bw":"23.40","dj":"116.38"},"澄海":{"bw":"23.28","dj":"116.46"},"从化":{"bw":"23.33","dj":"113.33"},"东莞":{"bw":"23.02","dj":"113.45"},"恩平":{"bw":"22.12","dj":"112.19"},"佛山":{"bw":"23.02","dj":"113.06"},"高明":{"bw":"22.53","dj":"112.50"},"高要":{"bw":"23.02","dj":"112.26"},"高州":{"bw":"21.54","dj":"110.50"},"鹤山":{"bw":"22.46","dj":"112.57"},"河源":{"bw":"23.43","dj":"114.41"},"花都":{"bw":"23.23","dj":"113.12"},"化州":{"bw":"21.39","dj":"110.37"},"惠阳":{"bw":"22.48","dj":"114.28"},"惠州":{"bw":"23.05","dj":"114.22"},"江门":{"bw":"22.35","dj":"113.04"},"揭阳":{"bw":"22.32","dj":"116.21"},"开平":{"bw":"22.22","dj":"112.40"},"乐昌":{"bw":"25.09","dj":"113.21"},"雷州":{"bw":"20.54","dj":"110.04"},"廉江":{"bw":"21.37","dj":"110.17"},"连州":{"bw":"24.48","dj":"112.23"},"罗定":{"bw":"22.46","dj":"111.33"},"茂名":{"bw":"21.40","dj":"110.53"},"梅州":{"bw":"24.19","dj":"116.07"},"南海":{"bw":"23.01","dj":"113.09"},"番禺":{"bw":"22.57","dj":"113.22"},"普宁":{"bw":"23.18","dj":"116.10"},"清远":{"bw":"23.42","dj":"113.01"},"三水":{"bw":"23.10","dj":"112.52"},"汕头":{"bw":"23.22","dj":"116.41"},"汕尾":{"bw":"22.47","dj":"115.21"},"韶关":{"bw":"24.48","dj":"113.37"},"深圳":{"bw":"22.33","dj":"114.07"},"顺德":{"bw":"22.50","dj":"113.15"},"四会":{"bw":"23.21","dj":"112.41"},"台山":{"bw":"22.15","dj":"112.48"},"吴川":{"bw":"21.26","dj":"110.47"},"新会":{"bw":"22.32","dj":"113.01"},"兴宁":{"bw":"24.09","dj":"115.43"},"阳春":{"bw":"22.10","dj":"111.48"},"阳江":{"bw":"21.50","dj":"111.58"},"英德":{"bw":"24.10","dj":"113.22"},"云浮":{"bw":"22.57","dj":"112.02"},"增城":{"bw":"23.18","dj":"113.49"},"湛江":{"bw":"21.11","dj":"110.24"},"肇庆":{"bw":"23.03","dj":"112.27"},"中山":{"bw":"22.31","dj":"113.22"},"珠海":{"bw":"22.17","dj":"113.34"}},"广西壮族自治区":{"南宁":{"bw":"22.48","dj":"108.19"},"北海":{"bw":"21.28","dj":"109.07"},"北流":{"bw":"22.42","dj":"110.21"},"百色":{"bw":"23.54","dj":"106.36"},"防城港":{"bw":"21.37","dj":"108.20"},"贵港":{"bw":"23.06","dj":"109.36"},"桂林":{"bw":"25.17","dj":"110.17"},"桂平":{"bw":"23.22","dj":"110.04"},"河池":{"bw":"24.42","dj":"108.03"},"合山":{"bw":"23.47","dj":"108.52"},"柳州":{"bw":"23.19","dj":"109.24"},"赁祥":{"bw":"22.07","dj":"106.44 "},"钦州":{"bw":"21.57","dj":"108.37"},"梧州":{"bw":"23.29","dj":"111.20"},"玉林":{"bw":"22.38","dj":"110.09"},"宜州":{"bw":"24.28","dj":"108.40"}},"海南省":{"海口":{"bw":"20.02","dj":"110.20"},"儋州":{"bw":"19.31","dj":"109.34"},"琼海":{"bw":"19.14","dj":"110.28"},"琼山":{"bw":"19.59","dj":"110.21"},"三亚":{"bw":"18.14","dj":"109.31"},"通什":{"bw":"18.46","dj":"109.31"}},"四川省":{"成都":{"bw":"30.40","dj":"104.04"},"巴中":{"bw":"31.51","dj":"106.43 "},"崇州":{"bw":"30.39","dj":"103.40"},"达川":{"bw":"31.14","dj":"107.29"},"德阳":{"bw":"31.09","dj":"104.22"},"都江堰":{"bw":"31.01","dj":"103.37"},"峨眉山":{"bw":"29.36","dj":"103.29"},"涪陵":{"bw":"29.42","dj":"107.22"},"广汉":{"bw":"30.58","dj":"104.15"},"广元":{"bw":"32.28","dj":"105.51"},"华蓥":{"bw":"30.26","dj":"106.44 "},"简阳":{"bw":"30.24","dj":"104.32"},"江油":{"bw":"31.48","dj":"104.42"},"阆中":{"bw":"31.36","dj":"105.58"},"乐山":{"bw":"29.36","dj":"103.44"},"泸州":{"bw":"28.54","dj":"105.24"},"绵阳":{"bw":"31.30","dj":"104.42"},"南充":{"bw":"30.49","dj":"106.04"},"内江":{"bw":"29.36","dj":"105.02"},"攀枝花":{"bw":"26.34","dj":"101.43"},"彭州":{"bw":"30.59","dj":"103.57"},"邛崃":{"bw":"30.26","dj":"103.28"},"遂宁":{"bw":"30.31","dj":"105.33"},"万县":{"bw":"30.50","dj":"108.21"},"万源":{"bw":"32.03","dj":"108.03"},"西昌":{"bw":"27.54","dj":"102.16"},"雅安":{"bw":"29.59","dj":"102.59"},"宜宾":{"bw":"28.47","dj":"104.34"},"自贡":{"bw":"29.23","dj":"104.46"},"资阳":{"bw":"30.09","dj":"104.38"}},"贵州省":{"贵阳":{"bw":"26.35","dj":"106.42"},"安顺":{"bw":"26.14","dj":"105.55"},"毕节":{"bw":"27.18","dj":"105.18"},"赤水":{"bw":"28.34","dj":"105.42"},"都匀":{"bw":"26.15","dj":"107.31"},"凯里":{"bw":"26.35","dj":"107.58"},"六盘水":{"bw":"26.35","dj":"104.50"},"清镇":{"bw":"26.33","dj":"106.27"},"铜仁":{"bw":"27.43","dj":"109.12"},"兴义":{"bw":"25.05","dj":"104.53"},"遵义":{"bw":"27.42","dj":"106.55"}},"云南省":{"昆明":{"bw":"25.04","dj":"102.42"},"保山":{"bw":"25.08","dj":"99.10"},"楚雄":{"bw":"25.01","dj":"101.32"},"大理":{"bw":"25.34","dj":"100.13"},"东川":{"bw":"26.06","dj":"103.12"},"个旧":{"bw":"23.21","dj":"103.09"},"景洪":{"bw":"22.01","dj":"100.48"},"开远":{"bw":"23.43","dj":"103.13"},"曲靖":{"bw":"25.30","dj":"103.48"},"瑞丽":{"bw":"24.00","dj":"97.50"},"思茅":{"bw":"22.48","dj":"100.58"},"畹町":{"bw":"24.06","dj":"98.04"},"宣威":{"bw":"26.13","dj":"104.06"},"玉溪":{"bw":"24.22","dj":"102.32"},"昭通":{"bw":"27.20","dj":"103.42"}},"西藏自治区":{"拉萨":{"bw":"29.39","dj":"91.08"},"日喀则":{"bw":"29.16","dj":"88.51"}},"陕西省":{"西安":{"bw":"34.17","dj":"108.57"},"安康":{"bw":"32.41","dj":"109.01"},"宝鸡":{"bw":"34.22","dj":"107.09"},"韩城":{"bw":"35.28","dj":"110.27"},"汉中":{"bw":"33.04","dj":"107.01"},"华阴":{"bw":"34.34","dj":"110.05"},"商州":{"bw":"33.52","dj":"109.57"},"铜川":{"bw":"35.06","dj":"109.07"},"渭南":{"bw":"34.30","dj":"109.30"},"咸阳":{"bw":"34.20","dj":"108.43"},"兴平":{"bw":"34.18","dj":"108.29"},"延安":{"bw":"36.35","dj":"109.28"},"榆林":{"bw":"38.18","dj":"109.47"}},"甘肃省":{"兰州":{"bw":"36.04","dj":"103.51"},"白银":{"bw":"36.33","dj":"104.12"},"敦煌":{"bw":"40.08","dj":"94.41"},"嘉峪关":{"bw":"39.48","dj":"98.14"},"金昌":{"bw":"38.28","dj":"102.10"},"酒泉":{"bw":"39.44","dj":"98.31"},"临夏":{"bw":"35.37","dj":"103.12"},"平凉":{"bw":"35.32","dj":"106.40 "},"天水":{"bw":"34.37","dj":"105.42"},"武威":{"bw":"37.56","dj":"102.39"},"西峰":{"bw":"35.45","dj":"107.40"},"玉门":{"bw":"39.49","dj":"97.35"},"张掖":{"bw":"38.56","dj":"100.26"}},"青海省":{"西宁":{"bw":"36.38","dj":"101.48"},"德令哈":{"bw":"37.22","dj":"97.23"},"格尔木":{"bw":"36.26","dj":"94.55"}},"宁夏回族自治区":{"银川":{"bw":"38.27","dj":"106.16"},"青铜峡":{"bw":"37.56","dj":"105.59"},"石嘴山":{"bw":"39.02","dj":"106.22"},"吴忠":{"bw":"37.59","dj":"106.11"}},"新疆自治区":{"乌鲁木齐":{"bw":"43.45","dj":"87.36"},"阿克苏":{"bw":"41.09","dj":"80.19"},"阿勒泰":{"bw":"47.50","dj":"88.12"},"阿图什":{"bw":"39.42","dj":"76.08"},"博乐":{"bw":"44.57","dj":"82.08"},"昌吉":{"bw":"44.02","dj":"87.18"},"阜康":{"bw":"44.09","dj":"87.58"},"哈密":{"bw":"42.50","dj":"93.28"},"和田":{"bw":"37.09","dj":"79.55"},"克拉玛依":{"bw":"45.36","dj":"84.51"},"喀什":{"bw":"39.30","dj":"75.59"},"库尔勒":{"bw":"41.46","dj":"86.07"},"奎屯":{"bw":"44.27","dj":"84.56"},"石河子":{"bw":"44.18","dj":"86.00"},"塔城":{"bw":"46.46","dj":"82.59"},"吐鲁番":{"bw":"42.54","dj":"89.11"},"伊宁":{"bw":"43.55","dj":"81.20"}},"香港":{"香港":{"bw":"21.23","dj":"115.12"}},"澳门":{"澳门":{"bw":"21.33","dj":"115.07"}},"台湾省":{"台北":{"bw":"25.03","dj":"121.30"}}}'
    data = JSON.parse(data)
    return data
}
