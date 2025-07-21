const qqqun = 'https://qm.qq.com/cgi-bin/qm/qr?k=tKtOFcxEKptsOb7r-iphR_oTrhq2wFCV&jump_from=webapi&authKey=aQx/XktHYytf9LSzzFsbr99VfOk9DUT6DCtv7Ci7qzIu8C90O6fRxDhZV1arKR4W';
var JWD_J = localStorage.getItem('jwd_jing');
JWD_J = JWD_J ? JWD_J : 120;
localStorage.setItem("DQGLTIME", JSON.stringify(window.top.dq_time(0)));
var date = new Date();
if (location.href.indexOf('debug') != -1) {
    document.title = "首页(测试版)"
}
const dzlh = {
    子: "丑",
    丑: "子",
    寅: "亥",
    卯: "戌",
    辰: "酉",
    巳: "申",
    午: "未",
    未: "午",
    申: "巳",
    酉: "辰",
    戌: "卯",
    亥: "寅",
};
var SIZHU_QK = {
    yg: "甲",
    yz: "子",
    mz: "子",
    dg: "甲",
    dz: "子",
    hz: "子",
    yj: "子",
};
const Zhi = "子丑寅卯辰巳午未申酉戌亥".split("");
const yangzhi = "子寅辰午申戌";
const yinzhi = "丑卯巳未酉亥";
const yanggan = "甲丙戊庚壬";
const yingan = "乙丁己辛癸";
const D_A = "子寅辰午申戌".split("");
const D_B = "丑卯巳未酉亥".split("");
const Gan = "甲乙丙丁戊己庚辛壬癸".split("");
var Y_GAN = [];
var Y_ZHI = [];
var M_ZHI = [];
var D_GAN = [];
var D_ZHI = [];
var H_ZHI = [];
var YUEJIANG = [];
for (let i in Gan) {
    Y_GAN.push({
        style: i == 0 ? "sz_xz" : "sz_fxz",
        name: Gan[i]
    });
    D_GAN.push({
        style: i == 0 ? "sz_xz" : "sz_fxz",
        name: Gan[i]
    })
};
for (let i in Zhi) {
    M_ZHI.push({
        style: i == 0 ? "sz_xz" : "sz_fxz",
        name: Zhi[i]
    });
    H_ZHI.push({
        style: i == 0 ? "sz_xz" : "sz_fxz",
        name: Zhi[i]
    });
    YUEJIANG.push({
        style: i == 0 ? "sz_xz" : "sz_fxz",
        name: Zhi[i]
    })
};
for (let i in D_A) {
    Y_ZHI.push({
        style: i == 0 ? "sz_xz" : "sz_fxz",
        name: D_A[i]
    });
    D_ZHI.push({
        style: i == 0 ? "sz_xz" : "sz_fxz",
        name: D_A[i]
    })
};

