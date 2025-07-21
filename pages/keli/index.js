let that = this;
let sszhi_txt = "徐次宾|张官德|陈公献|邵彦和|刘赤江|韦千里|祝泌|程树勋|求财|婚姻|出行|赴任".split("|");
new Vue({
    el: '#vue',
    data() {
        return {
            zhs: null,
            grxzfs: null,
            xyyjzzt: 0,
            pages_index: 0,
            sszhi: sszhi_txt[Math.floor(Math.random() * sszhi_txt.length)],
            fylist: [],
            jiazaiwanbi: false
        }
    },
    beforeCreate: function() {},
    created: function() {
        window.top.setAllfont_family(document) 
        this.jiazaiys(1);
        this.jitc();
        this.urlss()
    },
    watch: {
        sszhi(newName, oldName) {
            if (newName == "") {
                this.fylist = [];
                this.jiazaiys(this.pages_index++);
                this.xyyjzzt = 0
            }
        },
    },
    mounted() {
        window.sousuo = this.sousuo
    },
    methods: {
        gundong_centen() {
            if (localStorage.getItem("index_db_index") == 1) {
                let textarea = document.getElementsByClassName('wsdyfk_gdt');
                for (let i of textarea) {
                    if (i.innerHTML.length > 20 && i.scrollLeft == 0) {
                        let scrollWidth = i.scrollWidth;
                        let clientWidth = i.clientWidth;
                        let scrollLeft = (scrollWidth - clientWidth) / 2;
                        let bj = 0;
                        let dsq = setInterval(() => {
                            if (scrollLeft < bj) {
                                clearInterval(dsq)
                            }
                            bj = bj + (scrollLeft * 0.02);
                            i.scrollLeft = bj
                        }, 10)
                    }
                }
            }
        },
        jzk_xs() {
            if (document.getElementById('vue').style.opacity != 1) {
                document.getElementById('vue').style.opacity = 1;
                document.getElementById('vue').style.display = "block";
                document.getElementById('jzdh').style.opacity = 0;
                document.getElementById('jzdh').remove()
            }
        },
        urlss() {
            if (localStorage.getItem("klss")?.length > 1) {
                this.sszhi = decodeURI(localStorage.getItem("klss"));
                this.sousuo();
                localStorage.setItem("klss", "")
            }
        },
        jitc() {
            localStorage.setItem("lrppcs", localStorage.getItem("kl_LLK_qjcs"));
            let a = localStorage.getItem('kl_LLKID_top');
            document.getElementById('LLKID').style.top = a ? a : "220vh";
            let b = localStorage.getItem('kl_LLK_src');
            document.getElementById('LLKsrc').src = b ? b : ""
        },
        jiazaiys(index) {
            var thar = this;
            this.xyyjzzt = 1;
            let key = 'keli_index_' + index;
            window.top.callDB.get(key).then(res => {
                if (res) {
                    thar.jzk_xs();
                    let data = res;
                    if (data == "加载完毕") {
                        this.jiazaiwanbi = true
                    }
                    let jsz = thar.fylist;
                    let xsz = data;
                    for (let i in xsz) {
                        jsz.push(xsz[i])
                    }
                    thar.fylist = jsz;
                    thar.xyyjzzt = 0;
                    setTimeout(() => {
                        thar.gundong_centen()
                    }, 300)
                } else {
                    window.top.callFunction({
                        name: "web__liuren",
                        data: {
                            type: "fy_kl",
                            page: index
                        },
                        success(res) {
                            thar.jzk_xs();
                            let data = res.result.data;
                            if (data == "加载完毕") {
                                this.jiazaiwanbi = true
                            } else {
                                window.top.callDB.set(key, data)
                            }
                            let jsz = thar.fylist;
                            let xsz = data;
                            for (let i in xsz) {
                                jsz.push(xsz[i])
                            }
                            thar.fylist = jsz;
                            thar.xyyjzzt = 0;
                            setTimeout(() => {
                                thar.gundong_centen()
                            }, 300)
                        }
                    })
                }
            })
        },
        sousuo() {
            var thar = this;
            if (thar.sszhi.length == 0) {
                return
            };
            this.xyyjzzt = 3;
            window.top.xxk.loading("搜索中", true);
            let key = "keli_value_" + this.sszhi;
            window.top.callDB.get(key).then(res => {
                if (res) {
                    console.log('搜索缓存');
                    window.top.xxk.loading("搜索中", false);
                    thar.fylist = res
                } else {
                    window.top.callFunction({
                        name: "web__liuren",
                        data: {
                            type: "ssgfkl",
                            value: thar.sszhi
                        },
                        success(res) {
                            window.top.xxk.loading("搜索中", false);
                            let data = res.result;
                            window.top.callDB.set(key, data);
                            thar.fylist = data
                        }
                    })
                }
            })
        },
        keliqiju(e) {
            let CDBQ = ["ws", "dy", "fk"];
            const qkcs = {
                QKSJC: new Date().getTime(),
                type: "paipan",
                yj: e.zs_yuejiang,
                zhs: e.zhs.substr(e.zhs.substr.length - 2, e.zhs.substr.length),
                grxz: e.grxzfs,
                zygr: e.zygr?e.zygr:"自动选择",
                sex: "男",
                age: "0",
                dt: {
                    y: e.zs_y,
                    m: e.zs_m,
                    d: e.zs_d,
                    h: e.zs_h,
                },
                shehai: "孟仲季",
                fujia: {
                    cd_bq: "收藏",
                    cd_ws: e.cd_ws_qw ? e.cd_ws_qw : e.cd_ws,
                    cd_dy: e.cd_dy_qw ? e.cd_dy_qw : e.cd_dy,
                    cd_fk: e.cd_fk_qw ? e.cd_fk_qw : e.cd_fk
                }
            };
            let A = JSON.stringify(qkcs);
            localStorage.setItem("lrppcs", A);
            localStorage.setItem("kl_LLK_qjcs", A);
            document.getElementById('LLKsrc').src = "../paipan/index.html";
            localStorage.setItem('kl_LLK_src', "../paipan/index.html");
            document.getElementById('LLKID').style.top = "0vh";
            localStorage.setItem('kl_LLKID_top', "0vh")
        },
    }
});
document.getElementById('SSK_ID')?.addEventListener('keyup', function(e) {
    if (e.keyCode == 13 || e.keyCode == 37 || e.keyCode == 42) {
        window.sousuo()
    }
});

function llkgb() {
    document.getElementById('LLKID').style.top = "220vh";
    localStorage.setItem('kl_LLKID_top', "120vh")
}