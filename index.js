let parseQuery = (url) => {
    q = {};
    url.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (q[k] = v));
    return q
};

let url_obj = parseQuery(location.href);


setInterval(() => {
    if (document.documentElement?.clientWidth >= 900) {
        if (document.getElementById("back_yun_id").src == "") {
            document.getElementById("back_yun_id").src = "./components/back_yun/index.html"
        }
        document.getElementById("back_yun_id").style.opacity = 1
        document.getElementById("min_windown_bt").style.display = "inline"

    }
    if (document.documentElement?.clientWidth < 900) {
        if (document.getElementById("back_yun_id").src == "./components/back_yun/index.html") {
            document.getElementById("back_yun_id").src = ""
        }
        document.getElementById("back_yun_id").style.opacity = 0
        document.getElementById("min_windown_bt").style.display = "none"
    }
}, 50);
setInterval(() => {
    if (localStorage.getItem("app_imna_get_file")) {
        document.body.style.background = "url('" + localStorage.getItem("app_imna_get_file") + "')"
    }
}, 1500)


document.title = "六壬起个课 - " + location.host + " - 国际版";
try {
    f = new Function("var t = () =>{};")
} catch (e) {
    confirm('当前浏览器版本不支持ES6!代码运行不兼容\n继续访问可能会失败\n访问失败时请更换或者升级最新版本浏览器')
}

let SLJC = 1;
setInterval(() => SLJC > 0 && SLJC--, 1000);
function callFunction({
    data,
    success
}) {
    SLJC++;
    let a = (new Error()).stack.split("\n");
    a = a[a.length - 1].indexOf('anonymous');
    if (a != -1) {
        return false
    };
    if (SLJC < 10) {
        let xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                // console.log("请求到数据:", xmlhttp.responseText)
                if (xmlhttp.responseText.indexOf("<svg xmlns") != -1) {
                    return success({ result: xmlhttp.responseText })
                } else {
                    if (xmlhttp.responseText.length > 5) {
                        let fh
                        try {
                            fh = JSON.parse(xmlhttp.responseText)
                        } catch (error) {
                            fh = xmlhttp.responseText;
                        }
                        return success({ result: fh })
                    } else {
                        return success({
                            res: {
                                result: {
                                    data: []
                                }
                            }
                        })
                    }

                }

            }
            if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
                window.top.xxk.dibutishi("服务器不可用，请求状态:" + xmlhttp.status, 2500)
            }
        };
        xmlhttp.open("post", "https://fun-4gztnwiq22c41afc-1303024261.ap-shanghai.app.tcloudbase.com/web_liuren", true);
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        // console.log("发起请求",data)
        xmlhttp.send(JSON.stringify(data))
    }
    if (SLJC > 20) {
        return success({
            res: {
                result: {
                    data: []
                }
            }
        })
    }
}

const Arr_clone = ['圆盘', '群聊']//默认关闭的页面
const padata = {
    首页: "index",
    课例: "keli",
    资料: "ziliao",
    圆盘: "shoudong_yp",
    更多: "gengduo",
    群聊: "qunliao",
    本地: "cd_localhost",
    我的: "wode",
};

function pages_int(pages_ini) {
    if (!pages_ini) {
        let new_data = {}
        for (let i in padata) {
            !Arr_clone.includes(i) ? new_data[i] = true : new_data[i] = false
        }
        let data = JSON.stringify(new_data);
        localStorage.setItem("pages_ini", data);
        return new_data
    } else {
        return JSON.parse(pages_ini);
    }
}
let pages_ini = pages_int(localStorage.getItem("pages_ini"));
if (Object.keys(padata).length != Object.keys(pages_ini).length) {
    //当新增页面后，刷新配置缓存
    localStorage.removeItem("pages_ini")
    pages_ini = pages_int(localStorage.getItem("pages_ini"));
}


let page_config = {};

Object.entries(pages_ini).forEach(([outerKey, innerObj]) => {
    Object.entries(innerObj).forEach(([innerKey, value]) => {
        if (value === true) {
            page_config[i] = "pages/" + padata[innerKey] + "/index.html"
        }
    });
});

if (Object.keys(page_config).length == 0) {//兼容旧版本
    for (let i in pages_ini) {
        if (pages_ini[i] === true) {
            page_config[i] = "pages/" + padata[i] + "/index.html"
        }
    }
}


let gages_length = Object.keys(pages_ini).filter(key => pages_ini[key]).length;
if (gages_length === 1) {
    let a = document.querySelector('.xb_a');
    a.parentNode.removeChild(a);
    setTimeout(() => {
        document.getElementById("llkid_0").style.height = '100dvh';
        document.getElementById("W2").style.height = '100dvh'
    }, 200)
}
if (location.href.indexOf('debug') != -1) {
    document.title = "六壬起个课(测试版)"
}
qksj();

