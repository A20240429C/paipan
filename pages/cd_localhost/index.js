Vue.createApp({
    data() {
        return {
            search_value: "",
            debounceTimer: null,
            local_cd: [],
            ss_cccd: [],
            sxzt: 1,
        }
    },
    watch: {
        search_value() {
            let thar = this
            // 清除之前的定时器
            clearTimeout(this.debounceTimer);

            // 设置新的定时器
            this.debounceTimer = setTimeout(() => {
                if (this.search_value.length == 0) {
                    thar.local_cd = thar.ss_cccd
                    thar.$forceUpdate()
                    return
                }

                let new_arr = []
                for (let i in thar.local_cd) {
                    if (thar.local_cd[i].fujia.cd_ws.indexOf(thar.search_value) != -1) {
                        new_arr.push(thar.local_cd[i])
                    }
                    if (thar.local_cd[i].fujia.cd_dy.indexOf(thar.search_value) != -1) {
                        new_arr.push(thar.local_cd[i])
                    }
                    if (thar.local_cd[i].fujia.cd_fk.indexOf(thar.search_value) != -1) {
                        new_arr.push(thar.local_cd[i])
                    }
                }
                thar.local_cd = new_arr
                thar.$forceUpdate()

                // 这里执行实际的搜索逻辑
            }, 500); // 500毫秒延迟
        }
    },
    beforeCreate: function () { },
    created: function () {
        window.top.setAllfont_family(document);
    },
    mounted() {
        this.shuaxin()
    },
    methods: {
        shuaxin() {
            let thar = this
            thar.sxzt = 1
            window.top.callDB.get('localhost_cd').then(res => {
                if (res) {
                    thar.local_cd = res
                    thar.ss_cccd = res
                    thar.sxzt = 3
                    setTimeout(() => {
                        thar.sxzt = 0
                    }, 1500)
                    thar.$forceUpdate()
                } else {
                    thar.sxzt = 3
                    setTimeout(() => {
                        thar.sxzt = 0
                    }, 1500)
                }
            })
        },
        qike(e) {
            e.bd = true
            e.zhs = e.zhs.charAt(0) + e.zhs.charAt(1);
            let A = JSON.stringify(e);
            localStorage.setItem("lrppcs", A);
            localStorage.setItem("cd_LLK_qjcs", A);
            document.getElementById('LLKsrc').src = "../paipan/index.html";
            localStorage.setItem('cd_LLK_src', "../paipan/index.html");
            document.getElementById('LLKID').style.top = "0vh";
            localStorage.setItem('cd_LLKID_top', "0vh")
        },
        un_cundang(QKSJC) {
            let thar = this
            window.top.callDB.get('localhost_cd').then(res => {
                let localhost_cd_arr = []
                let new_arr = []
                if (res) {
                    localhost_cd_arr = res
                } else {
                    localhost_cd_arr = []
                }
                for (let i in localhost_cd_arr) {
                    if (QKSJC != localhost_cd_arr[i].QKSJC) {
                        new_arr.push(localhost_cd_arr[i])
                    }
                }
                window.top.callDB.set('localhost_cd', new_arr).then(res => {
                    if (res) {
                        thar.local_cd = new_arr
                        thar.ss_cccd = res
                        thar.$forceUpdate()
                        window.top.xxk.dibutishi("删除成功", 1500)
                    }
                })
            })
        }

    }
}).mount('#vue');


function llkgb() {
    document.getElementById('LLKID').style.top = "220vh";
    localStorage.setItem('cd_LLKID_top', "220vh")
}