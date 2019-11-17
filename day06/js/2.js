let codeBox = document.getElementById('codeBox'),
    link = document.getElementById('link');

function getCode() {
    let codeArea = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    let codeVal = '';
    while (codeVal.length < 4) {
        let index = Math.round(Math.random() * 61),
            char = codeArea[index];
        if (codeVal.indexOf(char) === -1) {
            codeVal += char;
        }
    }
    return codeVal;
}

codeBox.innerHTML = getCode();
link.onclick = () => codeBox.innerHTML = getCode();