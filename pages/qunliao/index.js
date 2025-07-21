new Vue({
    el: '#vue',
    data: function () {
        return {
            vip:0,
            cktp_url: false,
            vip_arr: {
                0: "正式会员",
                1: "赞助会员",
                404: "系统提示",
                998: "管理员",
                999: "超级管理员"
            },
            xxgd: true,
            uuid: null,
            dlf_text: "",
            dlfi_ma: "",
            qunliao_data: [],
            info_arr: [],
            uuid_zs: false,
            TouXiang_zs: false,
            name_zs: false,
            qtht:"前台",
        }
    },
    mounted() { 
        window.llkgb=this.llkgb
    },
    watch: {
    },
    created: function () {
        window.top.setAllfont_family(document);


        let thar = this;
        setInterval(()=>{
            thar.vip=localStorage.getItem("user_vip")
        },200)
        
        let uuid_jt = 0;  
        
        id_jianting({
            data: {
                SNS_KEY_liuren: true
            },
            success(res) {    
                window.top.xinxiaoxi_fun(res.user_TouXiang,res.user_name,res.context)    
                res.context = thar.parseMessage(res.context)     
                thar.qunliao_data.push(res);
                thar.$forceUpdate();
                thar.gundong()
            }
        });
        let observer = new MutationObserver(function (mutations) {
            let textareas = document.querySelectorAll('textarea');
            textareas.forEach(function (textarea) {
                textarea.addEventListener('input', function (e) {
                    textarea.style.height = 'auto';
                    textarea.style.height = textarea.scrollHeight + 'px'
                })
            })
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
       
        setInterval(function () {
            let token = localStorage.getItem("token");
            let uuid_ = localStorage.getItem("user_uuid");
            if (token?.length > 10) {
                if (uuid_?.substring(0, 2) != 10) {
                    if (uuid_jt == 0) {
                        uuid_jt = 1;
                        console.log("进入请求uuid状态");
                        thar.get_userinfo().then(res => {
                            console.log("获取账户资料", res);
                            localStorage.setItem("user_name", res.user_name);
                            localStorage.setItem("user_TouXiang", res.user_TouXiang);
                            localStorage.setItem("user_vip", res.user_vip);
                            thar.uuid = res.uuid_;
                            localStorage.setItem("user_uuid", res.uuid_);
                            thar.$forceUpdate()
                        })
                    }
                }
            }
        }, 1000);
        setInterval(() => {
            if (!localStorage.getItem("token")) {
                thar.uuid = 'token:undefine';
                thar.$forceUpdate()
            } else {
                thar.uuid = localStorage.getItem("user_uuid");
                thar.$forceUpdate()
            }
        }, 1500);
        thar.getsnsdata();  
        
        

        let dd_time_m=30;//监听对话持续分钟
        let jg_time=60000;//每60秒监听一次
        let dqjc1=(dd_time_m*60*1000)/jg_time;
        let jsq1=0
        setInterval(()=>{
            if(jsq1<dqjc1){
                ds_fc1()
            }
            jsq1++                
        },jg_time)
        function ds_fc1(){
            let TAB_INDEX=localStorage.getItem("index_db_tab")
            if(TAB_INDEX==="群聊"){
                console.log("当前在群聊tab")
                if( thar.qtht=="前台"){
                    console.log("当前在前台定时获取最新聊天")
                    let a=thar.qunliao_data[thar.qunliao_data.length-1]?.ce_DateTime
                    if(a){
                        console.log(a)
                        thar.get_snsdata_length(a)
                    }
                                        
                }
            } 
        }
        ds_fc1()
        document.addEventListener('visibilitychange', function() {  
            if (document.visibilityState === 'visible') {  
                console.log('页面现在在前台。');  
                thar.qtht="前台"
            } else if (document.visibilityState === 'hidden') {  
                console.log('页面现在在后台。');  
                thar.qtht="后台"
            }  
        });
    },
    methods: {
        llkgb(){
            this.cktp_url=false
        },
        get_snsdata_length(ce_DateTime){
            let thar=this
            window.top.callFunction({
                data: {
                    type: "get_snsdata_length",
                    ce_DateTime
                },
                success(res) {
                    let data=res.result.data
                    for(let i in data){
                        data[i].context = thar.parseMessage(data[i].context)  
                        window.top.xinxiaoxi_fun(data[i].user_TouXiang,data[i].user_name,data[i].context)
                        console.log(data[i].context)
                        thar.qunliao_data.push(data[i]);
                        thar.$forceUpdate();
                        thar.gundong()
                    }
                }
            })
        },
        getsnsdata() {
            let thar = this;
            window.top.callFunction({
                name: "web__liuren",
                data: {
                    type: "get_snspull"
                },
                success(res) {
                    if (res.result.data[res.result.data.length - 1].context == "发射烟花") {
                        thar.fasheyanhua()
                    }
                    let arr_Text = res.result.data
                    for (let i in arr_Text) {
                        arr_Text[i].context = thar.parseMessage(arr_Text[i].context)
                        let a = arr_Text[i].context
                        for (let j in a) {
                            if (a[j].type == "image") {
                                thar.getFileSize(a[j].value).then(res => {
                                    a[j].size = res
                                });
                            }
                        }
                        arr_Text[i].context = a
                    }
                    thar.qunliao_data = arr_Text
                    setTimeout(() => {
                        thar.gundong(false)
                    }, 100);
                    thar.$forceUpdate()
                }
            })
        },
        getFileSize(url) {
            let url_key='web_file_url_'+url
            return new Promise(function (resolve, reject) {
                window.top.callDB.get(url_key).then(res => {
                    if (res) {
                        resolve(res)
                    }else{
                        var xhr = new XMLHttpRequest();
                        xhr.open('HEAD', url, true);
                        xhr.onreadystatechange = function () {
                            if (this.status === 200) {
                                var sizeInBytes = parseInt(this.getResponseHeader('Content-Length'), 10);
                                var sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2); // 转换为MB  
                                window.top.callDB.set(url_key,sizeInMB).then(res => {
                                    if (res) {
                                        resolve(sizeInMB)
                                    }
                                })        
                            }
                        };
                        xhr.send();
                    }                    
                })                
            });
        },
        fasheyanhua() {
            if (location.host == "localhost") {
                return "本地调试不加载特效"
            }
            if (localStorage.getItem("index_db_tab") != "群聊") {
                return "不在当前群聊页不展示特效"
            }
            if (localStorage.getItem("index_db_tab") === "群聊") {
                document.getElementById("yanhuafashe").src = "../../components/yh/index.html";
                setTimeout(() => {
                    document.getElementById("yanhuafashe").src = ""
                }, 20000)
            }
        },
        sdj_to_rqsj(a) {
            a = Number(a);
            var date = new Date(a);
            Y = date.getFullYear() + '-';
            M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            D = date.getDate() + ' ';
            h = date.getHours();
            m = date.getMinutes();
            s = date.getSeconds();
            h < 10 && (h = "0" + h);
            m < 10 && (m = "0" + m);
            s < 10 && (s = "0" + s);
            return Y + M + D + h + ":" + m + ":" + s
        },
        info_zs(item) {
            this.uuid_zs = item.user_uuid;
            this.name_zs = item.user_name;
            this.TouXiang_zs = item.user_TouXiang
        },
        get_userinfo() {
            return new Promise(function (resolve) {
                window.top.callFunction({
                    name: "web__liuren",
                    data: {
                        type: "get_snsuuid",
                        token: localStorage.getItem("token"),
                    },
                    success(res) {
                        resolve(res.result)
                    }
                })
            })
        },
        copy_data(data) {
            navigator.clipboard.writeText(data);
            window.top.xxk.dibutishi("复制成功", 1500)
        },
        generateRandomString(length) {  
            var result = '';  
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';  
            var charactersLength = characters.length;  
            for (var i = 0; i < length; i++) {  
                result += characters.charAt(Math.floor(Math.random() * charactersLength));  
            }  
            return result;  
        } ,
        parseMessage(message) {
            message = String(message)
            const result = [];
            const urlRegex = /https?:\/\/[^\s]+/g;
            const imageRegex = /\bhttps?:\/\/[^\s]+\.(png|jpg|jpeg)\b/g;
            const numberRegex = /\b\d{6,}\b/g;

            let match;
            // 合并处理网址和网络图片
            let combinedRegex = new RegExp(`(${urlRegex.source})|(${imageRegex.source})`, 'g');
            let textIndex = 0;

            // 先处理网址和网络图片
            while ((match = combinedRegex.exec(message)) !== null) {
                // 提取匹配前的文本
                const textBefore = message.slice(textIndex, match.index);
                if (textBefore) {
                    // 提取并处理数字
                    let matchNumber;
                    let numberIndex = 0;
                    while ((matchNumber = numberRegex.exec(textBefore)) !== null) {
                        const numberText = textBefore.slice(numberIndex, matchNumber.index);
                        if (numberText) {
                            result.push({ value: numberText, type: 'text' });
                        }
                        result.push({ value: matchNumber[0], type: 'Number' });
                        numberIndex = matchNumber.index + matchNumber[0].length;
                    }
                    const remainingText = textBefore.slice(numberIndex);
                    if (remainingText) {
                        result.push({ value: remainingText, type: 'text' });
                    }
                }

                // 根据匹配类型添加结果
                if (match[0].match(imageRegex)) {
                    result.push({ value: match[0], type: 'image',data_id:this.generateRandomString(10) });
                } else {
                    result.push({ value: match[0], type: 'url' });
                }

                // 更新文本索引以跳过已处理的匹配项
                textIndex = combinedRegex.lastIndex;
            }

            // 处理剩余文本
            const remainingText = message?.slice(textIndex);
            if (remainingText) {
                // 提取并处理数字
                let matchNumber;
                let numberIndex = 0;
                while ((matchNumber = numberRegex.exec(remainingText)) !== null) {
                    const numberText = remainingText.slice(numberIndex, matchNumber.index);
                    if (numberText) {
                        result.push({ value: numberText, type: 'text' });
                    }
                    result.push({ value: matchNumber[0], type: 'Number' });
                    numberIndex = matchNumber.index + matchNumber[0].length;
                }
                const remainingTextAfterNumbers = remainingText.slice(numberIndex);
                if (remainingTextAfterNumbers) {
                    result.push({ value: remainingTextAfterNumbers, type: 'text' });
                }
            }

            return result;
        },


        gundong(fx) {
            this.xxgd = !this.xxgd;
            let textarea = document.getElementById('SNS');
            let maxScroll = textarea.scrollHeight - textarea.clientHeight;
            if (fx === false) {
                let wzjs = 0;
                let dsq = setInterval(function () {
                    if (textarea) {
                        textarea.scrollTop = textarea.scrollTop + (maxScroll * 0.05);
                        if (wzjs == textarea.scrollTop) {
                            clearInterval(dsq)
                        }
                        wzjs = textarea.scrollTop
                    }
                }, 10)
            }
            if (fx === true) {
                let dsq = setInterval(function () {
                    if (textarea) {
                        textarea.scrollTop = textarea.scrollTop - (maxScroll * 0.05);
                        if (textarea.scrollTop == 0) {
                            clearInterval(dsq)
                        }
                    }
                }, 10)
            }
        },
        push() {
            let thar = this;
            if (this.dlf_text.length > 0) {
                let context = this.dlf_text;
                this.dlf_text = "";
                let token = localStorage.getItem("token");
                if (!this.uuid || !token) {
                    window.top.xxk.dibutishi('未登录，无法发言', 1500);
                    return
                }
                window.top.callFunction({
                    name: "web__liuren",
                    data: {
                        type: "push_sns",
                        context,
                        ima: "",
                        token: localStorage.getItem("token"),
                        xiaoxi_key: this.randomString(32)
                    },
                    success(res) {
                        if (res.result == "token:false") {
                            window.top.xxk.tan0("提示", "登录失效，请重新登陆", "好的");
                            localStorage.setItem("APP_QQ_login", "qq_login_zhuxiao");
                            localStorage.removeItem("token");
                            localStorage.removeItem("user_uuid");
                            location.reload()
                        }
                        console.log(res);
                        thar.getsnsdata()
                    }
                })
            }
        },
        randomString(e) {
            e = e || 32;
            var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
                a = t.length,
                n = "";
            for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
            return n
        }
    }
});
function llkgb() {
    window.llkgb()
}
setTimeout(()=>{
    mediumZoom('[data-zoomable]');
},3000)
