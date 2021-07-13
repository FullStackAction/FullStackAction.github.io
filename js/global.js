window.onload = function () {
    var footer = document.getElementsByClassName("footer")[0]
    console.log(footer.childNodes)
    footer.childNodes[1].nodeValue = '微信公众号 '
    footer.childNodes[2].href = 'https://cdn.jsdelivr.net/gh/FullStackAction/PicBed@resource/image/20210131111432.png'
    footer.childNodes[2].innerHTML = 'FullStackAction'
}