function qksj() {
    let y_key = localStorage.getItem('time_key');
    let date = new Date();
    let dtkey = date.getMonth() + 1 + "-" + date.getDate();
    if (y_key != dtkey) {
        console.log("缓存过期");
        let hclist = ['ZILIAO_LIST'];
        for (let i in hclist) {
            localStorage.removeItem(hclist[i])
        }
        localStorage.setItem('time_key', dtkey)
    } else {
        localStorage.setItem('time_key', dtkey)
    }
};
let APP_gx = {
    list: {}
}
new Vue({
    el: '#vue',
    data: function () {
        return {
            xinxiaoxi: false,
            Defer: 0,
            qrcodeImg: "",
            dhdata: [],
            page_config: page_config,
            APP_gx,
        }
    },
    mounted() {
        window.xb_tab = this.xb_tab
        window.xinxiaoxi_fun = this.xinxiaoxi_fun
    },
    created: function () {
        window.top.setAllfont_family(document);
        let thar = this;

        if (localStorage.getItem("back_sel_arr")) {
            let A = JSON.parse(localStorage.getItem("back_sel_arr"))
            if (A[1]?.xz) {
                window.top.callDB.get('back_ima_get_file').then(res => {
                    if (res?.length > 1) {
                        document.body.style.background = 'url(' + res + ')'
                        document.body.style['background-size'] = '100% 100%'
                        document.body.style['background-position'] = 'center'
                        document.body.style['background-repeat'] = 'no-repeat'
                    }
                })
            }
        }

        document.getElementById('vue').style.opacity = 1;
        for (let i in this.page_config) {
            this.dhdata.push({
                xzzt: false,
                src: this.page_config[i],
                name: i,
            })
        };
        this.dhdata[0].xzzt = true;
        let a = localStorage.getItem("index_db_tab");
        if (a) {
            if (a.length > 1) {
                this.xb_tab(a)
            } else {
                this.xb_tab("首页")
            }
        }
        if (url_obj) {
            if (url_obj.qkid) {
                window.top.xxk.loading("获取分享中", true);
                callFunction({
                    name: "web__liuren",
                    data: {
                        type: 'fx_cundang_get',
                        sbm: url_obj.qkid
                    },
                    success: function (res) {
                        let a = res.result.data;
                        console.log(res)
                        if (a.length == 1) {
                            let qkdata = a[0][url_obj.qkid];
                            localStorage.setItem("qkfxdata", JSON.stringify(qkdata));
                            thar.xb_tab("首页")
                        }
                        window.top.xxk.loading("获取分享中", false)
                    }
                })
            }
        }
        this.$forceUpdate()
    },
    methods: {
        xinxiaoxi_fun(tx, name, text) {
            console.log("全屏聊天", tx, name, text)
            let thar = this
            thar.xinxiaoxi = { tx, name, text }
            setTimeout(() => {
                thar.xinxiaoxi = false
            }, 3000)
        },
        xb_tab(name) {
            localStorage.setItem("index_db_tab", name);
            let index = 0;
            for (let i in this.dhdata) {
                if (this.dhdata[i].name == name) {
                    this.dhdata[i].xzzt = true;
                    this.dhdata[i].txt_color = {
                        color: "#1b72ff",
                        fontSize: '50%'
                    };
                    index = i
                } else {
                    this.dhdata[i].xzzt = false
                }
            };
            localStorage.setItem("index_db_index", index);
            this.$forceUpdate();
            return index
        }
    }
});

function fanhuijian(e) {
    console.log("返回键关闭弹窗");
    let page_index = localStorage.getItem("index_db_index");
    if (!page_index) {
        page_index = 0
    }
    let pages = document.getElementById("llkid_" + page_index);
    pages.contentWindow.llkgb()
}

function APP_login() {
    let a = localStorage.getItem("APP_QQ_login");
    if (a.length > 2 && a != 'app_event_ok') {
        return a
    } else {
        return 'app_event_ok'
    }
}

function APP_dw() {
    let a = localStorage.getItem("APP_dw");
    localStorage.removeItem("APP_dw");
    if (a.length > 2) {
        return a
    } else {
        return 'app_event_ok'
    }
}

function APP_ZR(e) {
    localStorage.setItem("token", e);
    setTimeout(function () {
        get_userinfo()
    }, 500)
}

function get_userinfo() {
    callFunction({
        name: "web__liuren",
        data: {
            type: "get_snsuuid",
            token: localStorage.getItem("token"),
        },
        success(res) {
            console.log("获取账户资料", res);
            res = res.result;
            localStorage.setItem("user_name", res.user_name);
            localStorage.setItem("user_TouXiang", res.user_TouXiang);
            localStorage.setItem("user_uuid", res.uuid_);
            localStorage.setItem("user_vip", res.user_vip);
            location.reload()
        }
    })
}
window.reload = () => {
    location.reload()
};
window.copyTextToClipboard = copyTextToClipboard

