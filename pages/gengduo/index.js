new Vue({
    el: '#vuest',
    data() {
        return {
            wplist_isOpen:false,
            vip_arr: {
                0: "正式会员",
                1: "赞助会员",
                404: "系统提示",
                998: "管理员",
                999: "超级管理员"
            },
            ShenXiangtu: [
                {
                    name: "九天玄女娘娘",
                    path: "./tujian.html?img=九天玄女老画风格"
                },
                {
                    name: "张道陵天师",
                    path: "./tujian.html?img=张道陵天师"
                },
                {
                    name: "伏羲",
                    path: "./tujian.html?img=伏羲画像"
                },
                {
                    name: "太上老君",
                    path: "./tujian.html?img=太上老君骑青牛"
                },
            ],
            st_ARR: [{
                name: "入门级",
                path: "./danxuan.html?tx=danxuan&nd=0&tmsl=10",
                fenshu: localStorage.getItem('shuatifen_0') ? "(得分:" + localStorage.getItem('shuatifen_0') + ")" : "(未刷题)",
            }, {
                name: "初级",
                path: "./danxuan.html?tx=danxuan&nd=1&tmsl=10",
                fenshu: localStorage.getItem('shuatifen_1') ? "(得分:" + localStorage.getItem('shuatifen_1') + ")" : "(未刷题)",
            }, {
                name: "中级",
                path: "./danxuan.html?tx=danxuan&nd=2&tmsl=10",
                fenshu: localStorage.getItem('shuatifen_2') ? "(得分:" + localStorage.getItem('shuatifen_2') + ")" : "(未刷题)",
            }, {
                name: "末级",
                path: "./danxuan.html?tx=danxuan&nd=3&tmsl=10",
                fenshu: localStorage.getItem('shuatifen_3') ? "(得分:" + localStorage.getItem('shuatifen_3') + ")" : "(未刷题)",
            }, {
                name: "挑战网友出的题",
                path: "./danxuan.html?tx=danxuan&nd=4&tmsl=10",
                fenshu: localStorage.getItem('shuatifen_4') ? "(得分:" + localStorage.getItem('shuatifen_4') + ")" : "(未刷题)",
            }, {
                name: "给网友出题",
                path: "./chuti.html",
            },],
            doc_zhou: [{
                xgzl: {}
            }],
            user_TouXiang: "undefined",
            user_name: "昵称",
            user_uuid: "id",
            user_vip: "",
            user_set_code: false,
            doc_zhou_index: 0,
            info_QQ: "",
            info_name: "",
            AI_tokens: false,
            ai_tokens_de_arr: false,
            ai_tokens_de_arr_zt: false,
            kami: "",
            fangdou: true,
            set_tokens_t: 0,
            tokens_t: "",
            APP_ver: localStorage.getItem("APP_VER")
        }
    },
    mounted() { },
    created() {
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                // 生成一个从0到i之间的随机索引j
                const j = Math.floor(Math.random() * (i + 1));
                // 交换元素array[i]和array[j]
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }




        this.ShenXiangtu = shuffleArray([...this.ShenXiangtu])
        window.top.setAllfont_family(document);


        let thar = this;
        let url_obj = {};
        setInterval(function () {
            let arr = ["name", "uuid", "TouXiang", "vip"];
            for (let i of arr) {
                let a = localStorage.getItem("user_" + i);
                if (a) {
                    thar["user_" + i] = a
                }
            }
            thar.$forceUpdate()
        }, 500);
        if (location.search.split('#')[0] != '') {
            let a = location.search.split('#')[0];
            if (a.length >= 1) {
                let b = a.split('?')[1];
                if (b.length >= 1) {
                    let c = b.split("&");
                    for (let i in c) {
                        let a = c[i].split("=");
                        url_obj[a[0]] = a[1]
                    }
                }
            }
        };
        if (url_obj.nd) {
            window.top.callFunction({
                name: 'web__liuren',
                data: {
                    type: "get_tm",
                    nd: url_obj.nd,
                    tx: url_obj.tx,
                    tmsl: url_obj.tmsl
                },
                success(res) {
                    console.log(JSON.stringify(res.result));
                    for (let i in res.result) {
                        res.result[i].dn_sel = ""
                    }
                    thar.tm_arr = res.result;
                    thar.$forceUpdate()
                },
                fail: console.error
            })
        }
        window.top.callDB.get("get_doc_zl").then(res => {
            if (res.length > 3) {
                thar.doc_zhou = res;
                thar.$forceUpdate()
            } else {
                window.top.callFunction({
                    name: 'web__liuren',
                    data: {
                        type: "get_doc_zl"
                    },
                    success(res) {
                        let a = res.result.data.arr;

                        function objArraySort(objArr, key) {
                            let result = objArr.slice(0);
                            return result.sort((a, b) => a[key] - b[key])
                        }
                        a = objArraySort(a, "index");
                        window.top.callDB.set("get_doc_zl", a).then(res => { });
                        thar.doc_zhou = a;
                        thar.$forceUpdate()
                    },
                    fail: console.error
                })
            }
        })
        if (localStorage.getItem("token")) {
            if (localStorage.getItem("ai_tokens")) {
                this.AI_tokens = localStorage.getItem("ai_tokens")
                window.top.callDB.get("ai_tokens_de_arr").then(res => {
                    if (res?.ai_tokens_de_arr?.length > 1) {
                        this.ai_tokens_de_arr = res.reverse()
                        this.$forceUpdate()
                    }

                })

            } else {
                this.get_ai_token()
            }

        }

    },
    methods: {
        to_kfz() {
            localStorage.setItem("APP_dw", "QQfkz");
        },
        add_tokens_kami() {
            //生成卡密
            let thar = this
            window.top.callFunction({
                name: "web__liuren",
                data: {
                    type: "add_tokens_kami",
                    token: localStorage.getItem("token"),
                    set_tokens_t: thar.set_tokens_t

                },
                success(res) {
                    console.log(res)
                    if (res == "400") {
                        window.top.xxk.dibutishi('无耻老贼，休得伤我软件', 50500);
                    } else {
                        thar.tokens_t = res.result.kami
                    }


                }
            })
        },
        duihuankami() {
            let thar = this
            if (!localStorage.getItem("token")) {
                window.top.xxk.dibutishi('未登录', 1500);
                return
            }
            if (thar.kami.length < 5) {
                window.top.xxk.dibutishi('卡密长度不够', 1500);
                return
            }
            thar.fangdou = false
            window.top.callFunction({
                name: "web__liuren",
                data: {
                    type: "get_kami",
                    token: localStorage.getItem("token"),
                    kami: thar.kami

                },
                success(res) {
                    thar.fangdou = true
                    console.log("兑换结果", res);
                    if (res.result?.errMsg == "collection.update:ok") {
                        window.top.xxk.dibutishi('兑换成功', 1500);
                        thar.get_ai_token(true)
                    }
                    if (res.result == "kami:null") {
                        window.top.xxk.dibutishi('卡密不存在', 1500);
                    }
                    if (res.result == "kami:undefine") {
                        window.top.xxk.dibutishi('卡密未输入', 1500);
                    }
                }
            })
        },
        sjc_to_dt(timestamp) {
            let date = new Date(timestamp);
            let y = date.getFullYear();
            let m = date.getMonth() + 1;
            let d = date.getDate();
            let h = date.getHours();
            let i = date.getMinutes();
            let s = date.getSeconds();
            return y + "年" + m + "月" + d + "日" + h + "时" + i + "分" + s + "秒"
        },
        get_ai_token(e) {
            let thar = this
            window.top.callFunction({
                name: "web__liuren",
                data: {
                    type: "get_AI_token",
                    token: localStorage.getItem("token"),
                },
                success(res) {
                    console.log("AI使用情况", res);
                    res = res.result;
                    thar.AI_tokens = res.ai_tokens
                    localStorage.setItem("ai_tokens", res.ai_tokens)
                    thar.ai_tokens_de_arr = res.ai_tokens_de_arr.reverse()
                    window.top.callDB.set("ai_tokens_de_arr", res.ai_tokens_de_arr)
                    thar.$forceUpdate()
                    if (e) {
                        window.top.xxk.dibutishi("更新成功", 2000)
                    }
                }
            })
        },
        sava_info() {
            let thar = this;
            let data = {
                token: localStorage.getItem('token'),
                type: "set_info",
                QQ: this.info_QQ,
                user_name: this.info_name,
            };
            window.top.callFunction({
                name: 'web__liuren',
                data: data,
                success(res) {
                    if (res.result.msg == 'name_set_ok') {
                        window.top.xxk.dibutishi("修改资料成功", 1500);
                        localStorage.setItem("user_name", res.result.data.user_name);
                        localStorage.setItem("user_TouXiang", res.result.data.user_TouXiang)
                    } else {
                        window.top.xxk.dibutishi("修改资料失败", 1500)
                    }
                },
                fail: console.error
            })
        },
        copyUrl(url, pass) {
            localStorage.setItem("APP_dw", `wangpan|${url}|${pass}`);

            if (!localStorage.getItem("APP_ver")) {
                window.top.copyTextToClipboard(pass);
                setTimeout(() => {
                    window.open(url)
                }, 300)

            }

        },
        tz_a(e) {
            if (!localStorage.getItem("token") && e == './chuti.html') {
                console.log("未登录，跳转登录页面");
                window.top.xxk.dibutishi("当前未登录", 1500);
                return
            }
            location.href = e
        },
        tz_b(url_path) {
            location.href = url_path
        }
    }
});