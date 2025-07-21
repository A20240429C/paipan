// // 保存原始方法
const originalSetItem = localStorage.setItem;

// 重写 setItem 方法
localStorage.setItem = function (key, value) {
    // 创建一个 Error 对象来获取调用栈
    const stackTrace = new Error().stack;

    // 如果是我们关心的 key
    if (key === 'fgpz_xz') {
        console.log(`localStorage key "${key}" was modified with value:`, value);
        console.log('Call stack:', stackTrace);
    }

    // 调用原始方法
    originalSetItem.apply(this, arguments);
};




// const sse_host='https://lrqgk-sdeepseek-hxydhxtsry.cn-hangzhou.fcapp.run'//调试版
const sse_host = 'https://lrqgk-sdeepseek-vyjgskdjkh.cn-hangzhou.fcapp.run'//发布版


// const paipan_host='https://paipan-ren-ikrxtdiroe.cn-hangzhou.fcapp.run'//调试版
const paipan_host = 'https://paipan-ren-lglrrhphjc.cn-hangzhou.fcapp.run'//发布版

var pages = "未初始化", PPDATA = {}, pptxt = {};
let three_beidou, three_xyyp
var PP_EVEN = JSON.parse(localStorage.getItem("lrppcs"));
PP_EVEN.fujia.cd_bq = PP_EVEN.fujia.cd_bq ? PP_EVEN.fujia.cd_bq : "朋友";
if (PP_EVEN._id) {
    PPDATA.set_up = true
}
if (PP_EVEN.bd) {
    PPDATA.set_bdup = true
    delete PP_EVEN.bd;
}
if (!PP_EVEN.dt.s) {
    PP_EVEN.dt.s = 30
}
let mbkd = document.getElementById("PPMB_id").style.margin;
mbkd = mbkd.split("vw")[0];
let DGK = (95 - Number(mbkd)) / 4;
PPDATA.fgp_to_ima_data = {
    erweima: false,
    keti: false,
    to_ima: false,
    images: undefined
}
PPDATA.transform = {
    scale: 1,
    rotate: 0,
    translate: { x: 0, y: 0 }
}
PPDATA.touchState = {
    initialDistance: null,
    initialAngle: null,
    initialScale: 1,
    initialRotate: 0,
    initialTranslate: { x: 0, y: 0 },
    initialTouchPoints: []
}
PPDATA.APP_ver = 0;
PPDATA.AI_init_text_index = 0
PPDATA.AI_init_text = ['还没有开始分析，可在下方输入框输入问题 ', "获取对话记录中....", "获取完毕"];
PPDATA.gjp_sksc_gd = 600
PPDATA.gejupan_shensha = []
PPDATA.ppkgkd = "height:100vw;width:100vw;";
PPDATA.dgkd = "width:" + (DGK * 0.95) + "vw;height: calc(" + (DGK * 0.95) + "vw / 3);";
PPDATA.dggk = "height:" + DGK + "vw;width:" + DGK + "vw;";
PPDATA.sgkd = "height:" + DGK + "vw;width:" + (DGK * 2) + "vw;";
PPDATA.mbtx = "opacity:0;z-index:-1000";
PPDATA.mb_mg = "某宫";
PPDATA.mb_srgfx = "十二神临天盘";
PPDATA.mb_sdgfx = "十二神临地盘";
PPDATA.mb_ss = "神煞";
PPDATA.fz_but = "复制";
PPDATA.copy_md_text = "复制";
PPDATA.mb_s = "神盘";
PPDATA.mb_t = "天盘";
PPDATA.url_fx = "分享此课";
PPDATA.AI_OUT_MD = ""
PPDATA.AI_tiwenvalue = ""
let xxz = "fg_sj|fg_tdp|fg_zs12|fg_sksc|shu|heng|jianyue|jianyuefangge|style1".split("|");

for (let i in xxz) {
    let a = xxz[i] + "_fontsize";
    PPDATA[a] = (localStorage.getItem(a) ? localStorage.getItem(a) : 'font-size:90%');
}
PPDATA.xnbms = PP_EVEN.xnbms ? PP_EVEN.xnbms : [];
PPDATA.AI_WD_DATA = []
const page_config = {
    dbtab: ["辅助", "神煞", "工具", "盘面", "存档", "AI"],
    fztab: ["直指", "集应钤", "立成", "毕法", "课经", "分类占"],
    pmtab: ["方格盘", "横排盘", "竖排盘", "圆盘", "简约", "简约方格", '仿古', '样式1', "3D模型", "格局盘"],
    CD_BQ: ["朋友", "网友", "家人", "收藏", "其他"],
    ZYGR: ["自动选择", "昼贵", "夜贵"],
}
for (let i in page_config) {
    let sz = [];
    for (let j in page_config[i]) {
        if (j == 0) {
            sz.push({
                name: page_config[i][j],
                xz: true
            });
        } else {
            sz.push({
                name: page_config[i][j],
                xz: false
            });
        }
    }
    PPDATA[i] = sz;
}
PPDATA.AI = {
    ws: "", user_info: false, sike: "", sanchuan: "", shensha: "",
}
PPDATA.dzpi = "zi|chou|yin|mao|chen|si|wu|wei|shen|you|xu|hai".split("|");
PPDATA.fgpz = [{
    name: "神盘长生",
    xz: false,
    fc: "spzs"
}, {
    name: "天盘长生",
    xz: false,
    fc: "tpzs"
}, {
    name: "通道线",
    xz: false,
    fc: "tdx"
}, {
    name: "全称",
    xz: false,
    fc: "name_qc"
}, {
    name: "神煞竖排",
    xz: false,
    fc: "shensha_shu"
}, {
    name: "四课遁干",
    xz: false,
    fc: "skdg_fun"
}, {
    name: "纳音五行",
    xz: false,
    fc: "nywx_fun"
}, {
    name: "神居地名",
    xz: false,
    fc: "sjdm_fun"
}, {
    name: "神居天名",
    xz: false,
    fc: "sjtm_fun"
}, {
    name: "地盘显示",
    xz: false,
    fc: "dpxx_fun"
}];

PPDATA.fuhaoyanse = [{
    name: "五行颜色",
    xz: false,
    fc: "wxys"
}, {
    name: "五气颜色",
    xz: false,
    fc: "wqys"
},];
PPDATA.jianyuepz = [
    {
        name: "信息",
        xz: true
    }, {
        name: "天地盘",
        xz: true
    }, {
        name: "四课",
        xz: true
    }, {
        name: "三传",
        xz: true
    },];
PPDATA.shensha_lr = [
    {
        name: "左边",
        xz: true
    }, {
        name: "右边",
        xz: false
    }];
PPDATA.svg_htmlcode = '';
PPDATA.jqylxx = false;
PPDATA.wx_ys = {
    金: "color:#ff9b00",
    木: "color:#19a500",
    水: "color:#0094fd",
    火: "color:#ad0800",
    土: "color:#3e0402"
};
PPDATA.wq_ys = {
    旺: "color:#ff0000",
    相: "color:#ff9800",
    休: "color:#0ecd75",
    囚: "color:#a57b1c",
    死: "color:#9f9f9f"
};

PPDATA.gan_to_gong_data = null;
PPDATA.gan_to_gong_data_ks = false;
PPDATA.sj_g_t_g_sc = {};
PPDATA.sj_g_t_g_ok_sc = "";
PPDATA.kwkgf = '　'
PPDATA.name_qc_let = false
PPDATA.shensha_shu_let = false
PPDATA.skdg_let = false
PPDATA.dpxx_let = false
PPDATA.diyss_mb = false
PPDATA.ai_TWZT = false
let host_ = location.host
PPDATA.AI_OUT_TEXT = ''

PPDATA.ai_mhd = 0

SETUP_MAIN()
function SETUP_MAIN(shoudong) {
    if (host_.indexOf("6ren.cn") != -1) {
        fc_qk()
    } else {
        js_qk()
    }
    let reque_jc = 0
    function fc_qk() {
        // console.log("函数计算起课")
        let xmlhttp;

        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                let res = JSON.parse(xmlhttp.responseText)
                paipan_setup(res, shoudong)
            }
            if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
                console.log("请求失败，切换路线")
                reque_jc++
                if (reque_jc < 3) {
                    sta(paipan_host)
                } else {
                    alert("服务器不可用，请求状态:" + xmlhttp.status)
                }
            }
        };
        sta(paipan_host)
        function sta(url) {
            xmlhttp.open("POST", url, true);
            xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            // console.log(JSON.stringify(PP_EVEN))
            xmlhttp.send(JSON.stringify(PP_EVEN))
        }
    }

    function js_qk() {
        console.log("本地js起课")
        setTimeout(() => {
            paipan_setup(window.top.setup(PP_EVEN))
        }, 10)
    }


}


