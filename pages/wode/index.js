let dlcs = 0;
var xzid = [];
var cdlist_data, glztlist_data;
Vue.createApp({
    data() {
        return {
            cd_sea: "",
            sea_data_list: undefined,
            G_tab: 0,
            dlzt: true,
            user_in: "",
            pass_in: "",
            dljg: "",
            glzt: false,
            yxsl: 0,
            sxzt: 0,
            app_event_ok: false,
            time_sc_arr: false,
            wo_dat_tab: ["存档", "分析", "出题"],
            wx_login_ima: "",
            wx_login_ima_shixiao: true,
            dljt: 0,
        }
    },
    mounted() {
        window.sousuo = this.cd_sea_fun
    },
    watch: {
        cd_sea() {
            if (this.cd_sea.length == 0) {
                console.log("退出搜索");
                this.sea_data_list = undefined;
                this.$forceUpdate()
            }
        },
        G_tab() {
            localStorage.setItem("G_tab", this.G_tab)
        },
    },
    beforeCreate: function() {},
    created: function() {
        window.top.setAllfont_family(document);




        let thar = this;
        document.getElementById('vue').style.opacity = 1;
        this.shuaxin_mianban();
        if (localStorage.getItem("token")?.length > 5) {
            this.get_cundang();
            this.shuaxin_fuzhufenxi();
            this.get_timu();
            window.top.callDB.get('cd_huancun').then(res => {
                thar.cd_data_cl(res)
            });
            this.shuaxin_mianban();
            this.G_tab = localStorage.getItem("G_tab") ? localStorage.getItem("G_tab") : 0
        };
        let dsq1 = setInterval(function() {
            if (localStorage.getItem("APP_QQ_login") == "app_event_ok") {
                thar.app_event_ok = true;
                clearInterval(dsq1)
            }
        }, 500);
        setInterval(() => {
            if (localStorage.getItem("all_shuaixn") == "true") {
                localStorage.setItem("all_shuaixn", "false");
                this.get_cundang(true);
                this.get_fuzhufenxi(true);
                this.get_timu(true)
            }
        }, 100)
    },
    methods: {
        cd_sea_fun() {
            let thar = this;
            if (this.cd_sea.length == 0) {
                window.top.xxk.dibutishi("未输入搜索关键字", 1500);
                return
            }
            if (!localStorage.getItem("token")) {
                window.top.xxk.dibutishi("当前未登录", 1500);
                return
            }
            console.log("搜索关键字", thar.cd_sea);
            window.top.xxk.loading("搜索存档中", true);
            window.top.callFunction({
                name: "web__liuren",
                data: {
                    "type": "sea_cundng",
                    "token": localStorage.getItem("token"),
                    "sea": thar.cd_sea
                },
                success: function(res) {
                    window.top.xxk.loading("搜索存档中", false);
                    window.top.xxk.dibutishi(`搜索到存档${res.result?res.result.length:0}个`, 1500);
                    thar.sea_data_list = res.result;
                    thar.$forceUpdate();
                    console.log(res)
                },
                catch: console.log
            })
        },
        denglu_WX() {
            let thar = this;
            window.top.xxk.loading("加载登录码中", true);
            window.top.callFunction({
                name: "web__liuren",
                data: {
                    type: 'web_get_login_ima'
                },
                success: function(res) {
                    window.top.xxk.loading("加载登录码中", false);
                    thar.wx_login_ima = res.result.ima;
                    thar.wx_login_ima_shixiao = false;
                    localStorage.setItem('wx_login_key', res.result.key);
                    thar.$forceUpdate();
                    thar.dljt = 0;
                    thar.dsq2 = setInterval(function() {
                        thar.ds_get_token()
                    }, 3000)
                },
                catch: console.log
            })
        },
        guanbi_wx_login() {
            clearInterval(this.dsq2);
            this.wx_login_ima = null
        },
        ds_get_token() {
            this.dljt++;
            if (this.dljt > 41) {
                clearInterval(this.dsq2);
                this.wx_login_ima_shixiao = true;
                this.wx_login_then();
                return
            }
            let thar = this;
            window.top.callFunction({
                name: "web__liuren",
                data: {
                    type: 'web_get_login_key',
                    key: localStorage.getItem('wx_login_key')
                },
                success: function(res) {
                    if (res.result.chaoshi_time < new Date().getTime()) {
                        clearInterval(thar.dsq2);
                        thar.wx_login_ima_shixiao = true;
                        thar.wx_login_then();
                        console.log("登录码已过期")
                    }
                    if (res.result.token != "undefined") {
                        thar.wx_login_then();
                        clearInterval(thar.dsq2);
                        thar.wx_login_ima_shixiao = true;
                        localStorage.setItem("token", res.result.token);
                        window.top.get_userinfo();
                        setTimeout(function() {
                            location.reload()
                        }, 600)
                    }
                },
                catch: console.log
            })
        },
        wx_login_then() {
            window.top.callFunction({
                name: "web__liuren",
                data: {
                    type: 'web_wxlogin_then',
                    key: localStorage.getItem('wx_login_key')
                },
                success: function(res) {
                    console.log(res)
                },
                catch: console.log
            })
        },
        denglu_QQ() {
            localStorage.setItem("APP_QQ_login", "qq_login_denglu")
        },
        zhuxiao_QQ() {
            localStorage.setItem("APP_QQ_login", "qq_login_zhuxiao")
        },
        un_fuzhufenxi(item) {
            window.top.xxk.loading("删除中", true);
            let thar = this;
            thar.sxzt = 1;
            let token = localStorage.getItem('token');
            window.top.callFunction({
                name: "web__liuren",
                data: {
                    type: "undele_fuzhufenxi",
                    token: token,
                    name: item
                },
                success(res) {
                    if (res.result == "token_false") {
                        thar.un_login();
                        thar.shuaxin_mianban();
                        window.top.xxk.tan0("提示", "登录失效，请重新登陆", "好的");
                        localStorage.setItem("APP_QQ_login", "qq_login_zhuxiao")
                    }
                    if (res.result.zt == "fuzhufenxi_undel_true") {
                        window.top.xxk.dibutishi("删除成功", 2000);
                        window.top.xxk.loading("删除中", false);
                        window.top.callDB.un(item).then(res => {
                            let xsz = [];
                            for (let i in thar.fenxilist) {
                                if (thar.fenxilist[i].name != item) {
                                    xsz.push(thar.fenxilist[i].name)
                                }
                            }
                            window.top.callDB.set("xiugai_list", xsz).then(res => {
                                thar.shuaxin_fuzhufenxi();
                                thar.sxzt = 3;
                                setTimeout(function() {
                                    thar.sxzt = 0
                                }, 2000)
                            })
                        })
                    }
                    if (res.result == "event_false") {
                        window.top.xxk.dibutishi("删除失败", 2000)
                    }
                    window.top.xxk.loading("删除中", false)
                }
            })
        },
        un_timu(id) {
            let thar = this;
            thar.sxzt = 1;
            window.top.xxk.loading("删除中", true);
            let token = localStorage.getItem('token');
            window.top.callFunction({
                name: "web__liuren",
                data: {
                    type: "undele_timu",
                    token: token,
                    id
                },
                success(res) {
                    if (res.result == "token_false") {
                        thar.un_login();
                        thar.shuaxin_mianban();
                        window.top.xxk.tan0("提示", "登录失效，请重新登陆", "好的");
                        localStorage.setItem("APP_QQ_login", "qq_login_zhuxiao")
                    }
                    if (res.result.zt == "timu_undel_true") {
                        window.top.xxk.dibutishi("删除成功", 2000);
                        window.top.xxk.loading("删除中", false);
                        thar.get_timu(true)
                    }
                    if (res.result == "event_false") {
                        window.top.xxk.dibutishi("删除失败", 2000)
                    }
                    window.top.xxk.loading("删除中", false);
                    thar.sxzt = 3;
                    thar.$forceUpdate()
                }
            })
        },
        shuaxin_fuzhufenxi() {
            let thar = this;
            window.top.callDB.get("xiugai_list").then(res1 => {
                if (res1.length == 0) {
                    thar.fenxilist = []
                }
                if (res1?.length >= 1) {
                    let obj = [];
                    let jc = 0;
                    let zong = res1.length;
                    for (let i in res1) {
                        if (typeof res1[i] != "undefined") {
                            window.top.callDB.get(res1[i]).then(res2 => {
                                let a = {
                                    name: res1[i],
                                };
                                res2.zhizhi && (a.zhizhi = res2.zhizhi);
                                res2.bifa && (a.bifa = res2.bifa);
                                obj.push(a);
                                jc++;
                                if (jc == zong) {
                                    thar.fenxilist = obj
                                }
                            })
                        }
                    }
                };
                if (!res1) {
                    thar.get_fuzhufenxi()
                }
            })
        },
        tab_qh(item) {
            for (let i in this.list_tab) {
                if (this.list_tab[i].name == item) {
                    this.list_tab[i].xz = true
                } else {
                    this.list_tab[i].xz = false
                }
            }
            if (item == "全部") {
                this.cdlist = cdlist_data;
                this.cdlist = this.arr_px(this.cdlist);
                this.glztlist = glztlist_data;
                this.$forceUpdate();
                return
            }
            let ysj1 = cdlist_data;
            let ysj2 = glztlist_data;
            let ysj1_ = [];
            let ysj2_ = [];
            for (let j in ysj1) {
                if (ysj1[j].fujia.cd_bq == item) {
                    ysj1_.push(ysj1[j])
                }
            }
            for (let k in ysj2) {
                if (ysj2[k].fujia.cd_bq == item) {
                    ysj2_.push(ysj2[k])
                }
            }
            this.cdlist = ysj1_;
            this.cdlist = this.arr_px(this.cdlist);
            this.glztlist = ysj2_;
            this.$forceUpdate()
        },
        arr_px(e) {
            if(!e){
                return e
            }
            if (e.length == 0) {
                return e
            }
            e.sort(function(a, b) {
                if (a.hasOwnProperty('QKSJC')) {
                    if (!b.hasOwnProperty('QKSJC')) {
                        return 1
                    } else {
                        return a.QKSJC - b.QKSJC
                    }
                } else {
                    return -1
                }
            });
            e.sort(function(a, b) {
                return b.QKSJC - a.QKSJC
            });
            return e
        },
        cd_shanchu(_id) {
            _id && (xzid = [_id]);
            console.log("删除文档的id是",xzid)

            let thar = this;
            window.top.xxk.loading("删除中", true);
            window.top.callFunction({
                name: "web__liuren",
                data: {
                    type: "undele_cundang_lixian",
                    token: localStorage.getItem('token'),
                    data: xzid.join(',')
                },
                success(res) {
                    console.log("删除返回结果", res.result);
                    if (res.result.zt == 'un_true') {
                        window.top.xxk.dibutishi("删除存档成功", 1500);
                        if (thar.sea_data_list) {
                            let x_obj = [];
                            for (let i in thar.sea_data_list) {
                                if (thar.sea_data_list[i]._id != _id) {
                                    x_obj.push(thar.sea_data_list[i])
                                }
                            }
                            thar.sea_data_list = x_obj
                        }
                        window.top.xxk.loading("删除中", false)
                    } else {
                        window.top.xxk.dibutishi("删除存档失败", 1500)
                    }
                    xzid = [];
                    thar.yxsl = xzid?.length;
                    thar.get_cundang()
                }
            })
        },
        cundang_xz(item) {
            xzid = [];
            for (let i in this.glztlist) {
                if (item == this.glztlist[i]._id) {
                    this.glztlist[i].xz = !this.glztlist[i].xz
                }
                if (this.glztlist[i].xz == true) {
                    xzid.push(this.glztlist[i]._id)
                }
            }
            
            this.yxsl = xzid?.length;
            this.$forceUpdate()
        },
        cundang_get(e) {
            let remove_obj = ["fk", "dy", "ws"];
            for (let i in remove_obj) {
                delete e[`cd_${remove_obj[i]}_ss`]
            }
            e.zhs = e.zhs.charAt(0) + e.zhs.charAt(1);
            let A = JSON.stringify(e);
            localStorage.setItem("lrppcs", A);
            localStorage.setItem("cd_LLK_qjcs", A);
            document.getElementById('LLKsrc').src = "../paipan/index.html";
            localStorage.setItem('cd_LLK_src', "../paipan/index.html");
            document.getElementById('LLKID').style.top = "0vh";
            localStorage.setItem('cd_LLKID_top', "0vh")
        },
        tuichudenglu() {
            this.un_login();
            this.zhuxiao_QQ();
            this.shuaxin_mianban()
        },
        shuaxin_mianban() {
            let a = localStorage.getItem('token')?.length == 32 ? true : false;
            this.dlzt = !a ? true : false
        },
        get_timu(zt) {
            let thar = this;
            thar.sxzt = 1;
            let token = localStorage.getItem('token');
            if (zt === true) {
                sx();
                return
            }
            window.top.callDB.get("usertimu").then(res => {
                if (res?.length > 0) {
                    let list = res;
                    thar.time_sc_arr = false;
                    thar.$forceUpdate();
                    if (list?.length > 0) {
                        thar.time_sc_arr = list;
                        thar.$forceUpdate()
                    }
                } else {
                    sx()
                }
            });

            function sx() {
                window.top.callFunction({
                    name: "web__liuren",
                    data: {
                        type: "get_usertimu",
                        token: token
                    },
                    success(res) {
                        let list = res.result;
                        window.top.callDB.set("usertimu", list);
                        if (res.result == "token_false") {
                            thar.un_login();
                            thar.shuaxin_mianban();
                            window.top.xxk.tan0("提示", "登录失效，请重新登陆", "好的");
                            localStorage.setItem("APP_QQ_login", "qq_login_zhuxiao")
                        }
                        thar.time_sc_arr = false;
                        thar.$forceUpdate();
                        if (list?.length > 0) {
                            thar.time_sc_arr = list;
                            thar.$forceUpdate()
                        }
                    }
                })
            }
        },
        get_fuzhufenxi(e) {
            let thar = this;
            thar.sxzt = 1;
            let token = localStorage.getItem('token');
            window.top.callFunction({
                name: "web__liuren",
                data: {
                    type: "get_fuzhufenxi",
                    token: token
                },
                success(res) {
                    let list = res.result;
                    // console.log("获取到辅助分析", res, list);
                    if (res.result == "token_false") {
                        thar.un_login();
                        thar.shuaxin_mianban();
                        window.top.xxk.tan0("提示", "登录失效，请重新登陆", "好的");
                        localStorage.setItem("APP_QQ_login", "qq_login_zhuxiao")
                    }
                    let fxlist = [];
                    for (let i in list) {
                        fxlist.push(list[i].name);
                        window.top.callDB.set(list[i].name, list[i].data)
                    }
                    window.top.callDB.set('xiugai_list', fxlist).then(res => {
                        thar.shuaxin_fuzhufenxi()
                    });
                    e && window.top.xxk.dibutishi("刷新成功", 2000);
                    thar.sxzt = 3;
                    setTimeout(function() {
                        thar.sxzt = 0
                    }, 2000)
                }
            })
        },
        un_login() {
            localStorage.removeItem("token");
            localStorage.removeItem("user_uuid");
            localStorage.removeItem("user_name");
            localStorage.removeItem("user_TouXiang")
        },
        get_cundang(e) {
            let thar = this;
            thar.sxzt = 1;
            let token = localStorage.getItem('token');
            window.top.callFunction({
                name: "web__liuren",
                data: {
                    type: "get_cundang",
                    token: token
                },
                success(res) {
                    // console.log("获取到存档",res)
                    let list = res.result;
                    for(let i in list){
                        if(typeof list[i]=="string"){
                            list[i]=JSON.parse(list[i])
                        }
                    }
                    if (res.result == "token_false") {
                        thar.un_login();
                        thar.shuaxin_mianban();
                        window.top.xxk.tan0("提示", "登录失效，请重新登陆", "好的");
                        localStorage.setItem("APP_QQ_login", "qq_login_zhuxiao")
                    }
                    thar.cd_data_cl(list);
                    e && window.top.xxk.dibutishi("刷新成功", 2000);
                    window.top.callDB.get('QKJL').then(res => {
                        for (let i in list) {
                            if (list[i]?.QKSJC) {
                                for (let i in res) {
                                    if (res[i]?.QKSJC == list[i]?.QKSJC) {
                                        res[i].cdtxt = list[i].fujia
                                    }
                                }
                            }
                        }
                        window.top.callDB.set('QKJL', res).then(res => {})
                    })
                }
            })
        },
        cd_data_cl(list) {
            let thar = this;
            let glztlist = [];
            let bq = [];
            for (let i in list) {
                if (!bq.includes(list[i].fujia?.cd_bq)) {
                    bq.push(list[i].fujia?.cd_bq)
                }
                let a = list[i];
                a.xz = false;
                glztlist.push(a)
            }
            thar.list_tab = [{
                name: "全部",
                xz: true
            }];
            for (let i in bq) {
                thar.list_tab.push({
                    name: bq[i],
                    xz: false
                })
            }
            cdlist_data = list;
            thar.cdlist = cdlist_data;
            thar.cdlist = thar.arr_px(thar.cdlist);
            glztlist_data = glztlist;
            glztlist_data=glztlist_data.sort(function(a, b) {return b.QKSJC - a.QKSJC});
            thar.glztlist = glztlist_data;
            thar.sxzt = 3;
            setTimeout(function() {
                thar.sxzt = 0
            }, 2000);
            thar.$forceUpdate();
            thar.shuaxin_mianban()
        },
        denglu() {
            let thar = this;
            if (thar.user_in?.length >= 4 && thar.user_in?.length < 17 && thar.pass_in?.length >= 4 && thar.pass_in?.length < 32) {
                if (dlcs > 10) {
                    this.dljg = "登录次数受限制";
                    return
                }
                thar.dljg = "登录中...";
                window.top.callFunction({
                    name: "web__liuren",
                    data: {
                        type: "denglu",
                        user: thar.user_in,
                        pass: md5(thar.pass_in)
                    },
                    success(res) {
                        if (res.result == 'denglu_user_false') {
                            thar.dljg = "账号不存在";
                            dlcs = dlcs + 1
                        }
                        if (res.result == 'denglu_pass_false') {
                            thar.dljg = "密码错误";
                            dlcs = dlcs + 1
                        }
                        if (res.result.token) {
                            localStorage.setItem("token", res.result.token);
                            window.top.get_userinfo();
                            thar.dljg = "登录成功";
                            thar.get_cundang();
                            thar.get_fuzhufenxi();
                            thar.get_timu(true)
                        }
                    }
                })
            } else {
                thar.dljg = "账号密码长度不正确"
            }
        },
        bjktq(data, key, tezheng) {
            if (typeof data == "object") {
                for (let i in data) {
                    data = data + data[i] + '\n'
                }
            } else {
                data = data
            }
            let obj = {
                tezheng: tezheng,
                key: key,
                value: data
            };
            window.top.callDB.set('bjq_guodu', obj).then(res => {
                if (res) {
                    document.getElementById('BJKLLKsrc').src = "../../components/bianjiye/index.html";
                    document.getElementById('BJKLLK').style.top = "0vh"
                }
            })
        },
        bjkgb() {
            document.getElementById('BJKLLK').style.top = "220vh"
        },
    }
}).mount('#vue');
document.getElementById('SSK_ID')?.addEventListener('keyup', function(e) {
    if (e.keyCode == 13 || e.keyCode == 37 || e.keyCode == 42) {
        window.sousuo()
    }
});

function llkgb() {
    document.getElementById('LLKID').style.top = "220vh";
    localStorage.setItem('cd_LLKID_top', "220vh")
}