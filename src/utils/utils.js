import axios from '../vendor/axios.min'
import cookie_utils from "./cookie_utils";

function deepCopy (obj, cache) {
    if(cache === undefined) {
        cache = [];
    }
    function find(list, f) {
        return list.filter(f)[0]
    }

    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    // if obj is hit, it is in circular structure
    const hit = find(cache, function (c){ return c.original === obj})
    if (hit) {
        return hit.copy
    }

    const copy = Array.isArray(obj) ? [] : {}
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
        original: obj,
        copy
    })

    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key], cache)
    })

    return copy
}


export default {
    post: function (url, raw, v, success, err) {
        axios.post(url, raw)
            .then(function(resp){
                let data = resp.data;
                if(parseInt(data.status) === 999) {
                    v.$notify.error({
                        title: '未登录',
                        message: '没有登录, 即将跳转至登录页'
                    });
                    location.href = '/login?callback=' + encodeURI(location.href);
                    return false;
                }
                if(parseInt(data.status) === 998) {
                    v.$notify.error({
                        title: '未授权',
                        message: data.msg
                    });
                    return false;
                }
                if(parseInt(data.status) !== 0) {
                    v.$alert('请求失败!\n' + data.msg);
                    return false;
                }
                success(data);
            })
            .catch(function (resp) {
                if(err === undefined) {
                    alert("something wrong")
                    return false;
                }
                err(resp);
            })
    },
    deepCopy: deepCopy,
    getQueryVariable: function (variable)
    {
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (let i=0;i<vars.length;i++) {
            let pair = vars[i].split("=");
            if(pair[0] === variable){return pair[1];}
        }
        return null;
    }

}

