/*
    getChildren Compatibility processes get all child element nodes
    @parameter curEle:current element
    @return child element array
* */

let getChildren = curEle => {
    let result = [];
    let nodeList = curEle.childNodes;
    for (let i = 0; i < nodeList.length; i++) {
        if (nodeList[i].nodeType === 1) {
            result.push(nodeList[i]);
        }
    }
    return result;
};

let getPrevious = curEle => {
    let pre = curEle.previousSibling;
    while (pre && pre.nodeType !== 1) {
        pre = pre.previousSibling;
    }
    return pre;
};

let getAllPrevious = curEle => {
    let result = [];
    let pre = getPrevious(curEle);
    while (pre) {
        result.push(pre);
        pre = getPrevious(pre);
    }
    return result;
};

let getNext = curEle => {
    let next = curEle.nextSibling;
    while (next && next.nodeType !== 1) {
        next = next.nextSibling;
    }
    return next;
};

let getAllNext = curEle => {
    let result = [];
    let next = getNext(curEle);
    while (next) {
        result.push(next);
        next = getNext(next);
    }
    return result;
};

let getIndex = curEle => {
    let result = getAllPrevious(curEle);
    return result.length;
};

let three = document.getElementById('three');
console.log(getIndex(three));