var hs_dt = window.top.dq_time(0);
var zs_dt = window.top.dq_time(0);
let ztys = get_ty_time(JWD_J, window.top.dq_time(0));
let zhobj = {};
let ewjc = 0;
for (let i = 0; i < 12; i++) {
    zhobj["a" + i] = {
        dz: Zhi[i],
        h24: ewjc,
    };
    ewjc = ewjc + 2
};
let qkgae = localStorage.getItem('qk_age');
if (qkgae == null) {
    qkgae = 18
}
const time_nl_ = JSON.parse(localStorage.getItem('time_nl_xz'));
let qkcs = {
    type: "paipan",
    yj: "子",
    zhs: "正时",
    grxz: "甲戊庚牛羊",
    zygr: "自动选择",
    glzxyj: "中气换将",
    sex: "男",
    age: qkgae,
    dt: {},
    shehai: "孟仲季",
    fujia: {
        cd_bq: "朋友",
        cd_ws: "",
        cd_dy: "",
        cd_fk: "",
    },
};
let diy_bjys = localStorage.getItem('backgroud_color_sel');
new Vue({
    el: '#vue',
    data() {
        return {
            yjxz_sn: true,
            color_Picker: false,
            APP_ver: 0,
            pages_ini_div: false,
            pages_ini_arr: JSON.parse(localStorage.getItem("pages_ini")),
            dsq_02: {},
            APP_dw_get: false,
            nl_hdjd: false,
            yjjq: false,
            in_diy_color: diy_bjys?.length > 3 ? diy_bjys : '#FFFFFF',
            time_nl_xz: typeof time_nl_ != 'undefined' ? time_nl_ : false,
            qkjl: [],
            hsdz: "子",
            hddz_index: 0,
            qk_hss: 1,
            in_jingdu: 0,
            YUEJIANG,
            H_ZHI,
            M_ZHI,
            D_ZHI,
            D_GAN,
            Y_ZHI,
            Y_GAN,
            qk_sizhu: "甲子年-子月-甲子日-子时-子将",
            mbtx: "top:-2000px",
            qk_zhs_index: 0,
            GLZXYJ: [{
                name: "中气换将",
                xz: true
            }, {
                name: "交节换将",
                xz: false
            }, {
                name: "日躔换将",
                xz: false
            },],
            qk_zhs: [{
                name: "正时",
                xz: true
            }, {
                name: "活时报数",
                xz: false
            }, {
                name: "四柱",
                xz: false
            }, {
                name: "真太阳时",
                xz: false
            }],
            qk_grxzfs: [{
                name: "甲戊庚牛羊",
                xz: true
            }, {
                name: "甲羊戊庚牛",
                xz: false
            }],
            qk_zygr: [{
                name: "自动选择",
                xz: true
            }, {
                name: "昼贵",
                xz: false
            }, {
                name: "夜贵",
                xz: false
            }],
            qk_shxz: [{
                name: "孟仲季",
                xz: true
            }, {
                name: "深度",
                xz: false
            }],
            qk_sex: [{
                name: "男",
                xz: true
            }, {
                name: "女",
                xz: false
            }],
            qk_age: qkgae ? qkgae : 18,
            qk_time: window.top.dq_time(1),
            jwdlist: [],
            ios_time_jr: false,
            back_selectedColor: '#f0f8ff94',
            zt_selectedColor: '#0b6bc0',
            back_ima_get_file: false,
            fonts_list: [],
            fonts_list_name: "",
            back_sel_arr: [
                {
                    name: "纯色",
                    xz: true
                },
                {
                    name: "图片",
                    xz: false
                }
            ],
            APP_setup_sw: false,
            APP_setup: [
                {
                    name: "地球",
                    xz: true
                },
                {
                    name: "无",
                    xz: false
                }],

        }
    },
    beforeCreate() {

    },
    mounted() {
        window.up_qkjl = this.up_qkjl
    },
    watch: {
        qk_age() {
            let nl = Number(this.qk_age);
            if (nl > 1850 && nl <= window.top.dq_time(0).y) {
                nl = qkcs.dt.y - nl
            }
            this.qk_age = nl;
            localStorage.setItem('qk_age', this.qk_age);
            qkcs.age = String(this.qk_age)
        },
        qk_hss() {
            this.qk_hss_fun()
        },
        in_jingdu(newName, oldName) {
            localStorage.setItem('jwd_jing', newName);
            ztys = get_ty_time(newName, JSON.parse(localStorage.getItem("DQGLTIME")));
            qkcs.dt = ztys.zhen;
            this.tys_zhen_time = qkcs.dt.y + "年" + qkcs.dt.m + "月" + qkcs.dt.d + "日" + qkcs.dt.h + "时" + qkcs.dt.i + "分"
        },
        time_nl_xz() {
            localStorage.setItem('time_nl_xz', this.time_nl_xz);
            if (!this.time_nl_xz) {
                qkcs.dt = JSON.parse(localStorage.getItem("DQGLTIME"))
            }
            if (this.time_nl_xz) {
                let int0 = setInterval(function () {
                    let a = JSON.parse(localStorage.getItem("DQGLTIME"));
                    if (typeof a == "object") {
                        clearInterval(int0);
                        let b = nl_to_gl(a.y, a.m, a.d);
                        qkcs.dt.y = b[0];
                        qkcs.dt.m = b[1];
                        qkcs.dt.d = b[2]
                    }
                }, 100)
            }
        },

    },
    created() {



        let thar = this;

        if (localStorage.getItem("sel_family_xz")) {
            this.fonts_list_name = localStorage.getItem("fonts_list_name")
        }
        // 检查浏览器是否支持 FontFaceSet API
        if ('fonts' in document) {
            document.fonts.ready.then(() => {
                const fontCheck = new Set([
                    // 无衬线字体 (Sans-serif)
                    'Arial', 'Arial Black', 'Arial Narrow',
                    'Verdana', 'Helvetica', 'Helvetica Neue',
                    'Tahoma', 'Trebuchet MS', 'Calibri',
                    'Candara', 'Segoe UI', 'Frutiger',
                    'Lucida Grande', 'Geneva', 'DejaVu Sans',
                    'Ubuntu', 'Roboto', 'Droid Sans',
                    'Noto Sans', 'Liberation Sans',
                    'Microsoft Sans Serif', 'Gill Sans',
                    'Optima', 'Myriad Pro', 'Futura',
                    'Avant Garde', 'Century Gothic',
                    'Franklin Gothic', 'Impact', 'Haettenschweiler',
                    // 衬线字体 (Serif)

                    'Times New Roman', 'Times',
                    'Georgia', 'Palatino', 'Garamond',
                    'Bookman', 'Book Antiqua', 'Baskerville',
                    'Hoefler Text', 'Bodoni MT', 'Courier',
                    'Courier New', 'Century Schoolbook',
                    'Rockwell', 'Cambria', 'Constantia',
                    'Didot', 'American Typewriter',
                    'Lucida Bright', 'Copperplate',
                    'Footlight MT Light', 'Goudy Old Style',
                    // 等宽字体 (Monospace)

                    'Courier New', 'Courier',
                    'Lucida Console', 'Monaco',
                    'Consolas', 'Inconsolata',
                    'DejaVu Sans Mono', 'Andale Mono',
                    'Menlo', 'Source Code Pro',
                    'Liberation Mono', 'Fira Mono',
                    'Roboto Mono', 'Droid Sans Mono',
                    'Noto Mono', 'OCR A Extended',
                    // 手写/装饰性字体 (Script/Decorative)

                    'Comic Sans MS', 'Papyrus',
                    'Brush Script MT', 'Lucida Handwriting',
                    'Apple Chancery', 'Bradley Hand',
                    'Edwardian Script', 'Mistral',
                    'French Script MT', 'Segoe Print',
                    'Segoe Script', 'Monotype Corsiva',
                    'Freestyle Script', 'Vivaldi',
                    'Ravie', 'Jokerman', 'Kristen ITC',
                    'Magneto', 'Matura MT Script Capitals',
                    // 其他语言字体

                    'MS Gothic',// (日语), 
                    'SimSun',// (中文简体), 
                    'PMingLiU',// (中文繁体), 
                    'Gulim',// (韩语), 
                    'Meiryo',// (日语), 
                    'Microsoft JhengHei',// (中文繁体),
                    'Microsoft YaHei',//(中文简体),
                    'KaiTi',// (中文楷体), 
                    'SimHei',// (中文黑体),
                    'FangSong',// (中文仿宋),
                    'DFKai-SB',// (中文标楷体),
                    'Malgun Gothic',// (韩语),
                    'Leelawadee UI',// (泰语),
                    'Nirmala UI',// (印度语系)
                ]);
                const availableFonts = [];
                for (const font of fontCheck) {
                    if (document.fonts.check(`12px "${font}"`)) {
                        availableFonts.push(font);
                    }
                }
                thar.fonts_list = availableFonts
            });
        } else {
            console.log('FontFaceSet API 不支持');
        }

        if (localStorage.getItem("back_sel_arr")) {
            thar.back_sel_arr = JSON.parse(localStorage.getItem("back_sel_arr"))
        }

        for (let i of Zhi) {
            this.GLZXYJ.push({
                name: i,
                xz: false
            })
        }
        function isPC() {
            const ua = navigator.userAgent;
            const screenWidth = Math.max(
                window.screen.width,
                window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            );

            // 设备类型判断
            const isIOS = /iPad|iPhone|iPod/.test(ua);
            const isAndroid = /Android/.test(ua);
            const isWindowsPhone = /Windows Phone/.test(ua);

            // 平板设备判断
            const isiPad = /Macintosh/.test(ua) && 'ontouchend' in document;

            // 屏幕尺寸阈值
            const PC_MIN_WIDTH = 992; // Bootstrap的lg断点

            if (isIOS || isAndroid || isWindowsPhone) {
                // 如果是移动设备，但屏幕宽度足够大，可能是平板或折叠屏手机
                return (isiPad || screenWidth >= PC_MIN_WIDTH) && !/Mobile/.test(ua);
            }

            // 默认情况下，屏幕宽度大于阈值且不是移动设备
            return screenWidth >= PC_MIN_WIDTH;
        }


        let maches = navigator.userAgent.match(/iphone os ([\d_]+) /i);
        if (maches && maches.length >= 2 && maches[1] >= "16_2" || isPC()) {
            this.ios_time_jr = true;
            let dsq_01 = setInterval(function () {
                let A = document.getElementById('ios_date_sel_id').value.split("-");
                let B = window.top.dq_time(0);
                String(B.m).length == 1 && (B.m = "0" + B.m);
                String(B.d).length == 1 && (B.d = "0" + B.d);
                if (A[0] == B.y && A[1] == B.m && A[2] == B.d) {
                    clearInterval(dsq_01)
                } else {
                    thar.ios_dt_up();
                }
            }, 300);
            setInterval(function () {
                if (thar.qk_zhs[0].xz || thar.qk_zhs[3].xz) {
                    qkcs.dt = thar.get_ios_dt()
                }
                if (thar.qk_zhs[3].xz) {
                    qkcs.dt.s = 30;
                    localStorage.setItem("DQGLTIME", JSON.stringify(qkcs.dt));
                    let ztys = get_ty_time(JWD_J, JSON.parse(localStorage.getItem("DQGLTIME")));
                    qkcs.dt = ztys.zhen;
                    thar.tys_zhen_time = qkcs.dt.y + "年" + qkcs.dt.m + "月" + qkcs.dt.d + "日" + qkcs.dt.h + "时" + qkcs.dt.i + "分"
                }
                thar.$forceUpdate();
            }, 900)
        }
        let ua = navigator.userAgent.toLowerCase();
        if (ua.match(/QQ/i) == "qq") {
            this.yjjq = true
        }
        window.top.callDB.get('QKJL').then(res => {
            thar.up_qkjl()
        });
        let jwd = window.top.cs_jwd();
        let jwd_ = [];
        for (let i in jwd) {
            jwd_.push({
                value: {
                    [i]: jwd[i]
                },
                xz: false
            })
        };
        this.jwdlist = jwd_;
        ztys = get_ty_time(JWD_J, window.top.dq_time(0));
        this.in_jingdu = JWD_J;
        qkcs.dt.m = window.top.dq_time(0).m;
        let sz = ["shxz", "sexxz", "zygrxz", "grfsxz", "qkfsxz", "YUEJIANG_SEL", "H_ZHI_SEL", "D_GAN_SEL", "D_ZHI_SEL", "M_ZHI_SEL", "Y_GAN_SEL", "Y_ZHI_SEL"];
        for (let i in sz) {
            let a = localStorage.getItem(sz[i] + "_xz");
            if (a?.length > 0) {
                this[sz[i]](a)
            }
        }












        this.tys_zhen_time = qkcs.dt.y + "年" + qkcs.dt.m + "月" + qkcs.dt.d + "日" + qkcs.dt.h + "时" + qkcs.dt.i + "分";
        this.$forceUpdate();
        document.getElementById('vue').style.opacity = 1;
        thar.dsq_urlcs = setInterval(function () {
            if (localStorage.getItem("qkfxdata")?.length > 1) {
                qkcs = JSON.parse(localStorage.getItem("qkfxdata"));
                console.log("从分享id中起课");
                setTimeout(() => {
                    alert("此链接包含一个分享课例，点击确定进入查看分享的课例");
                    thar.lrqk()
                }, 1200);
                localStorage.setItem("qkfxdata", "");
                clearInterval(thar.dsq_urlcs)
            }
        }, 300);
        setTimeout(function () {
            thar.dt_up()
        }, 300)
        let dsq_01 = setInterval(() => {
            let APP_VER = localStorage.getItem("APP_VER");
            APP_VER && (this.APP_ver = APP_VER, clearInterval(dsq_01));
        }, 1500
        )
        window.top.setAllfont_family(document);




        window.top.callDB.get('back_ima_get_file').then(res => {
            if (res?.length > 1) {
                thar.back_ima_get_file = res
            }
        })
        if (localStorage.getItem('APP_setup') != null) {
            this.APP_setup = JSON.parse(localStorage.getItem('APP_setup'))
        }




        let glyjxz_let = localStorage.getItem('glyjxz_xz')
        if (glyjxz_let != null) {
            this.glyjxz(glyjxz_let)
        }






    },
    methods: {
        family_to_cn(e) {
            const systemFonts = {
                // 无衬线字体 (Sans-serif)
                'Arial': '通用无衬线字体',
                'Arial Black': '加粗无衬线体',
                'Arial Narrow': '窄体无衬线',
                'Verdana': '清晰的无衬线字体',
                'Helvetica': '经典无衬线体',
                'Helvetica Neue': 'Helvetica新版本',
                'Tahoma': '清晰的中小字号无衬线',
                'Trebuchet MS': '微软无衬线字体',
                'Calibri': '微软默认无衬线',
                'Candara': '微软清新无衬线',
                'Segoe UI': '微软界面字体',
                'Frutiger': '人文主义无衬线',
                'Lucida Grande': 'Mac系统无衬线',
                'Geneva': 'Mac经典无衬线',
                'DejaVu Sans': 'Linux开源无衬线',
                'Ubuntu': 'Ubuntu系统字体',
                'Roboto': 'Android系统字体',
                'Droid Sans': '早期Android字体',
                'Noto Sans': 'Google多语言字体',
                'Liberation Sans': '开源Arial替代',
                'Microsoft Sans Serif': '微软旧版界面字体',
                'Gill Sans': '英式人文无衬线',
                'Optima': '苹果高端无衬线',
                'Myriad Pro': 'Adobe无衬线字体',
                'Futura': '几何无衬线体',
                'Avant Garde': '前卫无衬线',
                'Century Gothic': '圆形无衬线',
                'Franklin Gothic': '传统新闻无衬线',
                'Impact': '厚重标题字体',
                'Haettenschweiler': '窄体标题字体',

                // 衬线字体 (Serif)
                'Times New Roman': '通用衬线字体',
                'Times': '经典衬线体',
                'Georgia': '屏幕优化衬线',
                'Palatino': '书籍正文衬线',
                'Garamond': '传统印刷衬线',
                'Bookman': '宽体衬线字体',
                'Book Antiqua': '古典衬线体',
                'Baskerville': '过渡衬线体',
                'Hoefler Text': 'Mac高端衬线',
                'Bodoni MT': '现代衬线体',
                'Courier': '传统等宽衬线',
                'Courier New': '改进版等宽衬线',
                'Century Schoolbook': '教科书衬线',
                'Rockwell': '几何衬线体',
                'Cambria': '微软正文字体',
                'Constantia': '微软优雅衬线',
                'Didot': '时尚杂志衬线',
                'American Typewriter': '打字机风格',
                'Lucida Bright': 'Lucida衬线版',
                'Copperplate': '铜版印刷风格',
                'Footlight MT Light': '细衬线字体',
                'Goudy Old Style': '古典衬线体',

                // 等宽字体 (Monospace)
                'Courier New': '通用等宽字体',
                'Courier': '传统等宽字体',
                'Lucida Console': 'Mac等宽字体',
                'Monaco': '编程等宽字体',
                'Consolas': '微软编程字体',
                'Inconsolata': '开源编程字体',
                'DejaVu Sans Mono': 'Linux等宽字体',
                'Andale Mono': '旧版等宽字体',
                'Menlo': 'Mac终端字体',
                'Source Code Pro': 'Adobe编程字体',
                'Liberation Mono': '开源等宽字体',
                'Fira Mono': 'Mozilla编程字体',
                'Roboto Mono': 'Android等宽字体',
                'Droid Sans Mono': '早期Android等宽',
                'Noto Mono': 'Google等宽字体',
                'OCR A Extended': 'OCR识别字体',

                // 手写/装饰性字体 (Script/Decorative)
                'Comic Sans MS': '手写风格字体',
                'Papyrus': '仿古纸莎草字体',
                'Brush Script MT': '毛笔手写体',
                'Lucida Handwriting': '优雅手写体',
                'Apple Chancery': '苹果书法字体',
                'Bradley Hand': '真实手写风格',
                'Edwardian Script': '爱德华手写体',
                'Mistral': '法式手写体',
                'French Script MT': '法式书法',
                'Segoe Print': '微软印刷风格',
                'Segoe Script': '微软手写风格',
                'Monotype Corsiva': '斜体书法',
                'Freestyle Script': '自由手写体',
                'Vivaldi': '艺术装饰字体',
                'Ravie': '卡通装饰字体',
                'Jokerman': '趣味装饰字体',
                'Kristen ITC': '儿童手写体',
                'Magneto': '粗体装饰字体',
                'Matura MT Script Capitals': '大写装饰体',

                // 其他语言字体
                'MS Gothic': '日语等宽字体',
                'SimSun': '中文宋体',
                'PMingLiU': '中文细明体',
                'Gulim': '韩语字体',
                'Meiryo': '日语微软雅黑',
                'Microsoft JhengHei': '中文微软正黑体',
                'Microsoft YaHei': '中文微软雅黑',
                'KaiTi': '中文楷体',
                'SimHei': '中文黑体',
                'FangSong': '中文仿宋',
                'DFKai-SB': '中文标楷体',
                'Malgun Gothic': '韩语无衬线',
                'Leelawadee UI': '泰语字体',
                'Nirmala UI': '印度语系字体'
            };
            let data
            try {
                data = systemFonts[e]
            } catch (error) {
                data="无描述"
            }
            return data
        },
        sel_family(e) {
            localStorage.setItem("fonts_list_name", e)
            this.fonts_list_name = e
            console.log(e)
            this.$forceUpdate();
        },
        to_family_style(e) {
            return `font-family: '${e}';`
        },
        qk_hss_fun() {
            int = Number(this.qk_hss);
            if (int == 0) {
                int = -1
            }
            int = Math.abs(int);
            int = parseInt(int);
            int = int % 12;
            if (int == 0) {
                int = 12
            }
            let a = zhobj["a" + (int - 1)];
            hs_dt.h = a.h24;
            qkcs.dt = hs_dt;
            this.hsdz = a.dz;
            console.log(qkcs.dt)
            this.$forceUpdate()
        },
        Zhi_to_nub(zhi) {
            return Zhi.indexOf(zhi)
        },
        APP_SETUP_FUN(name) {
            let index = 0
            this.APP_setup.map(data => {
                index++
                if (data.name == name) {
                    data.xz = true
                    localStorage.setItem("APP_dw", "APP_SETUP_" + index + '|')
                } else {
                    data.xz = false
                }
            })
            localStorage.setItem('APP_setup', JSON.stringify(this.APP_setup))
        },
        debug_mousedown() {
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
                        thar.dele_localStorage()
                    }
                }
            }, 10)
        },
        debug_mouseup() {
            clearTimeout(this.set_diy_shensha_mouse_qsd)
            this.set_diy_shensha_mouse = 0
            document.querySelector('.progress').style.setProperty('--progress', this.set_diy_shensha_mouse + '%');
        },
        dele_localStorage() {
            localStorage.clear();
            window.top.reload();
        },
        back_sel_arr_FC(item) {
            for (let i in this.back_sel_arr) {
                if (this.back_sel_arr[i].name == item) {
                    this.back_sel_arr[i].xz = true
                } else {
                    this.back_sel_arr[i].xz = false
                }
            }
            localStorage.setItem("back_sel_arr", JSON.stringify(this.back_sel_arr))

            if (this.back_sel_arr[1].xz) {
                window.top.callDB.get('back_ima_get_file').then(res => {
                    if (res?.length > 1) {
                        localStorage.removeItem("back_selectedColor")
                    }
                })

            }
            this.$forceUpdate()
        },
        back_ima_onColorChange(event) {
            let thar = this
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onloadend = function () {
                console.log(reader.result)
                window.top.callDB.set('back_ima_get_file', reader.result)
                thar.back_ima_get_file = reader.result
            }
        },
        back_onColorChange(event) {
            localStorage.setItem("back_selectedColor", event.target.value)
        },
        zt_onColorChange(event) {
            localStorage.setItem("zt_selectedColor", event.target.value)

            localStorage.setItem("APP_dw", "zhuti_color_" + hexToArgb(event.target.value) + "_zhuti_color");
            function hexToArgb(hexColor) {
                // 去除可能的井号 (#)
                hexColor = hexColor.replace("#", "");
                // 根据长度判断是否包含Alpha通道
                let a = 255; // 默认Alpha为255（不透明）
                if (hexColor.length === 8) {
                    a = parseInt(hexColor.substring(0, 2), 16);
                    hexColor = hexColor.substring(2); // 去除Alpha部分，以便统一处理RGB
                }
                // 解析RGB值
                const r = parseInt(hexColor.substring(0, 2), 16);
                const g = parseInt(hexColor.substring(2, 4), 16);
                const b = parseInt(hexColor.substring(4, 6), 16);
                return a + '|' + r + '|' + g + '|' + b;
            }
        },
        un_jlcf() {
            let thar = this
            let a = this.qkjl
            function deepEqual(obj1, obj2) {
                const keys1 = Object.keys(obj1);
                const keys2 = Object.keys(obj2);

                if (keys1.length !== keys2.length) {
                    return false;
                }

                for (let key of keys1) {
                    if (key === 'QKSJC' || key === 'qjsj') continue;

                    const val1 = obj1[key];
                    const val2 = obj2[key];

                    const areObjects = isObject(val1) && isObject(val2);
                    if (
                        areObjects && !deepEqual(val1, val2) ||
                        !areObjects && val1 !== val2
                    ) {
                        return false;
                    }
                }

                return true;
            }

            function isObject(item) {
                return item && typeof item === 'object' && !Array.isArray(item);
            }

            function removeDuplicateItems(arr) {
                const uniqueItems = [];
                arr.forEach((item) => {
                    let isUnique = true;
                    for (let uniqueItem of uniqueItems) {
                        if (deepEqual(item, uniqueItem)) {
                            isUnique = false;
                            break;
                        }
                    }
                    if (isUnique) {
                        uniqueItems.push(item);
                    }
                });
                return uniqueItems;
            }
            // 调用函数并打印结果
            let b = removeDuplicateItems(a)
            let c = "检测到有" + (this.qkjl.length - b.length) + "个重复记录,是否删除重复记录"
            if ((this.qkjl.length - b.length) == 0) {
                c = "没有检测到起课记录中有重复项"
            }
            let result = confirm(c);
            if (result) {
                window.top.callDB.set('QKJL', b).then(res => {
                    res && thar.up_qkjl()
                })
            } else {
                // alert("你点击了取消按钮！");
            }




        },
        pages_ini_sava() {
            this.pages_ini_div = false;
            window.top.reload()
        },
        pages_ini_set(name) {
            let A = this.pages_ini_arr;
            for (let i in A) {
                if (i === name) {
                    A[i] = !A[i]
                }
            }
            this.pages_ini_arr = A;
            localStorage.setItem("pages_ini", JSON.stringify(A));
            this.$forceUpdate()
        },
        get_APP_dw(e) {
            let thar = this;
            if (e === false) {
                localStorage.setItem("APP_dw", "app_get_dw_setup");
                thar.dsq_02 = setInterval(() => {
                    let A = localStorage.getItem("APP_DW_JINGDU");
                    if (A.indexOf(".") != -1) {
                        thar.in_jingdu = A
                    }
                    console.log(A)
                }, 600)
            }
            if (e === true) {
                localStorage.setItem("APP_dw", "app_get_dw_stop");
                clearInterval(thar.dsq_02)
            }
            console.log(e);
            this.APP_dw_get = !e
        },
        get_ios_dt() {
            let date = document.getElementById('ios_date_sel_id').value.split("-");
            let time = document.getElementById('ios_time_sel_id').value.split(":");
            if (date[1].charAt(0) == 0) {
                date[1] = date[1].charAt(1)
            }
            if (date[2].charAt(0) == 0) {
                date[2] = date[2].charAt(1)
            }
            if (time[0].charAt(0) == 0) {
                time[0] = time[0].charAt(1)
            }
            if (time[1].charAt(0) == 0) {
                time[1] = time[1].charAt(1)
            }
            return {
                y: date[0],
                m: date[1],
                d: date[2],
                h: time[0],
                i: time[1],
            }
        },
        ios_dt_up() {
            let dt_arr = window.top.dq_time(0);
            String(dt_arr.m).length == 1 && (dt_arr.m = "0" + dt_arr.m);
            String(dt_arr.d).length == 1 && (dt_arr.d = "0" + dt_arr.d);
            String(dt_arr.h).length == 1 && (dt_arr.h = "0" + dt_arr.h);
            String(dt_arr.i).length == 1 && (dt_arr.i = "0" + dt_arr.i);
            document.getElementById('ios_date_sel_id').value = dt_arr.y + "-" + dt_arr.m + "-" + dt_arr.d;
            document.getElementById('ios_time_sel_id').value = dt_arr.h + ":" + dt_arr.i
        },
        dt_up() {
            qkcs.dt = window.top.dq_time(0);
            this.qk_time = window.top.dq_time(1);
            localStorage.setItem("DQGLTIME", JSON.stringify(window.top.dq_time(0)));
            if (this.qk_zhs_index == 3) {
                let ztys = get_ty_time(JWD_J, JSON.parse(localStorage.getItem("DQGLTIME")));
                qkcs.dt = ztys.zhen;
                this.tys_zhen_time = qkcs.dt.y + "年" + qkcs.dt.m + "月" + qkcs.dt.d + "日" + qkcs.dt.h + "时" + qkcs.dt.i + "分"
            }
            this.$forceUpdate()
        },
        tebiemingxie() {
            document.getElementById('LLKsrc').src = "../../components/tebiemingxie/index.html";
            document.getElementById('LLKID_title').innerText = "特别鸣谢";
            document.getElementById('LLKID').style.top = "0vh"
        },
        dkqqqun() {
            if (this.APP_ver != 0) {
                localStorage.setItem("APP_dw", "QQqun");
            } else {
                window.open("https://qm.qq.com/cgi-bin/qm/qr?k=bLDIGjbtcQ6EM55X3Niph2wzrjv6JBpq&jump_from=webapi&authKey=yzeUdORSuae8uhDYjRYZfOsGJooUTGNFDvZpt4TwZ/dGuHmZx+9oyV6IvX9GNmD")
            }


        },
        jwd_tq() {
            document.getElementById('jwdmb_id').style.display = "block";
            document.getElementById('jwdmb_id').style.opacity = "1"
        },
        jwd_sq() {
            document.getElementById('jwdmb_id').style.opacity = "0";
            document.getElementById('jwdmb_id').style.display = "none"
        },
        jdxq(e) {
            localStorage.setItem('jwd_jing', e);
            this.in_jingdu = e;
            this.$forceUpdate()
        },
        YUEJIANG_SEL(index) {
            localStorage.setItem("YUEJIANG_SEL_xz", index);
            for (let j in this.YUEJIANG) {
                this.YUEJIANG[j].name == index && (qkcs.yj = this.YUEJIANG[j].name);
                this.YUEJIANG[j].style = this.YUEJIANG[j].name == index ? "sz_xz" : "sz_fxz"
            }
            this.$forceUpdate()
        },
        H_ZHI_SEL(index) {
            localStorage.setItem("H_ZHI_SEL_xz", index);
            for (let j in this.H_ZHI) {
                this.H_ZHI[j].name == index && (SIZHU_QK.hz = this.H_ZHI[j].name);
                this.H_ZHI[j].style = this.H_ZHI[j].name == index ? "sz_xz" : "sz_fxz"
            }
            this.$forceUpdate()
        },
        D_ZHI_SEL(index) {
            localStorage.setItem("D_ZHI_SEL_xz", index);
            for (let j in this.D_ZHI) {
                ;
                this.D_ZHI[j].name == index && (SIZHU_QK.dz = this.D_ZHI[j].name);
                this.D_ZHI[j].style = this.D_ZHI[j].name == index ? "sz_xz" : "sz_fxz"
            }
            this.$forceUpdate()
        },
        D_GAN_SEL(index) {
            localStorage.setItem("D_GAN_SEL_xz", index);
            let A = "",
                B = [];
            if (yanggan.indexOf(index) != -1) {
                A = yangzhi.split("")
            }
            if (yingan.indexOf(index) != -1) {
                A = yinzhi.split("")
            }
            for (let i in A) {
                i == 0 && (SIZHU_QK.dz = A[i]);
                B.push({
                    style: i == 0 ? "sz_xz" : "sz_fxz",
                    name: A[i]
                })
            }
            this.D_ZHI = B;
            for (let j in this.D_GAN) {
                this.D_GAN[j].name == index && (SIZHU_QK.dg = this.D_GAN[j].name);
                this.D_GAN[j].style = this.D_GAN[j].name == index ? "sz_xz" : "sz_fxz"
            }
            this.$forceUpdate()
        },
        M_ZHI_SEL(index) {
            localStorage.setItem("M_ZHI_SEL_xz", index);
            for (let j in this.M_ZHI) {
                this.M_ZHI[j].name == index && (SIZHU_QK.mz = this.M_ZHI[j].name);
                if (this.M_ZHI[j].name == index) {
                    this.YUEJIANG_SEL(dzlh[this.M_ZHI[j].name])
                }
                this.M_ZHI[j].style = this.M_ZHI[j].name == index ? "sz_xz" : "sz_fxz"
            }
            this.$forceUpdate()
        },
        Y_ZHI_SEL(index) {
            localStorage.setItem("Y_ZHI_SEL_xz", index);
            for (let j in this.Y_ZHI) {
                this.Y_ZHI[j].name == index && (SIZHU_QK.yz = this.Y_ZHI[j].name);
                this.Y_ZHI[j].style = this.Y_ZHI[j].name == index ? "sz_xz" : "sz_fxz"
            }
            this.$forceUpdate()
        },
        Y_GAN_SEL(index) {
            localStorage.setItem("Y_GAN_SEL_xz", index);
            let A = "",
                B = [];
            if (yanggan.indexOf(index) != -1) {
                A = yangzhi.split("")
            }
            if (yingan.indexOf(index) != -1) {
                A = yinzhi.split("")
            }
            for (let i in A) {
                i == 0 && (SIZHU_QK.yz = A[i]);
                B.push({
                    style: i == 0 ? "sz_xz" : "sz_fxz",
                    name: A[i]
                })
            }
            this.Y_ZHI = B;
            for (let j in this.Y_GAN) {
                this.Y_GAN[j].name == index && (SIZHU_QK.yg = this.Y_GAN[j].name);
                this.Y_GAN[j].style = this.Y_GAN[j].name == index ? "sz_xz" : "sz_fxz"
            }
            this.$forceUpdate()
        },
        szsel_ok() {
            qkcs.dt = {
                y: SIZHU_QK.yg + SIZHU_QK.yz,
                m: SIZHU_QK.mz,
                d: SIZHU_QK.dg + SIZHU_QK.dz,
                h: SIZHU_QK.hz,
            };
            this.qk_sizhu = qkcs.dt.y + "年-" + qkcs.dt.m + "月-" + qkcs.dt.d + "日-" + qkcs.dt.h + "时-" + qkcs.yj + "将";
            this.szk_sq()
        },
        szk_sq() {
            this.mbtx = "top:-2000px;";
            this.$forceUpdate()
        },
        szk_tc() {
            this.mbtx = "top:12%;";
            this.$forceUpdate()
        },
        scqkjl(item) {
            let thar = this;
            window.top.callDB.get('QKJL').then(res => {
                let a = [];
                for (let i in res) {
                    if (res[i].QKSJC != item) {
                        a.push(res[i])
                    }
                }
                window.top.callDB.set('QKJL', a).then(res => {
                    thar.up_qkjl()
                })
            })
        },
        qkju_tab(item) {
            if (!item.fujia) {
                item.fujia = {
                    cd_bq: "朋友",
                    cd_ws: "",
                    cd_dy: "",
                    cd_fk: "",
                }
            }
            localStorage.setItem("lrppcs", JSON.stringify(item));
            document.getElementById('LLKsrc').src = "../paipan/index.html";
            document.getElementById('LLKID_title').innerText = "六壬起个课";
            document.getElementById('LLKID').style.top = "0vh"
        },
        lrqk() {
            qkcs.QKSJC = Date.parse(new Date());
            let A = JSON.stringify(qkcs);
            // console.log("起课参数为", qkcs);
            localStorage.setItem("lrppcs", A);
            document.getElementById('LLKsrc').src = "../paipan/index.html";
            document.getElementById('LLKID_title').innerText = "六壬起个课";
            document.getElementById('LLKID').style.top = "0vh";
            // console.log("起课页面文档", document.getElementById('LLKsrc'));
            let thar = this;
            window.top.callDB.get('QKJL').then(res => {
                if (typeof res == "string") {
                    res = []
                }
                res.push(JSON.parse(A));
                window.top.callDB.set('QKJL', res).then(res => {
                    res && thar.up_qkjl()
                })
            })
        },
        dq_dt(timestamp) {
            let dt = new Date(timestamp);
            var Y = dt.getFullYear();
            var M = dt.getMonth() + 1;
            var D = dt.getDate();
            var h = dt.getHours();
            var i = dt.getMinutes();
            var s = dt.getSeconds();
            return Y + "年" + M + "月" + D + "日" + h + "时" + i + `分(${this.ymdhs_data(timestamp)})`
        },
        ymdhs_data(timestamp) {
            const now = Date.now();
            let difference = now - timestamp;
            difference = difference / 1000;
            if (difference < -1) {
                return '您穿越了'
            }
            if (difference < 30) {
                return '半分钟前'
            }
            if (difference < 60) {
                return '1分钟前'
            }
            if ((difference / 60) > 1 && (difference / 60) < 60) {
                return Math.round(difference / 60) + '分钟前'
            }
            if ((difference / 3600) > 1 && (difference / 3600) < 24) {
                return Math.round(difference / 3600) + '小时前'
            }
            if ((difference / 86400) > 1 && (difference / 86400) < 30) {
                return Math.round(difference / 86400) + '天前'
            }
            if ((difference / 2592000) > 1 && (difference / 2592000) < 12) {
                return Math.round(difference / 2592000) + '月前'
            }
            if ((difference / (2592000 * 12)) > 1) {
                return Math.round(difference / (2592000 * 12)) + '年前'
            }
        },
        up_qkjl() {
            let thar = this;
            window.top.callDB.get('QKJL').then(res => {
                if (res.length > 0) {
                    for (let i in res) {
                        res[i].qjsj = thar.dq_dt(res[i].QKSJC)
                    }
                    thar.qkjl = res;
                    thar.qkjl = thar.qkjl.sort(thar.arr_desc('QKSJC', false));
                    thar.$forceUpdate()
                }
                if (res.length == 0) {
                    thar.qkjl = []
                    thar.$forceUpdate()
                }
            })
        },
        arr_desc(key, desc) {
            return function (a, b) {
                let value1 = a[key];
                let value2 = b[key];
                if (desc == true) {
                    return value1 - value2
                } else {
                    return value2 - value1
                }
            }
        },
        glyjxz(index) {
            localStorage.setItem('glyjxz_xz', index)
            for (let i in this.GLZXYJ) {
                if (this.GLZXYJ[i].name == index) {
                    this.GLZXYJ[i].xz = true
                } else {
                    this.GLZXYJ[i].xz = false
                }
            }
            qkcs.glzxyj = index;
            this.$forceUpdate()
        },
        shxz(index) {
            localStorage.setItem("shxz_xz", index);
            for (let i in this.qk_shxz) {
                if (this.qk_shxz[i].name == index) {
                    this.qk_shxz[i].xz = true
                } else {
                    this.qk_shxz[i].xz = false
                }
            }
            qkcs.shehai = index;
            this.$forceUpdate()
        },
        dtxz() {
            let ccsj = {
                y: qkcs.dt.y,
                m: qkcs.dt.m,
                d: qkcs.dt.d,
                h: qkcs.dt.h,
                i: qkcs.dt.i
            };
            sjxz.ssjrq(0, ccsj).then(res => {
                res.s = 30;
                this.qk_time = res.y + "年" + res.m + "月" + res.d + "日" + res.h + "时" + res.i + "分";
                qkcs.dt = res;
                zs_dt = qkcs.dt;
                localStorage.setItem("DQGLTIME", JSON.stringify(res));
                this.tys_zhen_time = qkcs.dt.y + "年" + qkcs.dt.m + "月" + qkcs.dt.d + "日" + qkcs.dt.h + "时" + qkcs.dt.i + "分";
                if (this.qk_zhs[3].xz == true) {
                    ztys = get_ty_time(this.in_jingdu, JSON.parse(localStorage.getItem("DQGLTIME")));
                    qkcs.dt = ztys.zhen;
                    this.tys_zhen_time = qkcs.dt.y + "年" + qkcs.dt.m + "月" + qkcs.dt.d + "日" + qkcs.dt.h + "时" + qkcs.dt.i + "分"
                }
                if (this.time_nl_xz) {
                    let dt = JSON.parse(localStorage.getItem("DQGLTIME"));
                    let A = nl_to_gl(dt.y, dt.m, dt.d);
                    qkcs.dt.y = A[0];
                    qkcs.dt.m = A[1];
                    qkcs.dt.d = A[2]
                }
                this.$forceUpdate()
            })
        },
        sexxz(index) {
            localStorage.setItem("sexxz_xz", index);
            for (let i in this.qk_sex) {
                if (this.qk_sex[i].name == index) {
                    this.qk_sex[i].xz = true
                } else {
                    this.qk_sex[i].xz = false
                }
            }
            this.$forceUpdate();
            qkcs.sex = index
        },
        zygrxz(index) {
            localStorage.setItem("zygrxz_xz", index);
            for (let i in this.qk_zygr) {
                if (this.qk_zygr[i].name == index) {
                    this.qk_zygr[i].xz = true
                } else {
                    this.qk_zygr[i].xz = false
                }
            }
            qkcs.zygr = index;
            this.$forceUpdate()
        },
        grfsxz(index) {
            localStorage.setItem("grfsxz_xz", index);
            for (let i in this.qk_grxzfs) {
                if (this.qk_grxzfs[i].name == index) {
                    this.qk_grxzfs[i].xz = true
                } else {
                    this.qk_grxzfs[i].xz = false
                }
            }
            qkcs.grxz = index;
            this.$forceUpdate()
        },
        qkfsxz(index) {
            localStorage.setItem("qkfsxz_xz", index);
            if (this.time_nl_xz && index == "正时") {
                let int0 = setInterval(function () {
                    let a = JSON.parse(localStorage.getItem("DQGLTIME"));
                    if (typeof a == "object") {
                        clearInterval(int0);
                        let b = nl_to_gl(a.y, a.m, a.d);
                        qkcs.dt.y = b[0];
                        qkcs.dt.m = b[1];
                        qkcs.dt.d = b[2]
                    }
                }, 100)
            }
            if (index == "活时报数") {
                this.qk_hss_fun()
            }
            for (let i in this.qk_zhs) {
                if (this.qk_zhs[i].name == index) {
                    this.qk_zhs[i].xz = true;
                    this.qk_zhs_index = i
                } else {
                    this.qk_zhs[i].xz = false
                }
            }
            qkcs.zhs = index;
            if (index == "四柱") {
                if (typeof qkcs.dt.y == "number") {
                    qkcs.dt = {
                        y: SIZHU_QK.yg + SIZHU_QK.yz,
                        m: SIZHU_QK.mz,
                        d: SIZHU_QK.dg + SIZHU_QK.dz,
                        h: SIZHU_QK.hz
                    };
                    qkcs.yj = SIZHU_QK.yj
                }
            }
            if (index == "活时") {
                qkcs.dt = hs_dt
            }
            if (index == "正时") {
                qkcs.dt = zs_dt
            }
            if (index == "真太阳时") {
                let ztys = get_ty_time(JWD_J, JSON.parse(localStorage.getItem("DQGLTIME")));
                qkcs.dt = ztys.zhen;
                this.tys_zhen_time = qkcs.dt.y + "年" + qkcs.dt.m + "月" + qkcs.dt.d + "日" + qkcs.dt.h + "时" + qkcs.dt.i + "分"
            }
            this.$forceUpdate()
        },
        getjwd() {
            if (!this.SLJC) {
                this.SLJC = 1;
                setInterval(() => this.SLJC > 0 && this.SLJC--, 1500)
            }
            this.SLJC++;
            let thar = this;
            const url = 'https://restapi.amap.com/v3/ip?key=983ec8ae4d04a62c07378ff8e80fba88';
            console.log(false && '高德地图免费api');
            let xmlhttp;
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest()
            } else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    let jg = JSON.parse(xmlhttp.responseText);
                    if (jg.info == 'OK') {
                        window.top.xxk.loading("获取经度中", false);
                        window.top.xxk.dibutishi("获取经度成功", 1500);
                        let jwd = jg.rectangle.split(';')[0].split(',')[0];
                        thar.in_jingdu = jwd
                    } else {
                        window.top.xxk.dibutishi("×获取经度失败×", 1500)
                    }
                }
            };
            if (this.SLJC < 8) {
                window.top.xxk.loading("获取经度中", true);
                xmlhttp.open("GET", url, true);
                xmlhttp.send()
            }
            if (this.SLJC > 9) {
                window.top.xxk.dibutishi("×获取经度次数频繁×", 1500)
            }
        }
    }
});

function up_qkjl() {
    window.up_qkjl()
}

function llkgb() {
    let a = document.getElementById('LLKsrc');
    document.getElementById('LLKID').style.top = "120vh";
    setTimeout(() => {
        a.src = ""
    }, 300);
    if (a.src.indexOf("paipan/index") != -1) {
        window.up_qkjl();
        console.log("刷新起课记录")
    }
}