function paipan_setup(res) {
    let g12 = "zi|chou|yin|mao|chen|si|wu|wei|shen|you|xu|hai".split("|");
    for (let i of g12) {
        PPDATA['svgsc_' + i] = "";
        PPDATA['gk_' + i] = "";
    }
    res = res.result;

    for (let i in res) {
        let A = res[i];
        if (typeof A == "object") {
            PPDATA[i] = res[i];
            for (let j in A) {
                PPDATA[j] = A[j];
            }
        } else {
            PPDATA[i] = res[i];
            if (i == "zhizhi" || i == "bifa" || i == "jiyingqian") {
                PPDATA[i] = res[i].split("\n");
            }
        }
    }
    if (PPDATA.chuchuankong.indexOf("⨀") != -1) {
        PPDATA.ccsk = "kwq"
    }
    if (PPDATA.zhongchuankong.indexOf("⨀") != -1) {
        PPDATA.zcsk = "kwq"
    }
    if (PPDATA.mochuankong.indexOf("⨀") != -1) {
        PPDATA.mcsk = "kwq"
    }
    PPDATA.shensha_xq = PPDATA.shensha.全部神煞.value;
    PPDATA.tongdaoxian2 = PPDATA.tongdaoxian;
    PPDATA.sike_tdp_zsxs = false
    PPDATA.sike_tdp_zsxs_index = -99
    // 子   丑      寅   卯      辰      巳    午    未    申     酉   戌   亥
    PPDATA.gx1 = ["比合", "六合", "　", "刑", "半合", "　", "冲", "害", "半合", "破", "　", "　"];
    PPDATA.gx2 = ["六合", "比合", "　", "　", "破", "半合", "害", "冲刑", "　", "半合", "刑", "　"];
    PPDATA.gx3 = ["　", "　", "比合", "　", "　", "刑害", "半合", "　", "冲", "　", "半合", "破合",];
    PPDATA.gx4 = ["刑", "　", "　", "比合", "害", "　", "破", "半合", "　", "冲", "合", "半合"];
    PPDATA.gx5 = ["半合", "破", "　", "害", "自刑", "　", "　", "　", "合", "六合", "半冲", "　",];
    PPDATA.gx6 = ["　", "半合", "刑害", "　", "　", "比合", "　", "　", "刑破", "半合", "　", "冲",];
    PPDATA.gx7 = ["冲", "害合", "半合", "破", "　", "　", "自刑", "六合", "　", "　", "半合", "　",];
    PPDATA.gx8 = ["害", "冲刑", "　", "半合", "　", "　", "六合", "比合", "　", "　", "破刑", "半合",];
    PPDATA.gx9 = ["半合", "　", "冲", "　", "半合", "破合", "　", "　", "比合", "　", "　", "害",];
    PPDATA.gx10 = ["破", "半合", "　", "冲", "六合", "半合", "　", "　", "　", "自刑", "害", "　",];
    PPDATA.gx11 = ["　", "刑", "半合", "合", "冲", "　", "半合", "刑破", "　", "害", "比合", "　",];
    PPDATA.gx12 = ["　", "　", "破合", "半合", "　", "冲", "　", "半合", "害", "　", "　", "自刑",];
    PPDATA.glzxyj = PP_EVEN.glzxyj
    PPDATA.Gangj = ""
    PPDATA.ShenSha_xq = []
    set_12gs_jutiandi(PPDATA.G12fx)
    function set_12gs_jutiandi(data) {
        let G12fx = "zi|chou|yin|mao|chen|si|wu|wei|shen|you|xu|hai".split("|");
        for (let i of G12fx) {
            let a = JSON.parse(data[i + '_gongxq'])
            let s12_ju_t = a.stzg.split("曰")[1].split(":")[0]
            let s12_ju_d = a.ddzg.split("曰")[1].split(":")[0]
            if (s12_ju_t.length == 3) {
                s12_ju_t = s12_ju_t.substring(s12_ju_t.length - 2, s12_ju_t.length)
            }
            if (s12_ju_d.length == 3) {
                s12_ju_d = s12_ju_d.substring(s12_ju_d.length - 2, s12_ju_d.length)
            }
            PPDATA['fg12_s12_ju_t_' + i] = s12_ju_t
            PPDATA['fg12_s12_ju_d_' + i] = s12_ju_d
        }
    }

    window.top.callDB.get(PPDATA.tezheng).then(res => {
        if (res) {
            // console.log("检测到本地有修改的分析", res)
            if (res.zhizhi) {
                res.zhizhi = res.zhizhi.split('\n')
                let a = []
                for (let i in res.zhizhi) { //处理空行
                    res.zhizhi[i].length > 1 && a.push(res.zhizhi[i])
                }
                PPDATA.zhizhi = a
                PPDATA.zhizhi_xiugai = "再次修改"
            }
            if (res.bifa) {
                res.bifa = res.bifa.split('\n')
                let a = []
                for (let i in res.bifa) { //处理空行
                    res.bifa[i].length > 1 && a.push(res.bifa[i])
                }
                PPDATA.bifa = a
                PPDATA.bifa_xiugai = "再次修改"
            }

        }
    })
    let fgpz_xz = JSON.parse(localStorage.getItem("fgpz_xz"))
    if (fgpz_xz != null) {
        PPDATA.fgpz = fgpz_xz
    }

    if (pages != "已初始化") {
        pages = "已初始化";
        Vue.createApp(vue_data).mount('#vue');
    } else {
        window.shensha_jiyi()
        let fgpz_xz = JSON.parse(localStorage.getItem("fgpz_xz"))
        if (fgpz_xz == null) {
            fgpz_xz = PPDATA.fgpz
        }
        for (let i in fgpz_xz) {
            window[fgpz_xz[i].fc](fgpz_xz[i].xz)
        }
        window.shuaxin();
        window.three_()
    }
    window.ppwzfz()

}
var vue_data = {
    data() {
        return PPDATA
    },
    beforeCreate: function () { },
    watch: {

        shensha_xq() {
            let ss = JSON.parse(JSON.stringify(this.shensha_xq));
            let tp = JSON.parse(JSON.stringify(this.TP));
            for (let i in this.dzpi) {
                this['sszx_' + this.dzpi[i]] = []
            }
            for (let i in ss) {
                if (ss[i].ss.length == 1) {
                    let dz_ = ss[i].ss;
                    let ss_ = ss[i].dz;
                    let py_ = this.p_t_z(dz_);
                    for (let j in tp) {
                        if (tp[j] == dz_) {
                            let gw = j.split("_")[1].split("t")[0];
                            this['sszx_' + gw].push(ss_)
                        }
                    }
                }
                if (ss[i].ss.length > 1) {
                    let dz_ = ss[i].dz;
                    let ss_ = ss[i].ss.split("、");
                    let py_ = this.p_t_z(dz_);
                    for (let j in tp) {
                        if (tp[j] == dz_) {
                            let gw = j.split("_")[1].split("t")[0];
                            this['sszx_' + gw].push(...ss_)
                        }
                    }
                }
            }
            this.$forceUpdate()
        },



    },

    created: function () {
        let thar = this
        if (localStorage.getItem("back_sel_arr")) {
            let A = JSON.parse(localStorage.getItem("back_sel_arr"))
            if (A[1]?.xz) {
                window.top.callDB.get('back_ima_get_file').then(res => {
                    if (res?.length > 1) {
                        document.body.style.background = 'url(' + res + ')'
                    }
                })
            }
        }

        window.top.setAllfont_family(document);
        this.grxz_fun(PP_EVEN.zygr);
        this.svg_htmlcode = this.svg_sc();
        this.getflzlist();
        document.getElementById('vue').style.opacity = 1;
        document.getElementById('vue').style.display = "block";
        document.getElementById('jzdh').style.opacity = 0;
        document.getElementById('jzdh').remove();
        const qkwsdyfk = JSON.parse(localStorage.getItem("lrppcs"))?.fujia;
        if (qkwsdyfk?.cd_ws || qkwsdyfk?.cd_dy || qkwsdyfk?.cd_fk) {
            this.cd_ws = qkwsdyfk.cd_ws;
            if (qkwsdyfk.cd_dy?.length > 0) {
                this.cd_dy = qkwsdyfk.cd_dy;
            } else {
                this.cd_dy = '';
            }
            this.cd_fk = qkwsdyfk.cd_fk;
            this.bdtab("存档")
        }
        this.biaoqian_up(PP_EVEN.fujia.cd_bq);
        if (this.xskl.length != 0) {
            this.fztab.push({
                name: "相似课例",
                xz: false
            })
        }
        this.getflz("占疾病求医");
        if (localStorage.getItem("pmtab_xz") != null) {
            this.pmtabxz(localStorage.getItem("pmtab_xz"))
        }
        if (localStorage.getItem("spzs_xz") != null) {
            this.spzs(localStorage.getItem("spzs_xz"))
        }
        if (localStorage.getItem("tpzs_xz") != null) {
            this.tpzs(localStorage.getItem("tpzs_xz"))
        }
        if (localStorage.getItem("tdx_xz") != null) {
            this.tdx(localStorage.getItem("tdx_xz"))
        }
        if (localStorage.getItem("name_qc_xz") != null) {
            this.name_qc(localStorage.getItem("name_qc_xz"))
        }
        if (localStorage.getItem("shensha_shu_xz") != null) {
            this.shensha_shu(localStorage.getItem("shensha_shu_xz"))
        }
        if (localStorage.getItem("skdg_xz") != null) {
            this.skdg_fun(localStorage.getItem("skdg_xz"))
        }
        if (localStorage.getItem("nywx_xz") != null) {
            this.nywx_fun(localStorage.getItem("nywx_xz"))
        }
        if (localStorage.getItem("sjdm_xz") != null) {
            this.sjdm_fun(localStorage.getItem("sjdm_xz"))
        }
        if (localStorage.getItem("sjtm_xz") != null) {
            this.sjtm_fun(localStorage.getItem("sjtm_xz"))
        }
        if (localStorage.getItem("dpxx_xz") != null) {
            this.dpxx_fun(localStorage.getItem("dpxx_xz"))
        }








        if (localStorage.getItem("ysxs_xz") != null) {
            this.fuhaoyanse = JSON.parse(localStorage.getItem("ysxs_xz"))
        }
        if (localStorage.getItem("jianyuepz") != null) {
            this.jianyuepz = JSON.parse(localStorage.getItem("jianyuepz"))
        }




        if (localStorage.getItem("shensha_lr") != null) {
            this.shensha_lr = JSON.parse(localStorage.getItem("shensha_lr"))
        }
        console.log(this.fgpz)
        for (let i in this.fgpz) {

            this[this.fgpz[i].fc](this.fgpz[i].xz)

        }
        document.getElementById("vue").style.opacity = 1




        this.ppwzfz()
        this.diy_shensha_FUN1()

        this.shensha_index_px()
        this.shensha_jiyi()

        if (PP_EVEN.sessionId) {

            let thar = this
            thar.AI_init_text_index = 1
            thar.$forceUpdate();
            let eventSource = new EventSource(sse_host + '/SSE?get_session_id=' + PP_EVEN.sessionId);
            eventSource.onmessage = function (event) {
                // console.log('开始获取历史AI会话:', PP_EVEN.sessionId, JSON.parse(event.data));
                try {
                    const data = JSON.parse(event.data);

                    thar.AI_WD_DATA = data.text
                    thar.AI_init_text_index = 2
                    thar.$forceUpdate();

                    // console.log("解析消息", data.text)
                } catch (error) {
                    console.error('解析数据失败:', error, "消息:", event);
                }
                eventSource.close();
            };
            eventSource.onerror = function (error) {
                console.log('连接已断开或错误:', error);
                eventSource.close();// 主动断开连接
            };
        }

        let dsq_01 = setInterval(() => {
            let APP_VER = localStorage.getItem("APP_VER");
            APP_VER && (this.APP_ver = APP_VER, clearInterval(dsq_01));
        }, 100)

        thar.$forceUpdate();
        (function () {
            function applyShadow() {
                if (thar.$refs.gjp_sksc && thar.$refs.gjp_sksc.offsetHeigh > 100) {
                    thar.gjp_sksc_gd = (thar.$refs.gjp_sksc.offsetHeight * 0.985)
                    thar.$forceUpdate();
                } else {
                    setTimeout(applyShadow, 50); // 每隔50ms检查一次
                }
            }
            applyShadow();
        })();


    },
    mounted() {
        window.ppwzfz = this.ppwzfz;
        window.shuaxin = this.shuaxin;
        window.tdx = this.tdx
        window.tpzs = this.tpzs
        window.name_qc = this.name_qc
        window.shensha_shu = this.shensha_shu
        window.spzs = this.spzs
        window.skdg_fun = this.skdg_fun
        window.nywx_fun = this.nywx_fun
        window.sjdm_fun = this.sjdm_fun
        window.sjtm_fun = this.sjtm_fun
        window.dpxx_fun = this.dpxx_fun
        window.shensha_jiyi = this.shensha_jiyi
        window.three_ = this.three_
    },
    computed: {
        transformStyle() {
            const { translate, rotate, scale } = this.transform
            return {
                transform: `translate(${translate.x}px, ${translate.y}px) rotate(${rotate}deg) scale(${scale})`,
                transformOrigin: 'center center'
            }
        },
        transformStyle_sksc() {
            const { translate, rotate, scale } = this.transform
            return {
                transform: `translate(${translate.x}px, ${translate.y}px) rotate(${(-rotate)}deg) scale(${scale})`,
                transformOrigin: 'center center'
            }
        }
    },
    methods: {
        three_() {
            if (this.pmtab[8].xz) {
                let thar = this
                thar.initThree(thar.sj_yuejiang, thar.sz_ar_hz);
            }
        },
        shensha_lrxs(name) {
            this.shensha_lr.map(data => {
                if (data.name == name) {
                    data.xz = true
                } else {
                    data.xz = false
                }
                console.log(data)
            })
            this.$forceUpdate();
            localStorage.setItem('shensha_lr', JSON.stringify(this.shensha_lr))
        },
        cd_handleInput(e) {
            let thar = this
            if (thar.$refs[`pre_${e}`]) {
                thar[`cd_${e}_height_auto`] = thar.$refs[`pre_${e}`].offsetHeight + (thar.$refs[`pre_${e}`].offsetHeight * 0.3)
                thar.$forceUpdate();
            }
        },
        get_wx(e) {
            let gz = "甲乙丙丁戊己庚辛壬癸子丑寅卯辰巳午未申酉戌亥贵蛇雀合勾青空虎常玄阴后金木水火土";
            let wx = "木木火火土土金金水水水土木木土火火土金金土水土火火木土木土金土水金水金木水火土";
            return wx[gz.indexOf(e)]

        },
        get_geju(shen, tian, di) {
            let arr = []
            let b1 = PPDATA.shensha.全部神煞.value
            b1.forEach(data => {
                if (data.dz == tian && data.ss.indexOf('日德') != -1 && di == '亥') {
                    arr.push("德入天门")
                }
                if (data.dz == tian && data.ss.indexOf('贵人') != -1 && di == '辰') {
                    arr.push("天乙入狱")
                }
                if (data.dz == tian && data.ss.indexOf('贵人') != -1 && di == '戌') {
                    arr.push("天乙入狱")
                }
                if (data.dz == tian && data.ss.indexOf('贵人') != -1 && di == '卯') {
                    arr.push("励德")
                }
                if (data.dz == tian && data.ss.indexOf('贵人') != -1 && di == '酉') {
                    arr.push("励德")
                }

            })
            // if (tian == "卯" && di == "戌") {
            //     arr.push("地狱开门")
            // }
            if (shen == "贵人" && di == "亥") {
                arr.push("贵登天门")
            }
            if (tian == "戌" && di == "亥") {
                arr.push("魁渡天门")
            }
            if (shen == "贵人" && di == "寅") {
                arr.push("贵塞鬼户")
            }
            if (tian == "辰" && di == "寅") {
                arr.push("罡塞鬼户")
            }
            let shen_wx = this.get_wx(shen)
            let tian_wx = this.get_wx(tian)
            let di_wx = this.get_wx(di)

            var sz = [
                ["兄弟", "官鬼", "父母", "妻财", "子孙"], //金
                ["妻财", "兄弟", "子孙", "父母", "官鬼"], //木
                ["子孙", "父母", "兄弟", "官鬼", "妻财"], //水
                ["官鬼", "子孙", "妻财", "兄弟", "父母"], //火
                ["父母", "妻财", "官鬼", "子孙", "兄弟"], //火
            ]
            let a1 = sz[this.to_wx_Number(shen_wx)][this.to_wx_Number(tian_wx)]//第一个参数为客，第二个参数为主
            let a2 = sz[this.to_wx_Number(tian_wx)][this.to_wx_Number(di_wx)]//第一个参数为客，第二个参数为主
            if (a1 == "官鬼" && a2 == "官鬼") {
                arr.push("外战格")
            }
            if (a1 == "妻财" && a2 == "妻财") {
                arr.push("内战格")
            }
            if (a1 == "官鬼" && a2 == "妻财") {
                arr.push("夹克格")
            }
            return arr
        },
        get_gjp_nm(di) {
            let xnbm = ''
            if (this.xx_sex) {
                let a1 = this.xx_bm.substring(1, 2)
                let a2 = this.xx_xn.substring(1, 2)
                if (a1 == di) {
                    xnbm += ' 本命'
                }
                if (a2 == di) {
                    xnbm += ' 行年'
                }
            }
            if (xnbm == '') {
                xnbm = '　'
            }
            return xnbm
        },
        get_xcphnm(tian, di) {
            let zhi = "子丑寅卯辰巳午未申酉戌亥";
            let tian_index = zhi.indexOf(tian)
            let di_index = zhi.indexOf(di)
            let arr = []

            for (let i = 1; i < 13; i++) {
                arr.push(this['gx' + i])
            }
            return arr[tian_index][di_index]
        },
        to_wx_Number(e) {
            let tysj = "金木水火土"
            for (let i = 0; i < tysj.length; i++) {
                if (tysj.charAt(i) == e) {
                    return i
                }
            }
        },
        // 规范化角度，确保在 0° 到 360° 之间
        normalizeAngle(angle) {
            return ((angle % 360) + 360) % 360
        },
        // 处理触摸开始事件
        handleTouchStart(e) {
            e.preventDefault()
            const touches = e.touches
            const rect = e.currentTarget.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            if (touches.length === 1) {  // 单指旋转
                const touch = touches[0]
                const deltaX = touch.clientX - centerX
                const deltaY = touch.clientY - centerY
                this.touchState.initialAngle = Math.atan2(deltaY, deltaX) * 180 / Math.PI
                this.touchState.initialRotate = this.transform.rotate
            }
            else if (touches.length === 2) {  // 双指缩放
                const touch1 = touches[0]
                const touch2 = touches[1]
                this.touchState.initialDistance = Math.hypot(
                    touch2.clientX - touch1.clientX,
                    touch2.clientY - touch1.clientY
                )
                this.touchState.initialScale = this.transform.scale
            }
            else if (touches.length === 3) {  // 三指平移
                this.touchState.initialTouchPoints = Array.from(touches).map(touch => ({
                    x: touch.clientX,
                    y: touch.clientY
                }))
                this.touchState.initialTranslate = { ...this.transform.translate }
            }
        },
        // 处理触摸移动事件
        handleTouchMove(e) {
            e.preventDefault()
            const touches = e.touches
            const rect = e.currentTarget.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            if (touches.length === 1) {  // 单指旋转
                const touch = touches[0]
                const deltaX = touch.clientX - centerX
                const deltaY = touch.clientY - centerY
                const newAngle = Math.atan2(deltaY, deltaX) * 180 / Math.PI

                if (this.touchState.initialAngle !== null) {
                    const deltaRotate = newAngle - this.touchState.initialAngle
                    this.transform.rotate = this.normalizeAngle(this.touchState.initialRotate + deltaRotate)
                }
            }
            else if (touches.length === 2) {  // 双指缩放
                const touch1 = touches[0]
                const touch2 = touches[1]
                const currentDistance = Math.hypot(
                    touch2.clientX - touch1.clientX,
                    touch2.clientY - touch1.clientY
                )

                if (this.touchState.initialDistance !== null && currentDistance !== 0) {
                    const newScale = this.touchState.initialScale * (currentDistance / this.touchState.initialDistance)
                    this.transform.scale = Math.min(Math.max(0.5, newScale), 4)  // 限制缩放范围
                }
            }
            else if (touches.length === 3) {  // 三指平移
                const currentTouchPoints = Array.from(touches).map(touch => ({
                    x: touch.clientX,
                    y: touch.clientY
                }))

                // 计算平移差值
                const deltaX = currentTouchPoints[0].x - this.touchState.initialTouchPoints[0].x
                const deltaY = currentTouchPoints[0].y - this.touchState.initialTouchPoints[0].y
                this.transform.translate = {
                    x: this.touchState.initialTranslate.x + deltaX,
                    y: this.touchState.initialTranslate.y + deltaY
                }
            }
        },
        // 处理触摸结束事件
        handleTouchEnd() {
            this.touchState = {
                initialDistance: null,
                initialAngle: null,
                initialTouchPoints: [],
                initialScale: 1,
                initialRotate: 0,
                initialTranslate: { x: 0, y: 0 }
            }
        },

        to_md(data) {
            marked.setOptions({
                gfm: true,
                breaks: true,
                sanitize: false,
            });
            return marked.parse(data);
        },
        fgp_to_ima() {
            let thar = this
            if (thar.fgp_to_ima_data.erweima) {
                loadScript('../../JS/html2canvas.js', function () {
                    loadScript('../../JS/qrcode.min.js', function () {
                        PP_EVEN.xnbms = JSON.parse(JSON.stringify(thar.xnbms));
                        let sy = ['ws', 'dy', 'fk'];
                        for (let i in sy) {
                            let k = sy[i];
                            PP_EVEN.fujia['cd_' + k] = thar['cd_' + k]
                        }
                        window.top.xxk.loading("生成链接中", true);
                        window.top.callFunction({
                            data: {
                                type: "fx_cundang_set",
                                ppdata: PP_EVEN
                            },
                            success(res) {
                                window.top.xxk.loading("生成链接中", false);
                                let urllj = 'https://6ren.cn/paipan/?qkid=' + res.result.sbm;
                                // 创建二维码
                                const qr = qrcode(0, 'L'); // 0表示自动版本，L表示纠错级别
                                qr.addData(urllj);
                                qr.make();
                                // 插入到DOM中
                                thar.fgp_to_ima_data.images = qr.createImgTag(4); // 4是单元格大小

                                if (res.result.zt == 'fx_true') {
                                    window.top.xxk.dibutishi("生成链接成功", 100);
                                } else {
                                    window.top.xxk.dibutishi("生成链接失败", 100)
                                }
                                thar.fgp_to_ima_data.to_ima = true

                                thar.$forceUpdate()
                                setTimeout(() => {
                                    let element = thar.$refs.PPMB;
                                    html2canvas(element).then(canvas => {
                                        const imgData = canvas.toDataURL('image/png');
                                        const link = document.createElement('a');
                                        link.download = "六壬起个课 - " + PP_EVEN.dt.y + '年' + PP_EVEN.dt.m + '月' + PP_EVEN.dt.d + '日' + PP_EVEN.dt.h + '时.png';
                                        link.href = imgData;
                                        link.click();
                                        setTimeout(() => {
                                            thar.fgp_to_ima_data.to_ima = false
                                            thar.$forceUpdate();
                                        }, 5000)
                                    });
                                }, 200)


                            },
                        })



                    })
                })
            }












        },
        shensha_jiyi() {
            let thar = this
            let shensha_tab_index = localStorage.getItem("shensha_tab_index")
            if (shensha_tab_index) {
                thar.shensha_tab(shensha_tab_index)
            } else {
                thar.shensha_tab("全部神煞")
            }
        },
        initThree(yuejiang, shichen) {
            let thar = this
            // console.log(`传入的月将是${yuejiang} 时辰是${shichen}`)
            const container = thar.$refs.three_3d;
            if (typeof yuejiang == 'undefined' || typeof shichen == 'undefined') {
                return
            }
            function init() {
                let height = 0.6//占用屏幕高度
                thar.three_int_zt = true

                // 设置场景
                const scene = new THREE.Scene();
                // 设置相机
                const camera = new THREE.PerspectiveCamera(100, window.innerWidth / (window.innerHeight * height), 1, 1000);
                camera.position.x = 0;
                camera.position.y = 10;
                camera.position.z = -15;


                // 设置渲染器
                const renderer = new THREE.WebGLRenderer({ antialias: true });
                renderer.setSize(window.innerWidth, window.innerHeight * height);
                let back_color = '#2d608f';
                if (localStorage.getItem("zt_selectedColor")) {
                    back_color = localStorage.getItem("zt_selectedColor");
                }
                renderer.setClearColor(back_color, 1.5); // 深蓝色背景,参数为背景颜色和透明度 
                container.appendChild(renderer.domElement);

                // 加载STL模型

                const stl_loader = new THREE.STLLoader();
                let mx_file_path
                if (host_.indexOf("6ren.cn") != -1) {
                    mx_file_path = 'https://file-hk.6ren.cn/3d/'
                } else {
                    mx_file_path = '../three/'
                }

                stl_loader.load(mx_file_path + 'lrtdp.stl', function (geometry) {
                    geometry = processSTLGeometry(geometry, mx_file_path + 'mx_tt3.jpg')
                    const material = new THREE.MeshStandardMaterial({
                        map: new THREE.TextureLoader().load(mx_file_path + 'mx_tt3.jpg'),
                        color: '#ffa937',
                        roughness: 0.9,
                        metalness: 0.5,
                    });

                    let mesh = new THREE.Mesh(geometry, material);
                    mesh.position.y = 0.05;
                    mesh.rotation.x = Math.PI;  // 180度（等同于THREE.MathUtils.degToRad(180)）
                    scene.add(mesh);
                });

                stl_loader.load(mx_file_path + 'lrxz.stl', function (geometry) {
                    geometry = processSTLGeometry(geometry, mx_file_path + 'mx_tt3.jpg')
                    const material = new THREE.MeshStandardMaterial({
                        map: new THREE.TextureLoader().load(mx_file_path + 'mx_tt3.jpg'),
                        color: '#ffa937',
                        roughness: 0.9,
                        metalness: 0.5,
                    });

                    three_xyyp = new THREE.Mesh(geometry, material);
                    three_xyyp.position.y = 0.05;

                    scene.add(three_xyyp);
                });
                stl_loader.load(mx_file_path + 'beidou.stl', function (geometry) {
                    geometry = processSTLGeometry(geometry, mx_file_path + 'mx_tt3-3.jpg')
                    const material = new THREE.MeshPhysicalMaterial({
                        map: new THREE.TextureLoader().load(mx_file_path + 'mx_tt3-3.jpg'),
                        color: '#ffa937',
                        roughness: 0.9,
                        metalness: 0.4,
                    });
                    three_beidou = new THREE.Mesh(geometry, material);
                    three_beidou.position.y = 2.05
                    scene.add(three_beidou);
                });
                /**
                 * 为STL几何体添加UV映射和贴图
                 * @param {THREE.BufferGeometry} geometry - 需要处理的几何体
                 * @param {string} texturePath - 贴图文件路径
                 * @param {boolean} [multiMaterial=false] - 是否使用六面不同材质
                 * @returns {THREE.BufferGeometry} 处理后的几何体
                 */
                function processSTLGeometry(geometry, texturePath, multiMaterial = false) {
                    // 1. 计算边界盒和大小
                    geometry.computeBoundingBox();
                    const boundingBox = geometry.boundingBox;
                    const size = new THREE.Vector3();
                    boundingBox.getSize(size);

                    // 2. 创建UV坐标（平面投影）
                    const positionAttribute = geometry.getAttribute('position');
                    const uvArray = new Float32Array(positionAttribute.count * 2);

                    for (let i = 0; i < positionAttribute.count; i++) {
                        const x = positionAttribute.getX(i);
                        const z = positionAttribute.getZ(i);
                        uvArray[i * 2] = (x - boundingBox.min.x) / size.x;     // U
                        uvArray[i * 2 + 1] = (z - boundingBox.min.z) / size.z; // V
                    }
                    geometry.setAttribute('uv', new THREE.BufferAttribute(uvArray, 2));
                    // 3. 处理材质
                    if (multiMaterial) {
                        const texture = new THREE.TextureLoader().load(texturePath);
                        const materials = Array(6).fill().map(() =>
                            new THREE.MeshStandardMaterial({ map: texture })
                        );

                        geometry.clearGroups();
                        const index = geometry.index;
                        const faceCount = index ? index.count / 3 : positionAttribute.count / 3;

                        for (let i = 0; i < faceCount; i++) {
                            const a = index ? index.getX(i * 3) : i * 3;
                            const normal = new THREE.Vector3();
                            geometry.attributes.normal.getX(a, normal.x);
                            geometry.attributes.normal.getY(a, normal.y);
                            geometry.attributes.normal.getZ(a, normal.z);
                            normal.normalize();

                            const absNormalX = Math.abs(normal.x);
                            const absNormalY = Math.abs(normal.y);
                            const absNormalZ = Math.abs(normal.z);

                            let materialIndex = 0;
                            if (absNormalX > absNormalY && absNormalX > absNormalZ) {
                                materialIndex = normal.x > 0 ? 0 : 1;
                            } else if (absNormalY > absNormalZ) {
                                materialIndex = normal.y > 0 ? 2 : 3;
                            } else {
                                materialIndex = normal.z > 0 ? 4 : 5;
                            }

                            geometry.addGroup(i * 3, 3, materialIndex);
                        }
                        // 返回处理后的几何体和材质数组
                        return { geometry, materials };
                    }

                    return geometry;
                }

                const dingbu_deng = new THREE.PointLight('#ffffff', 2);// 顶部灯
                dingbu_deng.position.z = 0
                dingbu_deng.position.x = 0
                dingbu_deng.position.y = 60
                scene.add(dingbu_deng);
                const dibu = new THREE.DirectionalLight('#ffffff', 0.5);// 底部 灯光
                dibu.position.y = -100
                scene.add(dibu);
                const controls = new THREE.OrbitControls(camera, renderer.domElement);
                // 基本配置
                controls.enableDamping = true;// 启用阻尼效果
                controls.dampingFactor = 0.25; // 阻尼惯性
                controls.screenSpacePanning = false; // 是否允许在3D空间中滚动
                // 旋转配置
                controls.maxPolarAngle = Math.PI * 0.9;  // 限制不能看到正下方
                controls.minDistance = 5; // 限制相机距离
                controls.maxDistance = 30;// 限制相机距离
                // 键盘控制
                controls.listenToKeyEvents(window);
                controls.keys = {
                    LEFT: 'KeyA',        // 使用A键左移
                    UP: 'KeyW',          // 使用W键前进
                    RIGHT: 'KeyD',       // 使用D键右移
                    BOTTOM: 'KeyS'       // 使用S键后退
                };

                // 在动画循环中更新
                function animate() {
                    requestAnimationFrame(animate);
                    controls.update(); // 必须调用以应用阻尼效果
                    TWEEN.update();
                    renderer.render(scene, camera);
                }
                animate();
            }
            if (!this.three_int_zt && container?.appendChild) {//未初始化，先初始化
                init()
            } else {
                let dsq1 = setInterval(function () {
                    if (three_beidou?.rotation && three_xyyp?.rotation) {
                        let Tweentime = 1500// 动画时长
                        let Easing = TWEEN.Easing.Quartic.Out

                        function three_beidou_xz1() {
                            let start = { rotationY: three_beidou.rotation.y };  // 初始 rotation.x 值
                            let end = { rotationY: beidoubujin(yuejiang) }; // 目标 rotation.y 值
                            new TWEEN.Tween(start)
                                .to(end, Tweentime - 1000)
                                .easing(Easing) // 缓动效果
                                .onUpdate(() => {
                                    three_beidou.rotation.y = start.rotationY; // 仅更新 rotation.x
                                }).onComplete(() => {
                                    // console.log("七星旋转完毕-动画结束！"); // 动画完成后触发
                                    // 可以在这里执行其他逻辑（如播放音效、触发下一个动画等）
                                    three_beidou_xz2()
                                    three_xyyp_xz()
                                }).start();
                        }
                        function three_beidou_xz2() {
                            let tdpxz_deg = tiandibujin(yuejiang, shichen)
                            let start = { rotationY: three_beidou.rotation.y };  // 初始 rotation.x 值
                            let end = { rotationY: three_beidou.rotation.y + tdpxz_deg }; // 目标 rotation.y 值
                            new TWEEN.Tween(start)
                                .to(end, Tweentime)
                                .easing(Easing) // 缓动效果
                                .onUpdate(() => {
                                    three_beidou.rotation.y = start.rotationY; // 仅更新 rotation.x
                                }).start();
                        }
                        function three_xyyp_xz() {
                            let tdpxz_deg = tiandibujin(yuejiang, shichen)
                            let start = { rotationY: three_xyyp.rotation.y };  // 初始 rotation.x 值
                            let end = { rotationY: tdpxz_deg }; // 目标 rotation.y 值
                            new TWEEN.Tween(start)
                                .to(end, Tweentime)
                                .easing(Easing) // 缓动效果
                                .onUpdate(() => {
                                    three_xyyp.rotation.y = start.rotationY; // 仅更新 rotation.x
                                }).start();
                        }
                        three_beidou_xz1()
                        clearInterval(dsq1)
                    }
                }, 10)
            }

            function tiandibujin(yuejian, shichen) {
                let arr = [0, -0.53, -1.03, -1.57, -2.1, -2.6, -3.13, 2.6, 2.08, 1.55, 1.03, 0.53];
                const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
                const stems = ['卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑', '寅'];
                let tdxz_obj1 = {};
                stems.forEach((stem, stemIndex) => {
                    tdxz_obj1[stem] = {};

                    branches.forEach((branch, branchIndex) => {
                        // 计算对应的数组索引
                        let arrIndex = (branchIndex - stemIndex + arr.length) % arr.length;
                        tdxz_obj1[stem][branch] = arr[arrIndex];
                    });
                });
                return tdxz_obj1[yuejian][shichen]
            }
            function beidoubujin(dizhi) {
                let yj = "戌酉申未午巳辰卯寅丑子亥".split("");
                let yj_data = {}
                for (let i in yj) {
                    yj_data[yj[i]] = i * 0.50;
                }
                return yj_data[dizhi]
            }


        },
        AI_TI_SETUP(value) {
            let eventSource

            let token = localStorage.getItem('token')
            let thar = this
            if (!localStorage.getItem("token")) {
                window.top.xxk.dibutishi("当前未登录", 1500);
                return
            }
            // console.log(value)
            if (PP_EVEN.sessionId) {
                sessionId = PP_EVEN.sessionId
                if (value.indexOf(',你根据我给你的信息，给出你的判断。') != -1) {
                    value = value.split("，此课")[1].split(",你根据我给你的信息，给出你的判断。")[0]
                }
                eventSource = new EventSource(sse_host + '/SSE?sessionId=' + sessionId + '&token=' + token + '&wenti=' + value);
            } else {
                eventSource = new EventSource(sse_host + '/SSE?token=' + token + '&wenti=' + value + '&sessionId=wu');// 没有会话id，第一次问
            }
            // console.log("提问文字:",value)
            this.AI_WD_DATA.push({ role: 'assistant', content: "" })
            eventSource.onmessage = function (event) {
                // console.log('收到消息:', event);
                try {
                    const data = JSON.parse(event.data);
                    if (data.type == 'sessionId') {
                        PP_EVEN.sessionId = data.data
                        thar.ai_TWZT = false
                    }
                    if (data.type == 'text_out') {
                        thar.AI_WD_DATA_inset(data.text)
                        thar.ai_TWZT = true
                    }
                    if (data.type == 'ai_tokens_bz') {
                        thar.AI_WD_DATA_inset(`## AI额度不足
- 可找到开发员进行兑换额度
- 开发员QQ: 825941952
- 开发员微信: trdy123456789`)
                        thar.ai_TWZT = false
                    }
                    if (data.type == "ZONG_out_tokens") {
                        thar.ai_TWZT = false
                        window.top.xxk.dibutishi("本次扣除" + data.de_ai_tokens + "额度,额度剩余" + data.all_ai_tokens, 5000);
                    }
                    // console.log("解析消息", data)
                } catch (error) {
                    console.error('解析数据失败:', error, "消息:", event);
                }
            };
            eventSource.onopen = function () {
                thar.ai_TWZT = false
                console.log('连接已建立');
            };





            eventSource.onerror = function (error) {
                console.log('连接已断开或错误:', error);
                eventSource.close();// 主动断开连接
            };
        },
        AI_TIWEN() {
            let thar = this
            if (this.AI_tiwenvalue?.length < 2) {
                window.top.xxk.dibutishi("字数太简短不利于AI的判断", 2000);
                return
            }
            if (this.AI_tiwenvalue?.length > 1000) {
                window.top.xxk.dibutishi("问题字数过长，无法请求", 1500);
                return
            }


            function AI_INTEXT(wenti) {
                let shensha_text = "神煞:"
                let shensha_arr = ["贵人", "日禄", "驿马", "破碎", "闭口"]
                for (let i of shensha_arr) {
                    shensha_text += `${i}是${thar.shensha_to_zhi(i)},`
                }
                let bifa_text = thar.bifa
                let bifa_arr = thar.bifa
                for (let i of bifa_arr) {
                    bifa_text += `${i}，`
                }
                let user_info = ""
                if (thar.AI.user_info && thar.xx_sex) {
                    user_info = `性别是${thar.xx_sex},行年是${thar.xx_xn},本命是${thar.xx_bm},`
                }
                let text = "下面我给你一个课,"
                text += `${thar.sz_ar_yg}${thar.sz_ar_yz}年 ${thar.sz_ar_mg}${thar.sz_ar_mz}月 ${thar.sz_ar_dg}${thar.sz_ar_dz}日 ${thar.sj_yuejiang}将 ${thar.sz_ar_hz}时起的课,`
                if (this.xx_sex) {
                    text += `此课的起课公元时间是${sj_gl}`
                }
                text += `${thar.zhizhi[1]},`
                text += `日上是${thar.SK.sk_1t} 干阴神是${thar.SK.sk_2t},`
                text += `支上是${thar.SK.sk_3t} 支阴神是${thar.SK.sk_4t},`
                text += `初传 六亲是${thar.sc_lqc} ${thar.sc_dgc}${thar.sc_c} 乘${thar.j_to_q(thar.sc_sc)},`
                text += `中传 六亲是${thar.sc_lqz} ${thar.sc_dgz}${thar.sc_z} 乘${thar.j_to_q(thar.sc_sz)},`
                text += `末传 六亲是${thar.sc_lqm} ${thar.sc_dgm}${thar.sc_m} 乘${thar.j_to_q(thar.sc_sm)},`
                text += `${user_info}`
                text += `日旬空是${thar.rk1}、${thar.rk2}空,`
                text += shensha_text
                text += bifa_text
                text += `此课${wenti},`
                text += `你根据我给你的信息，给出你的判断。`
                text += `完整盘面如下:\n${pptxt.su}`
                return text
            }
            let AI_in_data = AI_INTEXT(this.AI_tiwenvalue)
            this.AI_WD_DATA.push({ role: 'user', content: this.AI_tiwenvalue })
            setTimeout(() => {
                const container = thar.$refs.AI_WD_DATA_id;
                container.scrollTop = container.scrollHeight;
            }, 100);
            this.AI_tiwenvalue = ''
            this.AI_TI_SETUP(AI_in_data)


            this.$forceUpdate();
        },
        AI_WD_DATA_inset(inS_value) {
            this.AI_WD_DATA[this.AI_WD_DATA.length - 1].content = this.AI_WD_DATA[this.AI_WD_DATA.length - 1].content + inS_value
            this.$forceUpdate();
        },
        hideItem(item, key) {
            setTimeout(() => {
                item[key] = false;
            }, 1500);
        },
        lq_to1(lq) {
            return { 父母: "父", 妻财: "财", 官鬼: "鬼", 兄弟: "兄", 子孙: "子", }[lq]
        },
        get_ny(e) {//六十甲子取纳音
            if (e.charAt(0) == '　') {
                return "无"
            } else {
                let thar = this
                let xsz = []
                let NaYin = new Array("海中金", "炉中火", "大林木", "路旁土", "剑锋金", "山头火", "洞下水", "城墙土", "白蜡金", "杨柳木", "泉中水", "屋上土", "霹雷火", "松柏木", "长流水", "沙中金", "山下火", "平地木", "壁上土", "金箔金", "佛灯火", "天河水", "大驿土", "钗钏金", "桑松木", "大溪水", "沙中土", "天上火", "古榴木", "大海水",);
                for (let key in NaYin) {
                    xsz.push(NaYin[key])
                    xsz.push(NaYin[key])
                }
                return xsz[thar.JZ60_to_ny(e)]
            }
        },
        JZ60_to_ny(e) {
            let Gan = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
            let Zhi = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
            let t1 = -1, d1 = -1;
            for (let i = -1; i < 59; i++) {
                t1++
                d1++
                if (t1 == 10) { t1 = 0 }
                if (d1 == 12) { d1 = 0 }
                if (Gan[t1] + Zhi[d1] == e) {
                    return i + 1
                }
            }
        },
        ys_top_auto_fun(index) {
            //点击后滚动到顶部
            this.$nextTick(() => {
                const inputElement = this.$refs[index];
                if (inputElement) {
                    inputElement.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        },

        ppwzfz() {
            pptxt.su = `${this.sj_gl}${!this.xx_sex ? '' : "\n" + this.sj_nl + "\n"}${!this.xx_sex ? '' : this.sj_sz + "\n"}${!this.xx_sex ? '\n' : ""}${this.sj_yuejiang}将 ${this.sj_xunshou} ${this.sj_xunkong}空 
${!this.xx_sex ? '' : '本命:' + this.xx_bm + ' 行年:' + this.xx_xn + ' 性别:' + this.xx_sex}
　　　　　　　　　　　
　${this.sc_lqc} ${this.sc_dgc}${this.sc_c} ${this.sc_sc}${this.chuchuankong}　　　
　${this.sc_lqz} ${this.sc_dgz}${this.sc_z} ${this.sc_sz}${this.zhongchuankong}　　　
　${this.sc_lqm} ${this.sc_dgm}${this.sc_m} ${this.sc_sm}${this.mochuankong}　　　
　　　　　　　　　　　
　　${this.sk_4s} ${this.sk_3s} ${this.sk_2s} ${this.sk_1s} 　
　　${this.sk_4t} ${this.sk_3t} ${this.sk_2t} ${this.sk_1t} 　
　　${this.sk_4d} ${this.sk_3d} ${this.sk_2d} ${this.sk_1d} 　
　　　　　　　　　　　
　　${this.td_sis} ${this.td_wus} ${this.td_weis} ${this.td_shens}　　
　　${this.td_sit} ${this.td_wut} ${this.td_weit} ${this.td_shent}　　
　${this.td_chens}${this.td_chent} 　 　 ${this.td_yout}${this.td_yous}　
　${this.td_maos}${this.td_maot} 　 　 ${this.td_xut}${this.td_xus}　
　　${this.td_yint} ${this.td_chout} ${this.td_zit} ${this.td_hait}　　
　　${this.td_yins} ${this.td_chous} ${this.td_zis} ${this.td_hais}　　
${this.jiyingqian[1]}`


            pptxt.heng = `${this.sj_gl}${!this.xx_sex ? '' : "\n" + this.sj_nl + "\n"}${!this.xx_sex ? '' : this.sj_sz + "\n"}${!this.xx_sex ? '\n' : ""}${this.sj_yuejiang}将 ${this.sj_xunshou} ${this.sj_xunkong}空 
${!this.xx_sex ? '' : '本命:' + this.xx_bm + ' 行年:' + this.xx_xn + ' 性别:' + this.xx_sex}


　${this.td_sis}${this.td_wus}${this.td_weis}${this.td_shens}　　
　${this.td_sit}${this.td_wut}${this.td_weit}${this.td_shent}　　${this.sk_4s}${this.sk_3s}${this.sk_2s}${this.sk_1s}　${this.sc_lqc}${this.sc_dgc}${this.sc_c}${this.sc_sc}${this.chuchuankong}
${this.td_chens}${this.td_chent}　　${this.td_yout}${this.td_yous}　${this.sk_4t}${this.sk_3t}${this.sk_2t}${this.sk_1t}　${this.sc_lqz}${this.sc_dgz}${this.sc_z}${this.sc_sz}${this.zhongchuankong}
${this.td_maos}${this.td_maot}　　${this.td_xut}${this.td_xus}　${this.sk_4d}${this.sk_3d}${this.sk_2d}${this.sk_1d}　${this.sc_lqm}${this.sc_dgm}${this.sc_m}${this.sc_sm}${this.mochuankong}
　${this.td_yint}${this.td_chout}${this.td_zit}${this.td_hait}　　
　${this.td_yins}${this.td_chous}${this.td_zis}${this.td_hais}　　
${this.jiyingqian[1]}`;

            pptxt.jianyuefg = `${this.sj_gl}${!this.xx_sex ? '' : "\n" + this.sj_nl + "\n"}${!this.xx_sex ? '' : this.sj_sz + "\n"}${!this.xx_sex ? '\n' : ""}${this.sj_yuejiang}将 ${this.sj_xunshou} ${this.sj_xunkong}空 
${!this.xx_sex ? '' : '本命:' + this.xx_bm + ' 行年:' + this.xx_xn + ' 性别:' + this.xx_sex}
　　　　　　　　　　　
　　${this.sc_lqc} ${this.sc_dgc}${this.sc_c} ${this.sc_sc}${this.chuchuankong}　　　
　　${this.sc_lqz} ${this.sc_dgz}${this.sc_z} ${this.sc_sz}${this.zhongchuankong}　　　
　　${this.sc_lqm} ${this.sc_dgm}${this.sc_m} ${this.sc_sm}${this.mochuankong}　　　
　　　　　　　　　　　
　　　${this.sk_4s} ${this.sk_3s} ${this.sk_2s} ${this.sk_1s} 　
　　　${this.sk_4t} ${this.sk_3t} ${this.sk_2t} ${this.sk_1t} 　
　　　${this.sk_4d} ${this.sk_3d} ${this.sk_2d} ${this.sk_1d} 　
　　　　　　　　　　　
　　　${this.kong_to_quan(this.td_sidg)} ${this.kong_to_quan(this.td_wudg)} ${this.kong_to_quan(this.td_weidg)} ${this.kong_to_quan(this.td_shendg)}　　
　　　${this.td_sis} ${this.td_wus} ${this.td_weis} ${this.td_shens}　　
　　　${this.td_sit} ${this.td_wut} ${this.td_weit} ${this.td_shent}　　
　${this.kong_to_quan(this.td_chendg)}${this.td_chens}${this.td_chent}　　　${this.td_yout}${this.td_yous}${this.kong_to_quan(this.td_youdg)}　
　${this.kong_to_quan(this.td_maodg)}${this.td_maos}${this.td_maot}　　　${this.td_xut}${this.td_xus}${this.kong_to_quan(this.td_xudg)}　
　　　${this.td_yint} ${this.td_chout} ${this.td_zit} ${this.td_hait}　　
　　　${this.td_yins} ${this.td_chous} ${this.td_zis} ${this.td_hais}　　
　　　${this.kong_to_quan(this.td_yindg)} ${this.kong_to_quan(this.td_choudg)} ${this.kong_to_quan(this.td_zidg)} ${this.kong_to_quan(this.td_haidg)}　　

${this.jiyingqian[1]}`

            let jianyuepl_let = `${this.sj_gl}${!this.xx_sex ? '' : "\n" + this.sj_nl + "\n"}${!this.xx_sex ? '' : this.sj_sz + "\n"}${!this.xx_sex ? '\n' : ""}${this.sj_yuejiang}将 ${this.sj_xunshou} ${this.sj_xunkong}空 
${!this.xx_sex ? '' : '本命:' + this.xx_bm + ' 行年:' + this.xx_xn + ' 性别:' + this.xx_sex}

　　${this.sk_4s} ${this.sk_3s} ${this.sk_2s} ${this.sk_1s} 　${this.sc_lqc} ${this.sc_dgc}${this.sc_c} ${this.sc_sc}${this.chuchuankong}　　　
　　${this.sk_4t} ${this.sk_3t} ${this.sk_2t} ${this.sk_1t} 　${this.sc_lqz} ${this.sc_dgz}${this.sc_z} ${this.sc_sz}${this.zhongchuankong}　　　
　　${this.sk_4d} ${this.sk_3d} ${this.sk_2d} ${this.sk_1d} 　${this.sc_lqm} ${this.sc_dgm}${this.sc_m} ${this.sc_sm}${this.mochuankong}　　　
　　　
`
            let dz12_py = "zi|chou|yin|mao|chen|si|wu|wei|shen|you|xu|hai".split("|");
            for (let i of dz12_py) {
                jianyuepl_let = jianyuepl_let + this['td_' + i + 's'] + ' '
            }
            jianyuepl_let += '\n'
            for (let i of dz12_py) {
                jianyuepl_let = jianyuepl_let + this['td_' + i + 't'] + ' '
            }
            jianyuepl_let += '\n'
            let tysj = "子丑寅卯辰巳午未申酉戌亥"
            for (let i of tysj) {
                jianyuepl_let = jianyuepl_let + i + ' '
            }
            jianyuepl_let += '\n'
            jianyuepl_let = jianyuepl_let + '\n' + this.jiyingqian[1]
            pptxt.jianyuepl = jianyuepl_let


        },
        kong_to_quan(text) {
            if (text == '　') {
                return '空'
            } else {
                return text
            }
        },
        shensha_to_zhi(ss) {
            let data = this.shensha.全部神煞.value
            for (let i of data) {
                if (i.ss.indexOf(ss) != -1) {
                    return i.dz
                }
            }
        },
        set_diy_shensha_mousedown() {
            let thar = this
            if (!this.set_diy_shensha_mouse) {
                this.set_diy_shensha_mouse = 0
            }
            this.set_diy_shensha_mouse_qsd = setInterval(() => {
                thar.set_diy_shensha_mouse++
                if (thar.set_diy_shensha_mouse > 100) {
                    clearTimeout(thar.set_diy_shensha_mouse_qsd)
                } else {
                    document.querySelector('.progress').style.setProperty('--progress', thar.set_diy_shensha_mouse + '%'); // 设置进度为50%
                    if (this.set_diy_shensha_mouse == 100) {
                        thar.set_diy_shensha()
                    }
                }
            }, 10)
        },
        set_diy_shensha_mouseup() {
            clearTimeout(this.set_diy_shensha_mouse_qsd)
            this.set_diy_shensha_mouse = 0
            document.querySelector('.progress').style.setProperty('--progress', this.set_diy_shensha_mouse + '%');
        },


        get_diy_shensha() {
            if (!localStorage.getItem("token")) {
                console.log("未登录，跳转登录页面");
                window.top.xxk.dibutishi("当前未登录", 1500);
                return
            }
            window.top.callFunction({
                data: {
                    type: "get_diy_shensha",
                    token: localStorage.getItem("token")
                },
                success(res) {
                    window.top.xxk.dibutishi("获取数据成功，重新起课生效", 1500);
                    let a = res.result
                    for (let i in a) {
                        localStorage.setItem(i, a[i])
                    }
                },
            })
        },
        set_diy_shensha() {
            if (!localStorage.getItem("token")) {
                console.log("未登录，跳转登录页面");
                window.top.xxk.dibutishi("当前未登录", 1500);
                return
            }
            window.top.xxk.loading("保存中", true);
            let data = {
                type: "set_diy_shensha",
                token: localStorage.getItem("token"),
                zdy_jiyi: JSON.parse(localStorage.getItem("zdy_jiyi")),
                ALL_shensha_xz: JSON.parse(localStorage.getItem("ALL_shensha_xz"))
            }
            window.top.callFunction({
                data,
                success(res) {
                    window.top.xxk.loading("保存中", false);
                    window.top.xxk.dibutishi("保存数据成功", 1500);
                },
            })
        },
        jianyue_fontsize_fun(event) {
            let a = 'font-size:' + event.target.value + '%'
            let b = 'jianyue_fontsize'
            this[b] = a
            localStorage.setItem(b, a)
        },
        style1_fontsize_fun(event) {
            let a = 'font-size:' + event.target.value + '%'
            let b = 'style1_fontsize'
            this[b] = a
            localStorage.setItem(b, a)
        },
        shu_fontsize_fun(event) {
            let a = 'font-size:' + event.target.value + '%'
            let b = 'shu_fontsize'
            this[b] = a
            localStorage.setItem(b, a)
        },

        heng_fontsize_fun(event) {
            let a = 'font-size:' + event.target.value + '%'
            let b = 'heng_fontsize'
            this[b] = a
            localStorage.setItem(b, a)
        },

        fg_sj_fontsize_fun(event) {
            let c = (new Error()).stack.split("\n")[1].split('fg_')[1].split('_font')[0];
            let a = 'font-size:' + event.target.value + '%'
            let b = 'fg_' + c + '_fontsize'
            this[b] = a
            localStorage.setItem(b, a)
        },
        fg_sksc_fontsize_fun(event) {
            let c = (new Error()).stack.split("\n")[1].split('fg_')[1].split('_font')[0];
            let a = 'font-size:' + event.target.value + '%'
            let b = 'fg_' + c + '_fontsize'
            this[b] = a
            localStorage.setItem(b, a)
        },
        fg_zs12_fontsize_fun(event) {
            let c = (new Error()).stack.split("\n")[1].split('fg_')[1].split('_font')[0];
            let a = 'font-size:' + event.target.value + '%'
            let b = 'fg_' + c + '_fontsize'
            this[b] = a
            localStorage.setItem(b, a)
        },
        fg_tdp_fontsize_fun(event) {
            let c = (new Error()).stack.split("\n")[1].split('fg_')[1].split('_font')[0];
            let a = 'font-size:' + event.target.value + '%'
            let b = 'fg_' + c + '_fontsize'
            this[b] = a
            localStorage.setItem(b, a)
        },


        diy_ss_sj(item, index) {
            this.ALL_shensha_xz[index] = !item;
            localStorage.setItem("ALL_shensha_xz", JSON.stringify(this.ALL_shensha_xz))
            localStorage.setItem("zdy_jiyi", JSON.stringify(Object.keys(this.ALL_shensha_xz).filter(key => this.ALL_shensha_xz[key])))
            this.$forceUpdate();
        },
        diy_shensha_FUN1() {
            let ALL_shensha = {}
            let A = this.shensha.全部神煞.value
            for (let i in A) {
                let b = A[i]
                let c = b.ss.split("、")
                for (let j in c) {
                    ALL_shensha[c[j]] = b.dz
                }
            }
            let zdy_jiyi = localStorage.getItem("zdy_jiyi")
            if (zdy_jiyi) {
                zdy_jiyi = JSON.parse(zdy_jiyi)
            } else {
                zdy_jiyi = ["太岁"]
            }
            let x_zdy = []
            for (let i in zdy_jiyi) {
                x_zdy.push({ dz: zdy_jiyi[i], ss: ALL_shensha[zdy_jiyi[i]] })
            }


            let ALL_shensha_xz = localStorage.getItem("ALL_shensha_xz")



            if (ALL_shensha_xz == null) {
                ALL_shensha_xz = {}
                for (let i in ALL_shensha) {
                    ALL_shensha_xz[i] = zdy_jiyi.includes(ALL_shensha_xz[i])
                }
                this.ALL_shensha_xz = ALL_shensha_xz
            } else {
                this.ALL_shensha_xz = JSON.parse(ALL_shensha_xz)
            }







            this.shensha["自定义"] = {
                value: x_zdy,
                xz: false
            }
            this.$forceUpdate();

        },
        shensha_index_px() {
            let SS_PX = ['全部神煞', '自定义', '常用', '疾病', '钱财', '工作', '胎产', '天气', '婚姻', '盗窃', '灾狱', '考试', '阳宅', '出行', '官禄', '词讼', '阴宅', '谋望']
            let A = {}
            for (let i of SS_PX) {
                A[i] = this.shensha[i]
            }
            this.shensha = A
        },
        xxss(name) {
            if (window.top.ShenSha[name] != undefined) {
                let A = [name, window.top.ShenSha[name]]
                if (this.ShenSha_xq[0] != A) {
                    this.ShenSha_xq.unshift(A)
                }

            } else {
                let B = [name, "暂无描述"]
                if (this.ShenSha_xq[0] != B) {
                    this.ShenSha_xq.unshift(B)
                }

            }
            // console.log(this.ShenSha_xq)
            this.$forceUpdate();

        },
        get_tgjg(e) {
            this.Gangj = {
                "甲": "寅",
                "乙": "辰",
                "丙": "巳",
                "丁": "未",
                "戊": "巳",
                "己": "未",
                "庚": "申",
                "辛": "戌",
                "壬": "亥",
                "癸": "丑",
            }[e]
            return this.Gangj
        },
        sike_tdp_zsxs_fun(index) {
            if (this.sc_index == index) {
                this.sc_index = null;
                this.sike_tdp_zsxs_vif = false;
                this.sike_tdp_zsxs_index = -99;
                return
            }
            if (this.sc_index != index) {
                this.sc_index = index;
                this.sike_tdp_zsxs_vif = true
            }
            this.sike_tdp_zsxs_index = index;
            let arr = [this.sk_1d, this.sk_2d, this.sk_3d, this.sk_4d, this.sk_1t, this.sk_2t, this.sk_3t, this.sk_4t, this.Gangj, this.sc_c, this.sc_z, this.sc_m];
            let dz12_py = "zi|chou|yin|mao|chen|si|wu|wei|shen|you|xu|hai".split("|");
            let A1 = arr[this.sike_tdp_zsxs_index];
            for (let i of dz12_py) {
                let A2;
                if (index == 0) {
                    A2 = get_gan_zs(A1, this['td_' + i + 't'])
                } else {
                    A2 = get_zhi_zs(A1, this['td_' + i + 't'])
                }
                this['sike_tdp_zsxs_' + i] = A2
            }

            function get_zhi_zs(zhi, zhi_index) {
                let zs = ["长生", "沐浴", "冠带", "临官", "帝旺", "衰", "病", "死", "墓", "绝", "胎", "养"];
                let sz = [
                    ["4", "5", "6", "7", "8", "9", "10", "11", "0", "1", "2", "3"],
                    ["4", "5", "6", "7", "8", "9", "10", "11", "0", "1", "2", "3"],
                    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "0"],
                    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "0"],
                    ["4", "5", "6", "7", "8", "9", "10", "11", "0", "1", "2", "3"],
                    ["10", "11", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",],
                    ["10", "11", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",],
                    ["4", "5", "6", "7", "8", "9", "10", "11", "0", "1", "2", "3"],
                    ["7", "8", "9", "10", "11", "0", "1", "2", "3", "4", "5", "6",],
                    ["7", "8", "9", "10", "11", "0", "1", "2", "3", "4", "5", "6",],
                    ["4", "5", "6", "7", "8", "9", "10", "11", "0", "1", "2", "3"],
                    ["4", "5", "6", "7", "8", "9", "10", "11", "0", "1", "2", "3"],
                ];
                return zs[Number(sz[gz_to_Number(zhi)][gz_to_Number(zhi_index)])]
            }

            function get_gan_zs(gan, gan_index) {
                let zs = ["长生", "沐浴", "冠带", "临官", "帝旺", "衰", "病", "死", "墓", "绝", "胎", "养"];
                let sz = [
                    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "0",],
                    ["6", "5", "4", "3", "2", "1", "0", "11", "10", "9", "8", "7",],
                    ["10", "11", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",],
                    ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "11", "10",],
                    ["10", "11", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",],
                    ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "11", "10",],
                    ["7", "8", "9", "10", "11", "0", "1", "2", "3", "4", "5", "6",],
                    ["0", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1",],
                    ["4", "5", "6", "7", "8", "9", "10", "11", "0", "1", "2", "3",],
                    ["3", "2", "1", "0", "11", "10", "9", "8", "7", "6", "5", "4",],
                ];
                return zs[Number(sz[gz_to_Number(gan)][gz_to_Number(gan_index)])]
            }

            function gz_to_Number(e) {
                let tysj = "子丑寅卯辰巳午未申酉戌亥";
                for (let i = 0; i < tysj.length; i++) {
                    if (tysj.charAt(i) == e) {
                        return i
                    }
                }
                tysj = "甲乙丙丁戊己庚辛壬癸";
                for (let i = 0; i < tysj.length; i++) {
                    if (tysj.charAt(i) == e) {
                        return i
                    }
                }
                tysj = "金木水火土";
                for (let i = 0; i < tysj.length; i++) {
                    if (tysj.charAt(i) == e) {
                        return i
                    }
                }
            }

        }, dt_set_(dw, jiajian) {
            this.sike_tdp_zsxs_vif = false;
            if (typeof PP_EVEN.dt == "string") {
                PP_EVEN.dt = JSON.parse(PP_EVEN.dt)
            }
            if (String(PP_EVEN.dt.y).length >= 3) {
                let jlnl = PP_EVEN.dt.y;
                PP_EVEN.dt = sjcz[jiajian + 'y' + dw](PP_EVEN.dt);

                if (jlnl != PP_EVEN.dt.y) {
                    if (PP_EVEN.dt.y > jlnl) {
                        PP_EVEN.age++
                    }
                    if (PP_EVEN.dt.y < jlnl) {
                        PP_EVEN.age--
                    }
                }
                SETUP_MAIN();
            } else {
                PP_EVEN.dt = gzsjcz[jiajian + 'y' + dw](PP_EVEN.dt);
                SETUP_MAIN()
            }
        }, gan_to_gong(e) {
            let thar = this;
            if (thar.gan_to_gong_data != null) {
                thar.gan_to_gong_data_ks = true;
                return
            };
            window.top.xxk.loading("加载中", true);
            let gan = e.split(" ");
            window.top.callFunction({
                data: {
                    type: "sizhu_to_gongli",
                    y: gan[0],
                    m: gan[1],
                    d: gan[2],
                    h: gan[3],
                },
                success(res) {
                    thar.gan_to_gong_data = res.result.data;
                    window.top.xxk.loading("加载中", false);
                    thar.gan_to_gong_data_ks = true;
                    thar.$forceUpdate();
                    console.log(thar.gan_to_gong_data)
                },
            })
        }, grxz_fun(name) {
            let fangshua = JSON.stringify(this.ZYGR);
            for (let i in this.ZYGR) {
                this.ZYGR[i].xz = this.ZYGR[i].name == name
            }
            PP_EVEN.zygr = name;
            if (fangshua != JSON.stringify(this.ZYGR)) {
                SETUP_MAIN()
            }
            this.$forceUpdate()
        }, sex_sel: function (event, index) {
            this.xnbms[index][1] = event.target.value
        }, get_bm_(csn) {
            csn = Number(csn);
            if (csn > 2049 || csn < 1800) {
                return "出生年:X"
            } else {
                return get_bm(csn).y
            }
        }, get_xn_(csn, sex) {
            if (sex.length == 0) {
                return "性别:X"
            }
            // console.log(csn, sex);
            if (["男", "女"].includes(sex) != -1) {
                if (this.sj_g_t_g_ok_sc != "") {
                    if (Number(this.sj_g_t_g_ok_sc.gl.m) == 1) {
                        csn = csn - 1;
                        console.log("四柱起课，获取公园时间-未进入立春，年龄-1")
                    }
                    if (Number(this.sj_g_t_g_ok_sc.gl.m) == 2) {
                        if (Number(this.sj_g_t_g_ok_sc.gl.d) < 6 && this.sj_g_t_g_ok_sc.drjq === "大寒") {
                            console.log("四柱起课，获取公园时间-未进入立春，年龄-1");
                            csn = csn - 1
                        }
                    }
                    return get_xn(Number(this.sj_g_t_g_ok_sc.gl.y), sex, csn)
                }
                if (this.qbjq) {
                    let result = this.qbjq.filter(item => item.jqname === "立春");
                    let lichun_d = Number(result[0].jqrq[1].split("")[1]);
                    if (Number(PP_EVEN.dt.m) == 1) {
                        csn = csn + 1;
                        console.log("未进入立春，年龄+1")
                    }
                    if (Number(PP_EVEN.dt.m) == 2) {
                        if (Number(PP_EVEN.dt.d) < lichun_d) {
                            console.log("未进入立春，年龄+1");
                            csn = csn + 1
                        }
                    }
                }
                // console.log(PP_EVEN.dt.y, sex, csn);
                return get_xn(PP_EVEN.dt.y, sex, csn)
            }
        }, xnbms_rem(index) {
            let a = this.xnbms;
            let b = [];
            for (let i in a) {
                if (index != i) {
                    b.push(a[i])
                }
            }
            this.xnbms = b;
            this.$forceUpdate()
        }, xnbms_add() {
            if (!this.xnbms_add_run_jc) {
                this.xnbms_add_run_jc = 0
            }
            let names = "大壮|丧彪|小帅|小美|翠花".split("|");
            let sexs = "男|男|男|女|女".split("|");
            this.xnbms.push([1995, sexs[this.xnbms_add_run_jc], names[this.xnbms_add_run_jc]]);
            this.xnbms_add_run_jc++;
            if (this.xnbms_add_run_jc == names.length) {
                this.xnbms_add_run_jc = 0
            }
            this.$forceUpdate()
        }, czm(e) {
            return {
                c: "初",
                z: "中",
                m: "末"
            }[e]
        }, p_t_z(e) {
            let z = "子丑寅卯辰巳午未申酉戌亥";
            return z.charAt(this.dzpi.indexOf(e))
        }, setdata(e) {
            return this[e]
        }, getItem(e) {
            return localStorage.getItem(e)
        }, fuhaoys(even) {
            if (even.length > 1) {
                even = even.split("")
                even = even[even.length - 1]
            }
            if (localStorage.getItem("fuhaoys") == "wxys") {
                let gz = "甲乙丙丁戊己庚辛壬癸子丑寅卯辰巳午未申酉戌亥贵蛇雀合勾青空虎常玄阴后金木水火土";
                let wx = "木木火火土土金金水水水土木木土火火土金金土水土火火木土木土金土水金水金木水火土";
                return this.wx_ys[wx.charAt(gz.indexOf(even))]
            }
            if (localStorage.getItem("fuhaoys") == "wqys") {
                let gz = "甲乙丙丁戊己庚辛壬癸子丑寅卯辰巳午未申酉戌亥贵蛇雀合勾青空虎常玄阴后金木水火土";
                let wx = "木木火火土土金金水水水土木木土火火土金金土水土火火木土木土金土水金水金木水火土";
                let wx_ws = {
                    金: this.wangshuai[1],
                    木: this.wangshuai[2],
                    水: this.wangshuai[3],
                    火: this.wangshuai[4],
                    土: this.wangshuai[5],
                };
                return this.wq_ys[wx_ws[wx.charAt(gz.indexOf(even))]]
            }
            return ""
        }, shuaxin() {
            this.diy_shensha_FUN1();
            this.shensha_index_px();
            this.svg_htmlcode = this.svg_sc();
            this.$forceUpdate()
        }, fenxiangke() {
            PP_EVEN.xnbms = JSON.parse(JSON.stringify(this.xnbms));
            let sy = ['ws', 'dy', 'fk'];
            for (let i in sy) {
                let k = sy[i];
                PP_EVEN.fujia['cd_' + k] = document.getElementById('id_cd_' + k).value
            }
            let thar = this;
            window.top.xxk.loading("生成链接中", true);
            window.top.callFunction({
                data: {
                    type: "fx_cundang_set",
                    ppdata: PP_EVEN
                },
                success(res) {
                    window.top.xxk.loading("生成链接中", false);
                    let urllj = 'https://6ren.cn/paipan/?qkid=' + res.result.sbm;
                    thar.fxurl = urllj;
                    pptxt.fxurl = urllj;
                    if (res.result.zt == 'fx_true') {
                        window.top.xxk.dibutishi("生成链接成功", 1500);
                        thar.url_fx = urllj
                    } else {
                        window.top.xxk.dibutishi("生成链接失败", 1500)
                    }
                    thar.$forceUpdate()
                },
            })
        }, cd_(e) {
            PP_EVEN.xnbms = JSON.parse(JSON.stringify(this.xnbms));
            if (!localStorage.getItem("token")) {
                console.log("未登录，跳转登录页面");
                window.top.xxk.dibutishi("当前未登录", 1500);
                return
            }
            let sy = ['ws', 'dy', 'fk'];
            for (let i in sy) {
                let k = sy[i];
                PP_EVEN.fujia['cd_' + k] = document.getElementById('id_cd_' + k).value
            }
            if (e == "xiugai") {
                window.top.xxk.loading("修改中", true);
                let token = localStorage.getItem("token");
                window.top.callFunction({
                    data: {
                        type: "set_cundang",
                        token,
                        data: JSON.stringify(PP_EVEN)
                    },
                    success(res) {
                        window.top.xxk.loading("修改中", false);
                        if (res.result.zt == 'cd_set_true') {
                            window.top.xxk.dibutishi("修改成功", 1500);
                            localStorage.setItem("all_shuaixn", "true");
                            if (PP_EVEN.QKSJC) {
                                window.top.callDB.get('QKJL').then(res => {
                                    for (let i in res) {
                                        if (res[i].QKSJC == PP_EVEN.QKSJC) {
                                            res[i].cdtxt = PP_EVEN.fujia
                                        }
                                    }
                                    window.top.callDB.set('QKJL', res).then(res => {
                                        console.log("起课记录更新成功")
                                    })
                                })
                            }
                        } else {
                            window.top.xxk.dibutishi("修改失败", 1500)
                        }
                    },
                })
            }
            if (e == "shangchuan") {
                window.top.xxk.loading("上传中", true);
                let token = localStorage.getItem("token");
                let thar = this;
                // console.log(PP_EVEN);
                window.top.callFunction({
                    data: {
                        type: "up_cundang",
                        token,
                        data: JSON.stringify(PP_EVEN)
                    },
                    success(res) {
                        console.log("上传文档结果", res);
                        let id = res.result.cd_id;
                        window.top.xxk.loading("上传中", false);
                        if (res.result.zt == 'cd_up_true') {
                            window.top.xxk.dibutishi("上传成功", 1500);
                            PP_EVEN._id = id;
                            thar.set_up = true;
                            thar.$forceUpdate();
                            window.top.callDB.get('QKJL').then(res => {
                                for (let i in res) {
                                    if (res[i].QKSJC == PP_EVEN.QKSJC) {
                                        res[i].cdtxt = PP_EVEN.fujia
                                    }
                                }
                                window.top.callDB.set('QKJL', res).then(res => {
                                    console.log("起课记录更新成功")
                                })
                            })
                        } else {
                            window.top.xxk.dibutishi("上传失败", 1500)
                        }
                    },
                })
            }
        }, cd_localhost(e) {
            if (e == "baocun") {
                PP_EVEN.QKSJC = new Date().getTime(),
                    PP_EVEN.xnbms = JSON.parse(JSON.stringify(this.xnbms));
                let sy = ['ws', 'dy', 'fk'];
                for (let i in sy) {
                    let k = sy[i];
                    PP_EVEN.fujia['cd_' + k] = document.getElementById('id_cd_' + k).value
                }

                window.top.callDB.get('localhost_cd').then(res => {
                    let localhost_cd_arr = []
                    if (res) {
                        localhost_cd_arr = res
                    } else {
                        localhost_cd_arr = []
                    }
                    localhost_cd_arr.push(PP_EVEN)
                    console.log(localhost_cd_arr)
                    window.top.callDB.set('localhost_cd', localhost_cd_arr).then(res => {
                        if (res) {
                            console.log(res)
                            window.top.xxk.dibutishi("成功保存到本地", 1500)
                        }
                    })
                })




            }
            if (e == "xiugai") {
                PP_EVEN.xnbms = JSON.parse(JSON.stringify(this.xnbms));
                let sy = ['ws', 'dy', 'fk'];
                for (let i in sy) {
                    let k = sy[i];
                    PP_EVEN.fujia['cd_' + k] = document.getElementById('id_cd_' + k).value
                }

                window.top.callDB.get('localhost_cd').then(res => {
                    let localhost_cd_arr = []
                    if (res) {
                        localhost_cd_arr = res
                    } else {
                        localhost_cd_arr = []
                    }
                    // 
                    for (let i in localhost_cd_arr) {
                        if (localhost_cd_arr[i].QKSJC == PP_EVEN.QKSJC) {
                            localhost_cd_arr[i] = PP_EVEN
                        }
                    }
                    console.log(localhost_cd_arr)
                    window.top.callDB.set('localhost_cd', localhost_cd_arr).then(res => {
                        if (res) {
                            console.log(res)
                            window.top.xxk.dibutishi("成功修改到本地", 1500)
                        }
                    })
                })
            }


        }, biaoqian_up(item) {
            for (let i in this.CD_BQ) {
                if (this.CD_BQ[i].name == item) {
                    this.CD_BQ[i].xz = true;
                    PP_EVEN.fujia.cd_bq = item
                } else {
                    this.CD_BQ[i].xz = false
                }
            }
        }, lfzxq_zk(e) {
            let x = this.lfzxq_xq;
            for (let i in x) {
                if (Number(x[i].index) == Number(e)) {
                    this.lfzxq_xq[i].zhankai = !this.lfzxq_xq[i].zhankai
                }
            }
            this.$forceUpdate()
        }, getflzlist() {
            let thar = this;
            let a = localStorage.getItem("flzlist");
            if (a?.length > 2) {
                thar.flzlist = JSON.parse(a);
                thar.lfzxq_zk(0)
            } else {
                window.top.callFunction({
                    data: {
                        type: "getflzlist"
                    },
                    success(res) {
                        let sz = res.result;
                        let data = [];
                        for (let i in sz) {
                            data.push({
                                index: i,
                                name: sz[i].name,
                                xz: sz[i].xz
                            })
                        }
                        thar.flzlist = data;
                        localStorage.setItem("flzlist", JSON.stringify(data))
                    },
                })
            }
        }, getflz(name) {
            let thar = this;
            let a = this.flzlist;
            for (let i in a) {
                if (name == a[i].name) {
                    thar.flzlist[i].xz = true
                } else {
                    thar.flzlist[i].xz = false
                }
            }
            let str_cs = 'flzxq_' + decodeURI(name);
            let hc = JSON.parse(localStorage.getItem(str_cs));
            if (hc?.length > 1) {
                thar.lfzxq_xq = hc;
                this.$forceUpdate()
            } else {
                window.top.callFunction({
                    data: {
                        type: "getflz",
                        fl: name
                    },
                    success(res) {
                        let sz = res.result;
                        let data = [];
                        for (let i in sz) {
                            data.push({
                                index: i,
                                name: sz[i].name,
                                value: sz[i].zdff,
                                zhankai: false
                            })
                        }
                        thar.lfzxq_xq = data;
                        thar.$forceUpdate();
                        localStorage.setItem(str_cs, JSON.stringify(data))
                    },
                })
            }
            this.$forceUpdate()
        }, jyp_fontsize(e) {
            let A = Number(localStorage.getItem('jianyue_fontsize') ? localStorage.getItem('jianyue_fontsize') : '90');
            if (e == "+") {
                A = A + 5;
                if (A > 300) {
                    return
                }
            } else {
                A = A - 5;
                if (A < 10) {
                    return
                }
            }
            this.jianyue_fontsize = 'font-size:' + A + "%";
            localStorage.setItem('jianyue_fontsize', A);
            this.$forceUpdate()
        },
        sp_fontsize(e) {
            let A = Number(localStorage.getItem('shu_fontsize') ? localStorage.getItem('shu_fontsize') : '90');
            if (e == "+") {
                A = A + 5;
                if (A > 300) {
                    return
                }
            } else {
                A = A - 5;
                if (A < 10) {
                    return
                }
            }
            this.shu_fontsize = 'font-size:' + A + "%";
            localStorage.setItem('shu_fontsize', A)
        },
        copy_mp_style1() {

            const table = this.$refs.pm_style1;
            let textToCopy = `${this.sj_gl ? ('时间:' + this.sj_gl + '\n') : ''}${this.sj_nl ? ('华历:' + this.sj_nl + '\n') : ''}${this.sj_sz ? ('四柱:' + this.sj_sz + '\n') : ''}${this.sj_yuejiang}将 ${this.sj_xunshou} ${this.sj_xunkong}空
${this.xx_bm ? ('年命:' + this.xx_bm) : ''} ${this.xx_xn ? ('行年:' + this.xx_xn) : ''} ${this.xx_sex ? ('性别:' + this.xx_sex) : ''}\n\n`
            for (let i = 0; i < table.rows.length; i++) {
                const row = table.rows[i];
                let rowText = '';
                // 遍历行中的所有单元格
                for (let j = 0; j < row.cells.length; j++) {
                    const cell = row.cells[j];
                    // 获取单元格文本并处理空格
                    if (cell.innerHTML.length == 0) {
                        rowText = rowText + '　'
                    } else {
                        rowText = rowText + cell.innerHTML
                    }

                }
                // 添加换行符结束一行
                textToCopy += rowText + '\n';
            }
            textToCopy = textToCopy + '\n' + this.jiyingqian[1]
            console.log(textToCopy)


            let thar = this
            localStorage.setItem("APP_dw", "paipandata|" + textToCopy);
            window.top.copyTextToClipboard(textToCopy);
            thar.fz_but = "已复制";
            window.top.xxk.dibutishi("复制成功", 1500)
            setTimeout(function () {
                thar.fz_but = "复制"
            }, 3500);
        },
        copypaipan(e) {
            let thar = this
            localStorage.setItem("APP_dw", "paipandata|" + pptxt[e]);
            window.top.copyTextToClipboard(pptxt[e]);
            thar.fz_but = "已复制";
            window.top.xxk.dibutishi("复制成功", 1500)
            setTimeout(function () {
                thar.fz_but = "复制"
            }, 3500);

        }, copyUrl() {
            let thar = this
            localStorage.setItem("APP_dw", "copyUrl|" + pptxt.fxurl);
            window.top.copyTextToClipboard(pptxt.fxurl);
            thar.fz_but = "已复制";
            window.top.xxk.dibutishi("复制成功", 1500)
            setTimeout(function () {
                thar.fz_but = "复制"
            }, 3500);
        },
        copy_md() {
            let thar = this
            localStorage.setItem("APP_dw", "copyUrl|" + thar.AI_OUT_MD);
            window.top.copyTextToClipboard(thar.AI_OUT_MD);
            thar.copy_md_text = "已复制";
            window.top.xxk.dibutishi("复制成功", 1500)
            setTimeout(function () {
                thar.copy_md_text = "复制"
            }, 3500);
        },
        copy_value(value) {
            let thar = this
            localStorage.setItem("APP_dw", "copyUrl|" + value);
            window.top.copyTextToClipboard(value);
        },
        yjfgpz(name) {
            this.jianyuepz.map(data => {
                if (data.name == name) {
                    data.xz = !data.xz
                    return data
                }
                console.log(data)
            })
            localStorage.setItem('jianyuepz', JSON.stringify(this.jianyuepz))
        },
        jianyuefangge_fontsize_fun(event) {
            let a = 'font-size:' + event.target.value + '%'
            let b = 'jianyuefangge_fontsize'
            this[b] = a
            localStorage.setItem(b, a)
        },
        yjpz(name) {
            this.jianyuepz.map(data => {
                if (data.name == name) {
                    data.xz = !data.xz
                    return data
                }
                console.log(data)
            })
            localStorage.setItem('jianyuepz', JSON.stringify(this.jianyuepz))
        },

        ysxs(name, fc) {
            for (let i in this.fuhaoyanse) {
                if (this.fuhaoyanse[i].name == name) {
                    this.fuhaoyanse[i].xz = !this.fuhaoyanse[i].xz;
                    this[fc](this.fuhaoyanse[i].xz)
                } else {
                    this.fuhaoyanse[i].xz = false
                }
            }
            this.$forceUpdate();
            localStorage.setItem("ysxs_xz", JSON.stringify(this.fuhaoyanse))
        }, wxys(e) {
            if (e === true) {
                localStorage.setItem("fuhaoys", "wxys")
            }
            if (e === false) {
                localStorage.setItem("fuhaoys", "yc")
            }
            this.$forceUpdate()
        }, wqys(e) {
            console.log("wqys", e);
            if (e === true) {
                localStorage.setItem("fuhaoys", "wqys")
            }
            if (e === false) {
                localStorage.setItem("fuhaoys", "yc")
            }
            this.$forceUpdate()
        }, fgpzxz(name, fc) {
            for (let i in this.fgpz) {
                if (this.fgpz[i].name == name) {
                    this.fgpz[i].xz = !this.fgpz[i].xz;
                    this[fc](this.fgpz[i].xz)
                }
            }
            localStorage.setItem("fgpz_xz", JSON.stringify(this.fgpz))
        }, spzs(v) {
            if (typeof v == "string") {
                v = JSON.parse(v)
            }
            localStorage.setItem("spzs_xz", v);
            if (v) {
                for (let i in this.dzpi) {
                    this['td_' + this.dzpi[i] + 'szs'] = PPDATA.SP_ZS['td_' + this.dzpi[i] + 'szs']
                }
            } else {
                for (let i in this.dzpi) {
                    this['td_' + this.dzpi[i] + 'szs'] = ""
                }
            }
        }, tpzs(v) {
            if (typeof v == "string") {
                v = JSON.parse(v)
            }
            localStorage.setItem("tpzs_xz", v);
            if (v) {
                for (let i in this.dzpi) {
                    this['td_' + this.dzpi[i] + 'zs'] = PPDATA.TP_ZS['td_' + this.dzpi[i] + 'zs']
                }
            } else {
                for (let i in this.dzpi) {
                    this['td_' + this.dzpi[i] + 'zs'] = ""
                }
            }
        }, tdx(v) {
            if (typeof v == "string") {
                v = JSON.parse(v)
            }
            localStorage.setItem("tdx_xz", v);
            if (v) {
                this.tongdaoxian = PPDATA.tongdaoxian2
            } else {
                this.tongdaoxian = ""
            }
        }, name_qc(v) {
            if (typeof v == "string") {
                v = JSON.parse(v)
            }
            localStorage.setItem("name_qc_xz", v);
            if (v) {
                this.name_qc_let = true
            } else {
                this.name_qc_let = false
            }
            this.$forceUpdate();
        },
        shensha_shu(v) {
            if (typeof v == "string") {
                v = JSON.parse(v)
            }
            localStorage.setItem("shensha_shu_xz", v);
            if (v) {
                this.shensha_shu_let = true
            } else {
                this.shensha_shu_let = false
            }
            this.$forceUpdate();
        },
        nywx_fun(v) {
            if (typeof v == "string") {
                v = JSON.parse(v)
            }
            localStorage.setItem("nywx_xz", v);
            if (v) {
                this.nywx_let = true
            } else {
                this.nywx_let = false
            }
            this.$forceUpdate();
        },

        dpxx_fun(v) {
            if (typeof v == "string") {
                v = JSON.parse(v)
            }
            localStorage.setItem("dpxx_xz", v);
            if (v) {
                this.dpxx_let = true
            } else {
                this.dpxx_let = false
            }
            this.$forceUpdate();
        },
        sjtm_fun(v) {
            if (typeof v == "string") {
                v = JSON.parse(v)
            }
            localStorage.setItem("sjtm_xz", v);
            if (v) {
                this.sjtm_let = true
            } else {
                this.sjtm_let = false
            }
            this.$forceUpdate();
        },
        sjdm_fun(v) {
            if (typeof v == "string") {
                v = JSON.parse(v)
            }
            localStorage.setItem("sjdm_xz", v);
            if (v) {
                this.sjdm_let = true
            } else {
                this.sjdm_let = false
            }
            this.$forceUpdate();
        },
        skdg_fun(v) {
            if (typeof v == "string") {
                v = JSON.parse(v)
            }

            localStorage.setItem("skdg_xz", v);
            if (v) {
                this.skdg_let = true
            } else {
                this.skdg_let = false
            }
            this.$forceUpdate();
        },
        getDecadeMembers(start) {
            // 天干和地支的顺序
            const heavenlyStems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
            const earthlyBranches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

            // 检查输入是否有效
            if (!start || start.length !== 2) {
                throw new Error("请输入有效的旬首，例如 '甲子'");
            }

            const [startStem, startBranch] = [start[0], start[1]];

            // 找到天干和地支的起始索引
            const stemIndex = heavenlyStems.indexOf(startStem);
            const branchIndex = earthlyBranches.indexOf(startBranch);

            if (stemIndex === -1 || branchIndex === -1) {
                throw new Error("旬首格式错误，请检查输入");
            }

            // 构建旬成员（地支作为 key，天干作为 value）
            const result = {};
            for (let i = 0; i < 10; i++) {
                const currentStem = heavenlyStems[(stemIndex + i) % 10];
                const currentBranch = earthlyBranches[(branchIndex + i) % 12];
                result[currentBranch] = currentStem;
            }

            return result;
        },
        zhi_to_gan(zhi) {
            let xun = this.getDecadeMembers(this.sj_xunshou.split("旬")[0])
            return xun[zhi]
        },
        j_to_q(e) {
            return {
                贵: "贵人",
                蛇: "腾蛇",
                雀: "朱雀",
                合: "六合",
                勾: "勾陈",
                青: "青龙",
                空: "天空",
                虎: "白虎",
                常: "太常",
                玄: "玄武",
                阴: "太阴",
                后: "天后",

                子: "子神后",
                丑: "丑大吉",
                寅: "寅功曹",
                卯: "卯太冲",
                辰: "辰天罡",
                巳: "巳太乙",
                午: "午胜光",
                未: "未小吉",
                申: "申传送",
                酉: "酉从魁",
                戌: "戌河魁",
                亥: "亥登明",
            }[e]
        },
        q_to_j(e) {
            return {
                "贵人": "贵",
                "腾蛇": "蛇",
                "朱雀": "雀",
                "六合": "合",
                "勾陈": "勾",
                "青龙": "青",
                "天空": "空",
                "白虎": "虎",
                "太常": "常",
                "玄武": "玄",
                "太阴": "阴",
                "天后": "后",

                "子神后": "子",
                "丑大吉": "丑",
                "寅功曹": "寅",
                "卯太冲": "卯",
                "辰天罡": "辰",
                "巳太乙": "巳",
                "午胜光": "午",
                "未小吉": "未",
                "申传送": "申",
                "酉从魁": "酉",
                "戌河魁": "戌",
                "亥登明": "亥",
            }[e]
        },

        gzjys(v) {
            if (typeof v == "string") {
                v = JSON.parse(v)
            }
            localStorage.setItem("gzjys_xz", v);
            if (v) {
                localStorage.setItem("gzys", "wuxingyanse")
            } else {
                localStorage.setItem("gzys", "yincang")
            }
            this.$forceUpdate()
        }, wqjys(v) {
            if (typeof v == "string") {
                v = JSON.parse(v)
            }
            localStorage.setItem("wqjys_xz", v);
            if (v) {
                localStorage.setItem("wqjys", "wuqiyanse")
            } else {
                localStorage.setItem("gzys", "yincang")
            }
            this.$forceUpdate()
        }, pmtabxz(name) {
            for (let i in this.pmtab) {
                if (this.pmtab[i].name == name) {
                    this.pmtab[i].xz = true;
                    if (this.pmtab[i].name == "仿古") {
                        setTimeout(() => {
                            // svg_rotate()
                        }, 100)
                    }


                    if (this.pmtab[i].name == "3D模型") {
                        let thar = this
                        // 按需载入js文件，减少服务器压力，提升运行性能
                        loadScript('../three/three.min.js', function () {
                            loadScript('../three/STLLoader.js', function () {
                                loadScript('../three/OrbitControls.js', function () {
                                    loadScript('../three/tween.umd.js', function () {
                                        let jc = 0
                                        let dsq2 = setInterval(() => {
                                            jc++
                                            if (jc > 3) {
                                                clearInterval(dsq2)
                                            }
                                            thar.initThree(thar.sj_yuejiang, thar.sz_ar_hz);
                                        }, 100)
                                    })
                                })
                            })
                        })
                    }



                    localStorage.setItem("pmtab_xz", name)
                } else {
                    this.pmtab[i].xz = false
                }

            }


        },
        shensha_tab(name) {
            localStorage.setItem("shensha_tab_index", name)
            let a = this.shensha;
            let b = {};
            let c = this.shensha[name]
            for (let i in a) {
                if (i == name) {
                    this.shensha[i].xz = true;
                    b = PPDATA.shensha[i].value
                    // c = PPDATA.shensha[i - 1]?.value
                } else {
                    this.shensha[i].xz = false
                }
            }
            this.gejupan_shensha = c
            this.shensha_xq = b
            this.$forceUpdate()
        }, bdfztab(e) {
            let a = this.fztab;
            for (let i in a) {
                if (a[i].name == e) {
                    a[i].xz = true
                } else {
                    a[i].xz = false
                }
            }
        }, bdtab(e) {
            let a = this.dbtab;
            for (let i in a) {
                if (a[i].name == e) {
                    a[i].xz = true
                } else {
                    a[i].xz = false
                }
            }
            this.dbtab = a
            this.$forceUpdate()
        }, GBMB() {
            this.mbtx = "opacity:0;z-index:-1000"
        }, tkcl(e) {
            e = JSON.parse(e);
            this.mbtx = "opacity:1;z-index:1000";
            this.mb_mg = e.gw;
            this.mb_srgfx = e.stzg;
            this.mb_sdgfx = e.ddzg;
            this.mb_ss = e.shensha;
            this.mb_s = e.spxy;
            this.mb_t = e.tpxy
        }, fhsyy() {
            history.back()
        }, svg_sc() {
            let a = "zi|chou|yin|mao|chen|si|wu|wei|shen|you|xu|hai".split("|");
            let b = "0,30,60,90,120,150,180,210,240,270,300,300,360".split(",");
            let c = "子丑寅卯辰巳午未申酉戌亥".split("");
            let tpdg_deg, didg_deg;
            for (let i in a) {
                if (c[i] == this.sj_xunshou.charAt(1)) {
                    didg_deg = b[i]
                }
                if (this['td_' + a[i] + 'dg'] == "甲") {
                    tpdg_deg = b[i]
                }
            }
            let A1 = `<svg id="T"style='padding: .5em;'xmlns="http://www.w3.org/2000/svg"width="95%"height="100%"viewBox="0 0 1000 1000"><defs><style>.cls-1,.cls-4{fill:none}.cls-1,.cls-2,.cls-4{stroke:#2a6e77}.cls-1{stroke-width:10px}.cls-2,.cls-5{fill:#2a6e77;fill-rule:evenodd}.cls-2{stroke-width:2px}.cls-3,.cls-6{font-size:86.02px}.cls-3{fill:#ff8004}.cls-3,.cls-6,.cls-7,.cls-8,.cls-9{text-anchor:middle;font-family:KaiTi}.cls-4{stroke-width:9px}.cls-6{fill:#109dff}.cls-7,.cls-8{font-size:75px}.cls-8,.cls-9{fill:#61be05}.cls-9{font-size:98.675px}</style></defs><g id="zong"><g id="tx"><circle class="cls-1"cx="500.5"cy="500.5"r="392.906"/><circle class="cls-1"cx="500.5"cy="500.5"r="284.188"/><path class="cls-2"d="M595,124.98l10.1,2.706L577.235,231.674l-10.1-2.705Z"/><path class="cls-2"d="M769.843,222.8l7.39,7.39-76.125,76.126-7.391-7.391Z"/><path class="cls-2"d="M872.348,394.935l2.705,10.1L771.065,432.9l-2.705-10.1Z"/><path class="cls-2"d="M875.054,595.261l-2.706,10.1L768.36,577.494l2.705-10.1Z"/><path class="cls-2"d="M777.233,770.1l-7.39,7.391-76.125-76.125,7.39-7.391Z"/><path class="cls-2"d="M605.1,872.607L595,875.312,567.139,771.324l10.1-2.706Z"/><path class="cls-2"d="M404.773,875.312l-10.1-2.705L422.54,768.618l10.1,2.706Z"/><path class="cls-2"d="M229.933,777.492l-7.391-7.391,76.125-76.125,7.391,7.391Z"/><path class="cls-2"d="M127.427,605.357l-2.705-10.1L228.71,567.4l2.706,10.1Z"/><path class="cls-2"d="M124.722,405.031l2.705-10.1L231.416,422.8l-2.706,10.1Z"/><path class="cls-2"d="M222.542,230.191l7.391-7.39,76.125,76.125-7.391,7.391Z"/><path class="cls-2"d="M394.677,127.686l10.1-2.705,27.863,103.988-10.1,2.705Z"/></g><g id="_12zhi"data-name="tian"><text class="cls-3"transform="translate(501.954 191.167) scale(0.748)">`
            let A2 = `</text></g><g id="tx-3"data-name="tx"><path class="cls-2"d="M367.573,25.093l9.659-2.588L403.89,122l-9.659,2.588Z"/><path class="cls-2"d="M622.768,22.5l9.659,2.588-26.658,99.49L596.11,122Z"/><path class="cls-2"d="M845.068,147.861l7.071,7.071-72.832,72.832-7.071-7.071Z"/><path class="cls-2"d="M974.907,367.573l2.588,9.659-99.49,26.658-2.588-9.659Z"/><path class="cls-2"d="M977.5,622.768l-2.588,9.659-99.49-26.658,2.588-9.659Z"/><path class="cls-2"d="M852.139,845.068l-7.071,7.071-72.832-72.832,7.071-7.071Z"/><path class="cls-2"d="M632.427,974.907l-9.659,2.588-26.658-99.49,9.659-2.588Z"/><path class="cls-2"d="M377.232,977.5l-9.659-2.588,26.658-99.49,9.659,2.588Z"/><path class="cls-2"d="M154.932,852.139l-7.071-7.071,72.832-72.832,7.071,7.071Z"/><path class="cls-2"d="M25.093,632.427L22.5,622.768,122,596.11l2.588,9.659Z"/><path class="cls-2"d="M22.5,377.232l2.588-9.659,99.49,26.658L122,403.89Z"/><path class="cls-2"d="M147.861,154.932l7.071-7.071,72.832,72.832-7.071,7.071Z"/><circle class="cls-4"cx="500.5"cy="500.5"r="495.5"/><circle class="cls-4"cx="500.5"cy="500.5"r="392.813"/></g><g id="_12zhi-2"data-name="12zhi"><text class="cls-7"x="501.971"y="87.317"><tspan x="501.971">子</tspan></text><text class="cls-7"transform="matrix(0.866, 0.5, -0.5, 0.866, 708.048, 143.592)"><tspan x="0">丑</tspan></text><text class="cls-7"transform="matrix(0.5, 0.866, -0.866, 0.5, 858.379, 295.366)"><tspan x="0">寅</tspan></text><text class="cls-7"transform="matrix(0, 1, -1, 0, 912.683, 501.971)"><tspan x="0">卯</tspan></text><text class="cls-7"transform="matrix(-0.5, 0.866, -0.866, -0.5, 856.408, 708.048)"><tspan x="0">辰</tspan></text><text class="cls-7"transform="matrix(-0.866, 0.5, -0.5, -0.866, 704.634, 858.379)"><tspan x="0">巳</tspan></text><text class="cls-7"transform="translate(498.029 912.683) rotate(180)"><tspan x="0">午</tspan></text><text class="cls-7"transform="matrix(-0.866, -0.5, 0.5, -0.866, 291.952, 856.408)"><tspan x="0">未</tspan></text><text class="cls-7"transform="matrix(-0.5, -0.866, 0.866, -0.5, 141.621, 704.634)"><tspan x="0">申</tspan></text><text class="cls-7"transform="matrix(0, -1, 1, 0, 87.317, 498.029)"><tspan x="0">酉</tspan></text><text class="cls-7"transform="matrix(0.5, -0.866, 0.866, 0.5, 143.592, 291.952)"><tspan x="0">戌</tspan></text><text class="cls-7"transform="matrix(0.866, -0.5, 0.5, 0.866, 295.366, 141.621)"><tspan x="0">亥</tspan></text></g><g id="di_dg"data-name="12zhi"><text class="cls-8"transform="translate(428.214 93.713) scale(0.626)"><tspan x="0">甲</tspan></text><text class="cls-8"transform="matrix(0.542, 0.313, -0.313, 0.542, 640.975, 112.252)"><tspan x="0">乙</tspan></text><text class="cls-8"transform="matrix(0.313, 0.542, -0.542, 0.313, 815.962, 234.688)"><tspan x="0">丙</tspan></text><text class="cls-8"transform="matrix(0, 0.626, -0.626, 0, 906.287, 428.214)"><tspan x="0">丁</tspan></text><text class="cls-8"transform="matrix(-0.313, 0.542, -0.542, -0.313, 887.748, 640.975)"><tspan x="0">戊</tspan></text><text class="cls-8"transform="matrix(-0.542, 0.313, -0.313, -0.542, 765.312, 815.962)"><tspan x="0">己</tspan></text><text class="cls-8"transform="matrix(-0.626, 0, 0, -0.626, 571.786, 906.287)"><tspan x="0">庚</tspan></text><text class="cls-8"transform="matrix(-0.542, -0.313, 0.313, -0.542, 359.025, 887.748)"><tspan x="0">辛</tspan></text><text class="cls-8"transform="matrix(-0.313, -0.542, 0.542, -0.313, 184.038, 765.312)"><tspan x="0">壬</tspan></text><text class="cls-8"transform="matrix(0, -0.626, 0.626, 0, 93.713, 571.786)">`


            return A1 + `<tspan x="0">${this.td_zit}</tspan></text><text class="cls-3"transform="translate(656.165 233.278) rotate(30) scale(0.748)"><tspan x="0">${this.td_chout}</tspan></text><text class="cls-3"transform="translate(768.66 346.853) rotate(60) scale(0.748)"><tspan x="0">${this.td_yint}</tspan></text><text class="cls-3"transform="matrix(0, 0.748, -0.748, 0, 809.296, 501.459)"><tspan x="0">${this.td_maot}</tspan></text><text class="cls-3"transform="translate(767.185 655.669) rotate(120) scale(0.748)"><tspan x="0">${this.td_chent}</tspan></text><text class="cls-3"transform="translate(653.61 768.164) rotate(150) scale(0.748)"><tspan x="0">${this.td_sit}</tspan></text><text class="cls-3"transform="translate(499.004 808.8) rotate(180) scale(0.748)"><tspan x="0">${this.td_wut}</tspan></text><text class="cls-3"transform="translate(344.793 766.689) rotate(-150) scale(0.748)"><tspan x="0">${this.td_weit}</tspan></text><text class="cls-3"transform="translate(232.299 653.114) rotate(-120) scale(0.748)"><tspan x="0">${this.td_shent}</tspan></text><text class="cls-3"transform="matrix(0, -0.748, 0.748, 0, 191.663, 498.508)"><tspan x="0">${this.td_yout}</tspan></text><text class="cls-3"transform="translate(233.774 344.298) rotate(-60) scale(0.748)"><tspan x="0">${this.td_xut}</tspan></text><text class="cls-3"transform="translate(347.348 231.803) rotate(-30) scale(0.748)"><tspan x="0">${this.td_hait}</tspan></text></g><g id="tx-2"data-name="tx"><circle class="cls-4"cx="500.5"cy="500.5"r="284.156"/><circle class="cls-4"cx="500.5"cy="500.5"r="179.219"/><path class="cls-5"d="M422.777,232.118l9.659-2.588,26.4,98.524-9.66,2.588Z"/><path class="cls-5"d="M567.2,229.53l9.659,2.588-26.4,98.524-9.66-2.588Z"/><path class="cls-5"d="M693.564,299.5l7.071,7.071L628.51,378.7l-7.071-7.071Z"/><path class="cls-5"d="M768.016,423.277l2.588,9.659-98.524,26.4-2.588-9.66Z"/><path class="cls-5"d="M770.6,567.7l-2.588,9.659-98.524-26.4,2.588-9.66Z"/><path class="cls-5"d="M700.635,694.064l-7.071,7.071L621.439,629.01l7.071-7.071Z"/><path class="cls-5"d="M576.857,768.516L567.2,771.1,540.8,672.58l9.66-2.588Z"/><path class="cls-5"d="M432.436,771.1l-9.659-2.588,26.4-98.524,9.66,2.588Z"/><path class="cls-5"d="M306.07,701.135L299,694.064l72.125-72.125,7.071,7.071Z"/><path class="cls-5"d="M231.618,577.357L229.03,567.7l98.524-26.4,2.588,9.66Z"/><path class="cls-5"d="M229.03,432.936l2.588-9.659,98.524,26.4-2.588,9.66Z"/><path class="cls-5"d="M299,306.57l7.071-7.071L378.2,371.624l-7.072,7.071Z"/></g><g id="_12shen"data-name="12shen"><text class="cls-6"transform="matrix(0.522, 0, 0, 0.522, 501.423, 284.505)"><tspan x="0">${this.td_zis}</tspan></text><text class="cls-6"transform="translate(608.955 313.869) rotate(30) scale(0.522)"><tspan x="0">${this.td_chous}</tspan></text><text class="cls-6"transform="translate(687.399 393.065) rotate(60) scale(0.522)"><tspan x="0">${this.td_yins}</tspan></text><text class="cls-6"transform="matrix(0, 0.522, -0.522, 0, 715.734, 500.873)"><tspan x="0">${this.td_maos}</tspan></text><text class="cls-6"transform="translate(686.37 608.405) rotate(120) scale(0.522)"><tspan x="0">${this.td_chens}</tspan></text><text class="cls-6"transform="translate(607.174 686.848) rotate(150) scale(0.522)"><tspan x="0">${this.td_sis}</tspan></text><text class="cls-6"transform="matrix(-0.522, 0, 0, -0.522, 499.366, 715.184)"><tspan x="0">${this.td_wus}</tspan></text><text class="cls-6"transform="translate(391.834 685.82) rotate(-150) scale(0.522)"><tspan x="0">${this.td_weis}</tspan></text><text class="cls-6"transform="translate(313.391 606.624) rotate(-120) scale(0.522)"><tspan x="0">${this.td_shens}</tspan></text><text class="cls-6"transform="matrix(0, -0.522, 0.522, 0, 285.055, 498.816)"><tspan x="0">${this.td_yous}</tspan></text><text class="cls-6"transform="translate(314.419 391.284) rotate(-60) scale(0.522)"><tspan x="0">${this.td_xus}</tspan></text><text class="cls-6"transform="translate(393.616 312.841) rotate(-30) scale(0.522)"><tspan x="0">${this.td_hais}</tspan>` + A2 + `<tspan x="0">癸</tspan></text><animateTransform attributeName="transform"type="rotate"from="${didg_deg} 500 500"to="${didg_deg} 500 500"dur="2s"repeatCount="indefinite"/></g><g id="tian_dg"data-name="12zhi"><text class="cls-9"transform="translate(446.215 199.031) scale(0.464)"><tspan x="0">甲</tspan></text><text class="cls-9"transform="translate(604.009 212.78) rotate(30) scale(0.464)"><tspan x="0">乙</tspan></text><text class="cls-9"transform="translate(733.787 303.584) rotate(60) scale(0.464)"><tspan x="0">丙</tspan></text><text class="cls-9"transform="matrix(0, 0.464, -0.464, 0, 800.777, 447.112)"><tspan x="0">丁</tspan></text><text class="cls-9"transform="translate(787.027 604.906) rotate(120) scale(0.464)"><tspan x="0">戊</tspan></text><text class="cls-9"transform="translate(696.223 734.684) rotate(150) scale(0.464)"><tspan x="0">己</tspan></text><text class="cls-9"transform="matrix(-0.464, 0, 0, -0.464, 552.695, 801.674)"><tspan x="0">庚</tspan></text><text class="cls-9"transform="translate(394.902 787.924) rotate(-150) scale(0.464)"><tspan x="0">辛</tspan></text><text class="cls-9"transform="translate(265.123 697.12) rotate(-120) scale(0.464)"><tspan x="0">壬</tspan></text><text class="cls-9"transform="matrix(0, -0.464, 0.464, 0, 198.134, 553.592)"><tspan x="0">癸</tspan></text><animateTransform attributeName="transform"type="rotate"from="${tpdg_deg} 500 500"to="${tpdg_deg} 500 500"dur="2s"repeatCount="indefinite"/></g><animateTransform attributeName="transform"type="rotate"from="180 500 500"to="180 500 500"dur="2s"repeatCount="indefinite"/></g></svg>`
        }, llkgb() {
            document.getElementById('BJKLLK').style.opacity = 0;
            document.getElementById('BJKLLK').style['z-index'] = -1000
        },
        llktq(e, v) {
            let data = "";
            if (typeof e == "object") {
                for (let i in e) {
                    data = data + e[i] + '\n'
                }
            } else {
                data = e
            }
            let obj = {
                tezheng: PPDATA.tezheng,
                key: v,
                value: data
            };
            window.top.callDB.set('bjq_guodu', obj).then(res => {
                if (res) {
                    document.getElementById('BJKLLKsrc').src = "../../components/bianjiye/index.html";
                    document.getElementById('BJKLLK').style.opacity = 1;
                    document.getElementById('BJKLLK').style['z-index'] = 10000
                }
            })
        }
    }
};


const sjcz = {
    sjc_to_dt(timestamp) {
        var date = new Date(timestamp);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var i = date.getMinutes();
        var s = date.getSeconds();
        return {
            y,
            m,
            d,
            h,
            i,
            s
        }
    },
    dt_to_sjc(y, m, d, h, i, s) {
        y.length == 1 && (y = "0" + y);
        m.length == 1 && (m = "0" + m);
        d.length == 1 && (d = "0" + d);
        h.length == 1 && (h = "0" + h);
        i.length == 1 && (i = "0" + i);
        s.length == 1 && (s = "0" + s);
        return Date.parse(new Date(y + '/' + m + '/' + d + ' ' + h + ':' + i + ':' + s + ':000'))
    },
    time_add_reduce(sjc, time_key, time) {
        let a = {
            y: 31536000000,
            m: 2592000000,
            d: 86400000,
            h: 3600000,
            i: 60000,
            s: 1000,
        };
        if (time > 0) {
            sjc = sjc + time * a[time_key]
        };
        if (time < 0) {
            sjc = sjc + time * a[time_key]
        };
        return sjc
    },
    xyn(even) {
        let a = this.dt_to_sjc(even.y, even.m, even.d, even.h, even.i, even.s);
        let b = this.time_add_reduce(a, "y", 1);
        let c = this.sjc_to_dt(b);
        return c
    },
    syn(even) {
        let a = this.dt_to_sjc(even.y, even.m, even.d, even.h, even.i, even.s);
        let b = this.time_add_reduce(a, "y", -1);
        let c = this.sjc_to_dt(b);
        return c
    },
    xyy(even) {
        let a = this.dt_to_sjc(even.y, even.m, even.d, even.h, even.i, even.s);
        let b = this.time_add_reduce(a, "m", 1);
        let c = this.sjc_to_dt(b);
        return c
    },
    syy(even) {
        let a = this.dt_to_sjc(even.y, even.m, even.d, even.h, even.i, even.s);
        let b = this.time_add_reduce(a, "m", -1);
        let c = this.sjc_to_dt(b);
        return c
    },
    xyr(even) {
        let a = this.dt_to_sjc(even.y, even.m, even.d, even.h, even.i, even.s);
        let b = this.time_add_reduce(a, "d", 1);
        let c = this.sjc_to_dt(b);
        return c
    },
    syr(even) {
        let a = this.dt_to_sjc(even.y, even.m, even.d, even.h, even.i, even.s);
        let b = this.time_add_reduce(a, "d", -1);
        let c = this.sjc_to_dt(b);
        return c
    },
    xys(even) {
        let a = this.dt_to_sjc(even.y, even.m, even.d, even.h, even.i, even.s);
        let b = this.time_add_reduce(a, "h", 2);
        let c = this.sjc_to_dt(b);
        return c
    },
    sys(even) {
        let a = this.dt_to_sjc(even.y, even.m, even.d, even.h, even.i, even.s);
        let b = this.time_add_reduce(a, "h", -2);
        let c = this.sjc_to_dt(b);
        return c
    },
};

function LJ() {
    let Gan = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
    let Zhi = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
    let ljjz = [];
    let gannn = 0;
    let zhizhi = 0;
    for (let i = 0; i < 60; i++) {
        ljjz.push(Gan[gannn] + Zhi[zhizhi]);
        gannn++;
        zhizhi++;
        if (gannn == 10) {
            gannn = 0
        }
        if (zhizhi == 12) {
            zhizhi = 0
        }
    }
    return ljjz
}
const lj60 = LJ();
const gzsjcz = {
    zhi: "子丑寅卯辰巳午未申酉戌亥".split(""),
    xyn(even) {
        let a1 = lj60.indexOf(even.y);
        a1 = a1 + 1;
        a1 == 60 && (a1 = 0);
        even.y = lj60[a1];
        return even
    },
    syn(even) {
        let a1 = lj60.indexOf(even.y);
        a1 = a1 - 1;
        a1 == -1 && (a1 = 59);
        even.y = lj60[a1];
        return even
    },
    xyy(even) {
        let a1 = this.zhi.indexOf(even.m);
        a1 = a1 + 1;
        a1 == 2 && (even = this.xyn(even));
        a1 == 11 && (a1 = 0);
        even.m = this.zhi[a1];
        return even
    },
    syy(even) {
        let a1 = this.zhi.indexOf(even.m);
        a1 = a1 - 1;
        a1 == 1 && (even = this.syn(even));
        a1 == -1 && (a1 = 11);
        even.m = this.zhi[a1];
        return even
    },
    xyr(even) {
        let a1 = lj60.indexOf(even.d);
        a1 = a1 + 1;
        a1 == 60 && (a1 = 0);
        even.d = lj60[a1];
        return even
    },
    syr(even) {
        let a1 = lj60.indexOf(even.d);
        a1 = a1 - 1;
        a1 == -1 && (a1 = 59);
        even.d = lj60[a1];
        return even
    },
    xys(even) {
        let a1 = this.zhi.indexOf(even.h);
        a1 = a1 + 1;
        a1 == 12 && (even = this.xyr(even), a1 = 0);
        even.h = this.zhi[a1];
        return even
    },
    sys(even) {
        let a1 = this.zhi.indexOf(even.h);
        a1 = a1 - 1;
        a1 == -1 && (even = this.syr(even), a1 = 11);
        even.h = this.zhi[a1];
        return even
    },
};



function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {  // IE
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback(url);
            }
        };
    } else {  // Others
        script.onload = function () {
            callback(url);
        };
    }
    script.src = url;
    document.head.appendChild(script);
}