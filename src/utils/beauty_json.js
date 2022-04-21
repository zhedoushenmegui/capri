function jb(obj, intentVal, prefixVal) {
    function objKeys(obj) {
        let r = [];
        for(let x in obj) {
            r.push(x)
        }
        return r.sort();
    }
    function objLength(obj) {
        let l = 0;
        for(let x in obj) {
            l ++;
        }
        return l;
    }
    function f(obj, indent, prefix) {
        if(typeof obj === 'string') {
            return '"' + obj + '"';
        }
        else if(typeof obj === 'number') {
            return obj;
        }
        else if(typeof obj === 'boolean') {
            return obj? 'true': 'false';
        }
        else if(typeof obj === 'undefined') {
            return 'undefined-';
        }
        else if(obj === null) {
            return 'null';
        }
        else if(typeof obj === 'object') {
            let arr = [];
            if(Array.prototype.isPrototypeOf(obj)) {
                if(obj.length>0) {
                    arr.push('[');
                    let i =0;
                    for (; i < obj.length-1; i++) {
                        arr.push(prefix+indent + f(obj[i], indent, prefix+indent) + ',');
                    }
                    arr.push(prefix+indent + f(obj[i], indent, prefix+indent));
                    arr.push(prefix+']');
                }else{
                    arr.push('[]');
                }
            }else {
                if(objLength(obj)>0) {
                    arr.push('{');
                    let keys = objKeys(obj);
                    let j = 0;
                    for (; j < keys.length-1; j++) {
                        arr.push(prefix+indent+'"'+keys[j]+'" : ' + f(obj[keys[j]], indent, prefix+indent) + ',');
                    }
                    arr.push(prefix+indent+'"'+keys[j]+'" : ' + f(obj[keys[j]], indent, prefix+indent));
                    arr.push(prefix+'}');
                }else{
                    arr.push('{}');
                }
            }
            return arr.join('\n');
        }
        else {
            try{
                return ''+obj;
            }catch (e) {
                return '{obj}'
            }
        }
    }
    return f(obj, intentVal===undefined?'    ':intentVal, prefixVal===undefined?'':prefixVal)
}



export default{
    jb: jb
};