async function removeEntriesNotInArray(databaseName, objectStoreName, keepKeys) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(databaseName, 1);

        request.onerror = (event) => {
            console.error("Database error:", event.target.errorCode);
            reject("Failed to open database");
        };

        request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction([objectStoreName], 'readwrite');
            const objectStore = transaction.objectStore(objectStoreName);

            const keyRange = IDBKeyRange.lowerBound(0); // 获取所有键值对
            const requestAll = objectStore.openCursor(keyRange);

            const keysToRemove = [];

            requestAll.onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    // 检查当前项的键是否不在保留列表中
                    if (!keepKeys.includes(cursor.key)) {
                        keysToRemove.push(cursor.key);
                    }
                    cursor.continue();
                } else {
                    // 遍历完成后，根据收集的键删除相应的记录
                    keysToRemove.forEach(key => {
                        objectStore.delete(key);
                    });

                    transaction.oncomplete = () => {
                        db.close();
                        resolve(`Successfully removed ${keysToRemove.length} entries.`);
                    };

                    transaction.onerror = (event) => {
                        console.error("Transaction error during deletion:", event.target.errorCode);
                        reject("Deletion transaction failed");
                    };
                }
            };

            transaction.onabort = (event) => {
                console.error("Transaction aborted:", event.target.errorCode);
                reject("Transaction aborted");
            };
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(objectStoreName)) {
                db.createObjectStore(objectStoreName);
            }
        };
    });
}
function un_cj_data() {
    let cj_data_index = localStorage.getItem("cj_data_index")
    if (!cj_data_index) {
        cj_data_index = "0|10"
        localStorage.setItem("cj_data_index", cj_data_index)
    }
    let a = cj_data_index.split("|")

    a[0] = Number(a[0]) + 1
    if (a[0] > a[1]) {
        // 清理IndexDB的陈旧数据
        const keepTheseKeys = ["QKJL", "fm_svg", "ai_tokens_de_arr", "usertimu", "localhost_cd"];//保留不清理
        removeEntriesNotInArray('helloIndexDB', 'helloStore', keepTheseKeys)
            .then(message => {
                // console.log("陈旧数据清理完毕，",message);
            })
            .catch(error => {
                console.error("陈旧数据清理出现错误", error);
            });
        a[0] = 0
    }
    cj_data_index = a[0] + "|" + a[1]
    localStorage.setItem("cj_data_index", cj_data_index)
}
un_cj_data()

function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) { // 现代浏览器且页面为HTTPS
        navigator.clipboard.writeText(text).then(function () {
            console.log('复制成功');
        }, function (err) {
            console.error('复制失败: ', err);
        });
    } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) { // 兼容旧版浏览器
        var textarea = document.createElement('textarea');
        textarea.textContent = text;
        textarea.style.position = 'fixed'; // 防止影响页面布局
        document.body.appendChild(textarea);
        textarea.select(); // 选中内容
        try {
            var result = document.execCommand('copy'); // 尝试复制
            if (result) {
                console.log('复制成功');
            } else {
                console.error('复制失败');
            }
        } catch (err) {
            console.error('复制失败: ', err);
        }
        document.body.removeChild(textarea); // 移除临时textarea
    } else {
        console.error('当前浏览器不支持复制到剪贴板');
    }
}

if (location.host != "jkl.6ren.cn") {
    // 创建一个用于检测控制台是否打开的元素
    const element = document.createElement('div');
    Object.defineProperty(element, 'id', {
        get: function () {
            // 当控制台打开时，会尝试获取元素的属性，触发这个getter
            showConsoleMessage();
            return '';
        }
    });

    // 显示样式化的控制台消息
    function showConsoleMessage() {
        // 防止重复显示
        if (window.consoleMessageShown) return;
        window.consoleMessageShown = true;

        // 样式化的控制台输出
        console.log(
            '%c彦祖!',
            'color: #fff; background:rgb(219, 106, 106); font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 5px;'
        );
        console.log(
            '%c你又来debug我的前端了',
            'color: #333; background: #ffd700; font-size: 16px; padding: 8px 15px; border-radius: 3px;'
        );
        console.log(
            '%c休息一下好不好？',
            'color: #fff; background: #333; font-size: 14px; padding: 5px 10px; border-radius: 3px; margin-top: 5px;'
        );
    }

    // 开始检测控制台
    function checkConsole() {
        console.log(element);
        console.clear(); // 清除检测痕迹
    }

    // 延迟执行以避免页面加载时的误判
    setTimeout(checkConsole, 1000);

    // 也可以监听可能的键盘快捷键
    document.addEventListener('keydown', function (e) {
        // 检测F12、Ctrl+Shift+I、Ctrl+Shift+J等
        if (e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
            (e.metaKey && e.altKey && e.key === 'C')) {
            showConsoleMessage();
        }
    });
}
