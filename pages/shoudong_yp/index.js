const typeobj = {};
ypkz_key = "zong", svg_sc(2);
var sfcs = {
    xz_du: 180,
    cms1_x: null
};

function move(t) {
    var s = t;
    s.touches[0].clientX, s.touches[0].clientY;
    document.body.style.overflow = "hidden", null == sfcs.cms1_x && (sfcs.cms1_x = s.touches[0].clientX);
    var l = sfcs.cms1_x - s.touches[0].clientX,
        e = document.body.offsetWidth / 2;
    for (let t in a = "zong|tian|di|di_dg|tian_dg|shen".split("|")) ypkz_key == a[t] && typeobj[a[t] + "_deg"] && (sfcs.xz_du = typeobj[a[t] + "_deg"]);
    e < s.touches[0].clientY ? sfcs.xz_du = sfcs.xz_du + l / 100 : sfcs.xz_du = sfcs.xz_du - l / 100, sfcs.xz_du > 360.1 && (sfcs.xz_du = 0), sfcs.xz_du < -.1 && (sfcs.xz_du = 360), svg_sc(sfcs.xz_du)
}

function end(t) {
    sfcs.cms1_x = null, document.body.style.overflow = "visible"
}

function svg_sc(t) {
    let s = `<animateTransform attributeName="transform"type="rotate"from="${t} 500 500"to="${t} 500 500"dur="2s"repeatCount="indefinite"/>`;
    typeobj[ypkz_key] = s, typeobj[ypkz_key + "_deg"] = t, document.getElementById("yuanpan_svg").innerHTML = `<svg style='transform: rotateX(318deg) rotateY(2deg) rotateZ(175deg);' id="T"xmlns="http://www.w3.org/2000/svg"width="100%"height="100%"viewBox="0 0 1000 1000"><defs><style>.cls-1,.cls-4{fill:none}.cls-1,.cls-2,.cls-4{stroke:#2a6e77}.cls-1{stroke-width:10px}.cls-2,.cls-5{fill:#2a6e77;fill-rule:evenodd}.cls-2{stroke-width:2px}.cls-3,.cls-6{font-size:86.02px}.cls-3{fill:#ff8004}.cls-3,.cls-6,.cls-7,.cls-8,.cls-9{text-anchor:middle;font-family:KaiTi}.cls-4{stroke-width:9px}.cls-6{fill:#109dff}.cls-7,.cls-8{font-size:75px}.cls-8,.cls-9{fill:#61be05}.cls-9{font-size:98.675px}</style></defs><g id="zong"><g id="tian_zong"data-name="12zhi"><g id="tian_dun"data-name="12zhi"><text class="cls-9"transform="translate(446.215 199.031) scale(0.464)"><tspan x="0">甲</tspan></text><text class="cls-9"transform="translate(604.009 212.78) rotate(30) scale(0.464)"><tspan x="0">乙</tspan></text><text class="cls-9"transform="translate(733.787 303.584) rotate(60) scale(0.464)"><tspan x="0">丙</tspan></text><text class="cls-9"transform="matrix(0, 0.464, -0.464, 0, 800.777, 447.112)"><tspan x="0">丁</tspan></text><text class="cls-9"transform="translate(787.027 604.906) rotate(120) scale(0.464)"><tspan x="0">戊</tspan></text><text class="cls-9"transform="translate(696.223 734.684) rotate(150) scale(0.464)"><tspan x="0">己</tspan></text><text class="cls-9"transform="matrix(-0.464, 0, 0, -0.464, 552.695, 801.674)"><tspan x="0">庚</tspan></text><text class="cls-9"transform="translate(394.902 787.924) rotate(-150) scale(0.464)"><tspan x="0">辛</tspan></text><text class="cls-9"transform="translate(265.123 697.12) rotate(-120) scale(0.464)"><tspan x="0">壬</tspan></text><text class="cls-9"transform="matrix(0, -0.464, 0.464, 0, 198.134, 553.592)"><tspan x="0">癸</tspan></text>${typeobj.tian_dg}</g><g id="tx"><circle class="cls-1"cx="500.5"cy="500.5"r="392.906"/><circle class="cls-1"cx="500.5"cy="500.5"r="284.188"/><path class="cls-2"d="M595,124.98l10.1,2.706L577.235,231.674l-10.1-2.705Z"/><path class="cls-2"d="M769.843,222.8l7.39,7.39-76.125,76.126-7.391-7.391Z"/><path class="cls-2"d="M872.348,394.935l2.705,10.1L771.065,432.9l-2.705-10.1Z"/><path class="cls-2"d="M875.054,595.261l-2.706,10.1L768.36,577.494l2.705-10.1Z"/><path class="cls-2"d="M777.233,770.1l-7.39,7.391-76.125-76.125,7.39-7.391Z"/><path class="cls-2"d="M605.1,872.607L595,875.312,567.139,771.324l10.1-2.706Z"/><path class="cls-2"d="M404.773,875.312l-10.1-2.705L422.54,768.618l10.1,2.706Z"/><path class="cls-2"d="M229.933,777.492l-7.391-7.391,76.125-76.125,7.391,7.391Z"/><path class="cls-2"d="M127.427,605.357l-2.705-10.1L228.71,567.4l2.706,10.1Z"/><path class="cls-2"d="M124.722,405.031l2.705-10.1L231.416,422.8l-2.706,10.1Z"/><path class="cls-2"d="M222.542,230.191l7.391-7.39,76.125,76.125-7.391,7.391Z"/><path class="cls-2"d="M394.677,127.686l10.1-2.705,27.863,103.988-10.1,2.705Z"/></g><g id="_12zhi"data-name="12zhi"><text class="cls-3"transform="translate(501.954 191.167) scale(0.748)"><tspan x="0">子</tspan></text><text class="cls-3"transform="translate(656.165 233.278) rotate(30) scale(0.748)"><tspan x="0">丑</tspan></text><text class="cls-3"transform="translate(768.66 346.853) rotate(60) scale(0.748)"><tspan x="0">寅</tspan></text><text class="cls-3"transform="matrix(0, 0.748, -0.748, 0, 809.296, 501.459)"><tspan x="0">卯</tspan></text><text class="cls-3"transform="translate(767.185 655.669) rotate(120) scale(0.748)"><tspan x="0">辰</tspan></text><text class="cls-3"transform="translate(653.61 768.164) rotate(150) scale(0.748)"><tspan x="0">巳</tspan></text><text class="cls-3"transform="translate(499.004 808.8) rotate(180) scale(0.748)"><tspan x="0">午</tspan></text><text class="cls-3"transform="translate(344.793 766.689) rotate(-150) scale(0.748)"><tspan x="0">未</tspan></text><text class="cls-3"transform="translate(232.299 653.114) rotate(-120) scale(0.748)"><tspan x="0">申</tspan></text><text class="cls-3"transform="matrix(0, -0.748, 0.748, 0, 191.663, 498.508)"><tspan x="0">酉</tspan></text><text class="cls-3"transform="translate(233.774 344.298) rotate(-60) scale(0.748)"><tspan x="0">戌</tspan></text><text class="cls-3"transform="translate(347.348 231.803) rotate(-30) scale(0.748)"><tspan x="0">亥</tspan></text></g>${typeobj.tian}</g><g id="shen_zong"data-name="tx"><g id="shen"data-name="tx"><circle class="cls-4"cx="500.5"cy="500.5"r="284.156"/><circle class="cls-4"cx="500.5"cy="500.5"r="179.219"/><path class="cls-5"d="M422.777,232.118l9.659-2.588,26.4,98.524-9.66,2.588Z"/><path class="cls-5"d="M567.2,229.53l9.659,2.588-26.4,98.524-9.66-2.588Z"/><path class="cls-5"d="M693.564,299.5l7.071,7.071L628.51,378.7l-7.071-7.071Z"/><path class="cls-5"d="M768.016,423.277l2.588,9.659-98.524,26.4-2.588-9.66Z"/><path class="cls-5"d="M770.6,567.7l-2.588,9.659-98.524-26.4,2.588-9.66Z"/><path class="cls-5"d="M700.635,694.064l-7.071,7.071L621.439,629.01l7.071-7.071Z"/><path class="cls-5"d="M576.857,768.516L567.2,771.1,540.8,672.58l9.66-2.588Z"/><path class="cls-5"d="M432.436,771.1l-9.659-2.588,26.4-98.524,9.66,2.588Z"/><path class="cls-5"d="M306.07,701.135L299,694.064l72.125-72.125,7.071,7.071Z"/><path class="cls-5"d="M231.618,577.357L229.03,567.7l98.524-26.4,2.588,9.66Z"/><path class="cls-5"d="M229.03,432.936l2.588-9.659,98.524,26.4-2.588,9.66Z"/><path class="cls-5"d="M299,306.57l7.071-7.071L378.2,371.624l-7.072,7.071Z"/></g><g id="_12shen"data-name="12shen"><text class="cls-6"transform="matrix(0.49, 0, 0, 0.49, 501.335, 297.559)"><tspan x="0">天后</tspan></text><text class="cls-6"transform="translate(602.372 325.15) rotate(30) scale(0.49)"><tspan x="0">贵人</tspan></text><text class="cls-6"transform="translate(676.077 399.563) rotate(60) scale(0.49)"><tspan x="0">腾蛇</tspan></text><text class="cls-6"transform="matrix(0, 0.49, -0.49, 0, 702.702, 500.859)"><tspan x="0">朱雀</tspan></text><text class="cls-6"transform="translate(675.111 601.896) rotate(120) scale(0.49)"><tspan x="0">六合</tspan></text><text class="cls-6"transform="translate(600.698 675.601) rotate(150) scale(0.49)"><tspan x="0">勾陈</tspan></text><text class="cls-6"transform="matrix(-0.49, 0, 0, -0.49, 499.402, 702.226)"><tspan x="0">青龙</tspan></text><text class="cls-6"transform="translate(398.365 674.635) rotate(-150) scale(0.49)"><tspan x="0">天空</tspan></text><text class="cls-6"transform="translate(324.66 600.222) rotate(-120) scale(0.49)"><tspan x="0">白虎</tspan></text><text class="cls-6"transform="matrix(0, -0.49, 0.49, 0, 298.035, 498.926)"><tspan x="0">太常</tspan></text><text class="cls-6"transform="translate(325.626 397.889) rotate(-60) scale(0.49)"><tspan x="0">元武</tspan></text><text class="cls-6"transform="translate(400.039 324.183) rotate(-30) scale(0.49)"><tspan x="0">太阴</tspan></text></g>${typeobj.shen}</g><g id="dipan"data-name="tx"><g id="tx-3"data-name="tx"><path class="cls-2"d="M367.573,25.093l9.659-2.588L403.89,122l-9.659,2.588Z"/><path class="cls-2"d="M622.768,22.5l9.659,2.588-26.658,99.49L596.11,122Z"/><path class="cls-2"d="M845.068,147.861l7.071,7.071-72.832,72.832-7.071-7.071Z"/><path class="cls-2"d="M974.907,367.573l2.588,9.659-99.49,26.658-2.588-9.659Z"/><path class="cls-2"d="M977.5,622.768l-2.588,9.659-99.49-26.658,2.588-9.659Z"/><path class="cls-2"d="M852.139,845.068l-7.071,7.071-72.832-72.832,7.071-7.071Z"/><path class="cls-2"d="M632.427,974.907l-9.659,2.588-26.658-99.49,9.659-2.588Z"/><path class="cls-2"d="M377.232,977.5l-9.659-2.588,26.658-99.49,9.659,2.588Z"/><path class="cls-2"d="M154.932,852.139l-7.071-7.071,72.832-72.832,7.071,7.071Z"/><path class="cls-2"d="M25.093,632.427L22.5,622.768,122,596.11l2.588,9.659Z"/><path class="cls-2"d="M22.5,377.232l2.588-9.659,99.49,26.658L122,403.89Z"/><path class="cls-2"d="M147.861,154.932l7.071-7.071,72.832,72.832-7.071,7.071Z"/><circle class="cls-4"cx="500.5"cy="500.5"r="495.5"/><circle class="cls-4"cx="500.5"cy="500.5"r="392.813"/></g><g id="_12zhi-2"data-name="12zhi"><text class="cls-7"x="501.971"y="87.317"><tspan x="501.971">子</tspan></text><text class="cls-7"transform="matrix(0.866, 0.5, -0.5, 0.866, 708.048, 143.592)"><tspan x="0">丑</tspan></text><text class="cls-7"transform="matrix(0.5, 0.866, -0.866, 0.5, 858.379, 295.366)"><tspan x="0">寅</tspan></text><text class="cls-7"transform="matrix(0, 1, -1, 0, 912.683, 501.971)"><tspan x="0">卯</tspan></text><text class="cls-7"transform="matrix(-0.5, 0.866, -0.866, -0.5, 856.408, 708.048)"><tspan x="0">辰</tspan></text><text class="cls-7"transform="matrix(-0.866, 0.5, -0.5, -0.866, 704.634, 858.379)"><tspan x="0">巳</tspan></text><text class="cls-7"transform="translate(498.029 912.683) rotate(180)"><tspan x="0">午</tspan></text><text class="cls-7"transform="matrix(-0.866, -0.5, 0.5, -0.866, 291.952, 856.408)"><tspan x="0">未</tspan></text><text class="cls-7"transform="matrix(-0.5, -0.866, 0.866, -0.5, 141.621, 704.634)"><tspan x="0">申</tspan></text><text class="cls-7"transform="matrix(0, -1, 1, 0, 87.317, 498.029)"><tspan x="0">酉</tspan></text><text class="cls-7"transform="matrix(0.5, -0.866, 0.866, 0.5, 143.592, 291.952)"><tspan x="0">戌</tspan></text><text class="cls-7"transform="matrix(0.866, -0.5, 0.5, 0.866, 295.366, 141.621)"><tspan x="0">亥</tspan></text></g><g id="di_dun"data-name="12zhi"><text class="cls-8"transform="translate(428.214 93.713) scale(0.626)"><tspan x="0">甲</tspan></text><text class="cls-8"transform="matrix(0.542, 0.313, -0.313, 0.542, 640.975, 112.252)"><tspan x="0">乙</tspan></text><text class="cls-8"transform="matrix(0.313, 0.542, -0.542, 0.313, 815.962, 234.688)"><tspan x="0">丙</tspan></text><text class="cls-8"transform="matrix(0, 0.626, -0.626, 0, 906.287, 428.214)"><tspan x="0">丁</tspan></text><text class="cls-8"transform="matrix(-0.313, 0.542, -0.542, -0.313, 887.748, 640.975)"><tspan x="0">戊</tspan></text><text class="cls-8"transform="matrix(-0.542, 0.313, -0.313, -0.542, 765.312, 815.962)"><tspan x="0">己</tspan></text><text class="cls-8"transform="matrix(-0.626, 0, 0, -0.626, 571.786, 906.287)"><tspan x="0">庚</tspan></text><text class="cls-8"transform="matrix(-0.542, -0.313, 0.313, -0.542, 359.025, 887.748)"><tspan x="0">辛</tspan></text><text class="cls-8"transform="matrix(-0.313, -0.542, 0.542, -0.313, 184.038, 765.312)"><tspan x="0">壬</tspan></text><text class="cls-8"transform="matrix(0, -0.626, 0.626, 0, 93.713, 571.786)"><tspan x="0">癸</tspan></text>${typeobj.di_dg}</g>${typeobj.di}</g>${typeobj.zong}</g></svg>`
}
new Vue({
    el: "#vue",
    data: () => ({
        gl: !1,
        sj: !1,
        gl_y: "",
        gl_m: "",
        gl_d: "",
        gl_h: "",
        gl_i: "",
        fujia: {
            sizhu: {},
            nongli: {}
        },
        kzt: [{
            name: "全部",
            xz: !0,
            value: "zong"
        }, {
            name: "神盘",
            xz: !1,
            value: "shen"
        }, {
            name: "天盘",
            xz: !1,
            value: "tian"
        }, {
            name: "天盘遁干",
            xz: !1,
            value: "tian_dg"
        }, {
            name: "地盘",
            xz: !1,
            value: "di"
        }, {
            name: "地盘遁干",
            xz: !1,
            value: "di_dg"
        }],
        sc: []
    }),
    beforeCreate: function () { },
    created: function () {
        document.getElementById("vue").style.opacity = 1
        window.top.setAllfont_family(document);

    },
    methods: {
        GETsj() {
            let t;
            window.top.xxk.loading("获取时间中", !0);
            let s, a, l, e, c, n = this,
                r = new Date;
            s = r.getFullYear(), a = r.getMonth() + 1, l = r.getDate(), e = r.getHours(), c = r.getMinutes(), this.gl_y = s, this.gl_m = a, this.gl_d = l, this.gl_h = e, this.gl_i = c, (t = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange = function () {
                if (4 == t.readyState && 200 == t.status) {
                    let s = JSON.parse(t.responseText);
                    for (let t in s) n[t] = s[t];
                    n.$forceUpdate(), window.top.xxk.loading("获取时间中", !1)
                }
            }, t.open("get", `https://shouxing-zhouyi-pai-pqrmhdvmyc.cn-shanghai.fcapp.run/?y=${s}&m=${a}&d=${l}&h=${e}&i=${c}`, !0), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), t.send()
        },
        ypkz_fun(t, s) {
            ypkz_key = t;
            for (let t in this.kzt) this.kzt[t].name == s ? this.kzt[t].xz = !0 : this.kzt[t].xz = !1;
            this.$forceUpdate()
        }
    }
});