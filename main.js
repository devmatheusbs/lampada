const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );
const h1Elements = document.getElementsByTagName("h1");

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = 'ligada.png';
        document.body.style.backgroundColor = "#D5CEA3"
        for(var i = 0; i < h1Elements.length; i++) {
            h1Elements[i].style.color = "#1A120B";
        }
    }
}
function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = 'desligada.png';
        document.body.style.backgroundColor = "#1A120B"
        for(var i = 0; i < h1Elements.length; i++) {
            h1Elements[i].style.color = "#D5CEA3";
        }
    }
}
function lampBroken () {
    lamp.src = 'quebrada.png';
    document.body.style.backgroundColor = "#1A120B"
    for(var i = 0; i < h1Elements.length; i++) {
        h1Elements[i].style.color = "#D5CEA3";
    }
}
turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );