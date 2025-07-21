let FMSVG;
let sszhi_txt = "驿马发用|闭口发用|占婚姻|失脱|行人|失物|发用".split("|");
const HelloVueApp = {
    data() {
        return {
            ziliao_zhiding: JSON.parse(localStorage.getItem("ziliao_zhiding")),
            LLKID: '220vh',
            sel_index_id: "",
            llk_ztdx: 100,
            zhiding: false,
            list: [],
            typeindex: 0,
            sszhi: Object.freeze(sszhi_txt[Math.floor(Math.random() * sszhi_txt.length)]),
        }
    },
    watch: {
        sszhi(newName, oldName) {
            if (newName == "") {
                this.typeindex = 0
            }
        },
        zhiding() {
            let a = localStorage.getItem("ziliao_zhiding")
            a = JSON.parse(a)
            if (this.zhiding) {
                a.push(this.sel_index_id)
                localStorage.setItem("ziliao_zhiding", JSON.stringify(a))
                this.ziliao_zhiding = a
            } else {
                let xsz = []
                for (let i of a) {
                    if (i != this.sel_index_id) {
                        xsz.push(i)
                    }
                }
                localStorage.setItem("ziliao_zhiding", JSON.stringify(xsz))
                this.ziliao_zhiding = xsz
            }

        },
    },
    mounted() {
        window.llkgb = this.llkgb
        window.sousuo = this.sousuo
        window.LLKsrc = this.LLKsrc
        window.llkwzsx = this.llkwzsx
    },
    beforeCreate: function () { },
    created: function () {
       window.top.setAllfont_family(document);

        this.setup()
    },
    methods: {
        qxzd(id) {
            let a = localStorage.getItem("ziliao_zhiding")
            a = JSON.parse(a)
            let xsz = []
            for (let i of a) {
                if (i != id) {
                    xsz.push(i)
                }
            }
            localStorage.setItem("ziliao_zhiding", JSON.stringify(xsz))
            this.ziliao_zhiding = xsz
            this.setup()
        },

        setup() {
            let thar = this;
            let A = localStorage.getItem('ZILIAO_LIST');
            if (A?.length > 5) {
                const map = new Map();
                this.ziliao_zhiding.forEach((id, index) => {
                    map.set(id, index);
                });

                function customSort(a, b) {
                    if (map.has(a._id) && map.has(b._id)) {
                        return map.get(a._id) - map.get(b._id);
                    }
                    else if (map.has(a._id)) {
                        return -1;
                    }
                    else if (map.has(b._id)) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
                let aaa = JSON.parse(A).sort(customSort);
                thar.list = aaa;
                // thar.typeindex = 0;
                thar.jzk_xs();
                thar.llkwzsx();
                thar.jitc();
                thar.urlss();
                thar.$forceUpdate();
                return
            } else {
                this.get_list()
            }
            let dshqlist=localStorage.getItem("dshqlist")
            if(dshqlist?.length==undefined){
                dshqlist=0
            }
            dshqlist++;
           

            if(dshqlist>10){
                dshqlist=0
                this.get_list()             
            }
            localStorage.setItem("dshqlist", dshqlist)
        },
        get_list(){
            let thar=this
            window.top.callFunction({
                name: "web__liuren",
                data: {
                    type: "hqjxzl"
                },
                success(res) {
                    window.top.xxk.dibutishi('获取最新资料列表', 1800);
                    console.log('获取最新资料列表')
                    let data = res.result;
                    thar.list = data;
                    thar.typeindex = 0;
                    localStorage.setItem('ZILIAO_LIST', JSON.stringify(data));
                    if (document.getElementById('vue').style.opacity != 1) {
                        thar.jzk_xs();
                        thar.jitc()
                    }
                    thar.urlss()
                }
            })
        },
        if_zhiding(id) {
            return this.ziliao_zhiding.includes(id) ? "取消置顶" : ""
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
            if (localStorage.getItem("zlss")?.length > 1) {
                this.sszhi = decodeURI(localStorage.getItem("zlss"));
                this.sousuo();
                localStorage.setItem("zlss", "")
            }
            if (localStorage.getItem("zlid")?.length > 1) {
                this.chakanwenzhang(localStorage.getItem("zlid"), "");
                localStorage.setItem("zlid", "")
            }
        },
        jitc() {
            let a = localStorage.getItem('zl_LLKID_top');
            this.LLKID = a ? a : "220vh";
            let b = localStorage.getItem('zl_LLKsrc_src');
            this.LLKsrc = b ? b : ""
            let c = localStorage.getItem('zl_LLKID_tltie');
            this.llk_tltie = c ? c : ""
        },
        chakanwenzhang(id, title) {
            this.sel_index_id = id
            let A = '../../components/fuwenben/index.html?type=ydwz&id=' + id;
            let data = localStorage.getItem("ziliao_zhiding")
            data = JSON.parse(data)
            if (data.includes(id)) {
                this.zhiding = true
            } else {
                this.zhiding = false
            }
            this.LLKCK(A, title)
        },
        cksswz(ssz, index, id, title) {
            this.sel_index_id = id
            let A = '../../components/fuwenben/index.html?type=sswz&id=' + id + "&ssz=" + ssz + "&index=" + index;
            this.LLKCK(A, title)
        },
        LLKCK(A, title) {
            this.llk_tltie = title
            localStorage.setItem('zl_LLKID_tltie', title);
            this.LLKsrc = A
            localStorage.setItem('zl_LLKsrc_src', A);
            this.LLKID = "0vh"
            localStorage.setItem('zl_LLKID_top', "0vh")
        },
        sousuo() {
            let thar = this;
            if (this.sszhi == "") {
                return
            }
            window.top.xxk.loading("搜索中", true);
            let hc_key = 'ZILIAO_LIST_SOUSOU_' + this.sszhi;
            setTimeout(function () {
                window.top.callDB.get(hc_key).then(res => {
                    if (res) {
                        thar.sslist = Object.freeze(JSON.parse(res));
                        thar.typeindex = 1;
                        thar.$forceUpdate();
                        window.top.xxk.loading("搜索中", false);
                        window.top.xxk.dibutishi('搜索完成', 1800);
                        return
                    }
                    window.top.callFunction({
                        name: "web__liuren",
                        data: {
                            type: "sszlzw",
                            sousuozhi: thar.sszhi
                        },
                        success(res) {
                            let data = Object.freeze(res.result);
                            window.top.xxk.loading("搜索中", false);
                            window.top.xxk.dibutishi('搜索完成', 1500);
                            thar.sslist = data;
                            thar.typeindex = 1;
                            thar.$forceUpdate();
                            window.top.callDB.set(hc_key, JSON.stringify(data))
                        }
                    })
                })
            }, 50)
        },
        fm_svg(name) {
            if (!name) {
                name = "精选资料"
            };
            let size = ['0', '0', '0', '0', '90', '60', '50', '55', '45', '35', '37', '34', '30', '25', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'][name.length];
            return Object.freeze(FMSVG.replace(/NAME_SVG/gi, name).replace(/NAMESIZE/gi, size))
        },
        llkwzsx() {
            let b = localStorage.getItem('LLKsrc_fontsize');
            if (!b) {
                b = 100
            }
            this.llk_ztdx = b
            if (document.getElementById("LLKsrc") != null) {
                document.getElementById("LLKsrc").contentWindow.document.body.style['font-size'] = b + "%"
            }
        },
        llkgb() {
            this.LLKID = "220vh"
            this.LLKsrc = "../../components/bianjiye/index.html"
            localStorage.setItem('zl_LLKID_top', "120vh")
            this.setup()
        }
    }
};


function llktzkz(e) {
    let b = localStorage.getItem('LLKsrc_fontsize');
    if (!b) {
        b = 100
    };
    b = Number(b);
    if (e == '+') {
        b = b + 5
    } else {
        b = b - 5
    };
    if (b > 300) {
        b = 300
    };
    if (b < 10) {
        b = 10
    };
    localStorage.setItem('LLKsrc_fontsize', b);
    window.llkwzsx()
}
document.getElementById('SSK_ID')?.addEventListener('keyup', function (e) {
    if (e.keyCode == 13 || e.keyCode == 37 || e.keyCode == 42) {
        window.sousuo()
    }
});

function llkgb() {
    window.llkgb()
}
window.top.callDB.get('fm_svg').then(res => {
    if (!res) {
        window.top.callFunction({
            data: {
                type: "get_fmsvg"
            },
            success(res) {
                let data = res.result;
                window.top.callDB.set('fm_svg', data);
                FMSVG = data;
                Vue.createApp(HelloVueApp).mount('#vue')
            }
        })
    } else {
        window.top.callDB.get('fm_svg').then(res => {
            FMSVG = Object.freeze(res);
            Vue.createApp(HelloVueApp).mount('#vue')
        })
    }
})