new Vue({
    el: "#main",
    ready(){
    var r;
    var out;
    if(document.getElementById('field_r').value<1||document.getElementById('field_r').value>4){
        table = document.getElementById('resultTable');
        if(table.rows.length-1) {
            r = table.rows[table.rows.length - 1].lastChild.previousSibling.innerHTML;
            document.getElementById('field_r').value = r;
            out = r;
        }
        else {
            r = 2.5;
            out = 'R';
        }
    }
    else {
        r = document.getElementById('field_r').value;
        out = r;
    }
    var example = document.getElementById("example");
    var ctx = example.getContext('2d');
    ctx.fillStyle = "cadetblue";
    ctx.fillRect(0, 0, example.width, example.height);
    //Фигуры
    ctx.fillStyle = "red";
    ctx.fillRect(example.width/2-r*50, example.height/2-r*25, r*50, r*25);
    ctx.beginPath();
    ctx.moveTo(example.width/2-r*50,example.height/2);
    ctx.lineTo(example.width/2,example.height/2+r*50);
    ctx.lineTo(example.width/2,example.height/2);
    ctx.fill();
    ctx.arc(example.width/2, example.height/2, r*50, 1/2 * Math.PI, 0, true);
    ctx.fill();

    // Координатные оси
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.moveTo(example.width/2, 10);
    ctx.lineTo(example.width/2,example.height-10);
    ctx.moveTo(example.width/2, 10);
    ctx.lineTo(example.width/2+5,15);
    ctx.moveTo(example.width/2, 10);
    ctx.lineTo(example.width/2-5,15);
    //
    ctx.moveTo(10, example.height/2);
    ctx.lineTo(example.width-10,example.height/2);
    ctx.moveTo(example.width-10, example.height/2);
    ctx.lineTo(example.width-15,example.height/2-5);
    ctx.moveTo(example.width-10, example.height/2);
    ctx.lineTo(example.width-15,example.height/2+5);
    //
    ctx.moveTo(example.width/2-r*25,example.height/2-5);
    ctx.lineTo(example.width/2-r*25,example.height/2+5);
    ctx.moveTo(example.width/2+r*25,example.height/2-5);
    ctx.lineTo(example.width/2+r*25,example.height/2+5);
    ctx.moveTo(example.width/2-5,example.height/2-r*25);
    ctx.lineTo(example.width/2+5,example.height/2-r*25);
    ctx.moveTo(example.width/2-5,example.height/2+r*25);
    ctx.lineTo(example.width/2+5,example.height/2+r*25);
    //
    ctx.moveTo(example.width/2-r*50,example.height/2-5);
    ctx.lineTo(example.width/2-r*50,example.height/2+5);
    ctx.moveTo(example.width/2+r*50,example.height/2-5);
    ctx.lineTo(example.width/2+r*50,example.height/2+5);
    ctx.moveTo(example.width/2-5,example.height/2-r*50);
    ctx.lineTo(example.width/2+5,example.height/2-r*50);
    ctx.moveTo(example.width/2-5,example.height/2+r*50);
    ctx.lineTo(example.width/2+5,example.height/2+r*50);
    //
    ctx.font = '10px "Tahoma"';
    ctx.fillStyle = "black";
    ctx.fillText("-" + out,example.width/2-r*50,example.height/2+15);
    ctx.fillText("-" + out + "/2", example.width/2-r*25,example.height/2+15);
    ctx.fillText(out + "/2", example.width/2+r*25,example.height/2+15);
    ctx.fillText(out,  example.width/2+r*50,example.height/2+15);
    //
    ctx.fillText( out,example.width/2+5,example.height/2-r*50);
    ctx.fillText(out + "/2", example.width/2+5,example.height/2-r*25);
    ctx.fillText("-" + out + "/2", example.width/2+5,example.height/2+r*25);
    ctx.fillText("-" + out, example.width/2+5,example.height/2+r*50);
    ctx.stroke();
    var table = document.getElementById('resultTable');
    if(table.rows.length-1)
        drawDotOnLoad(table.rows[table.rows.length-1].firstChild.innerHTML,table.rows[table.rows.length-1].firstChild.nextSibling.innerHTML,table.rows[table.rows.length-1].lastChild.innerHTML);
    },
    methods: {

    }
});
function proverka() {
    var isXtrue = false;
    var x = document.getElementsByName('field_x');
    var y = document.getElementById('field_y').value;
    var r = document.getElementById('field_r').value;
    var inp = document.getElementsByName('r');
    for (var i = 0; i < x.length; i++) {
        if (x[i].checked) {
            document.getElementById('field_X').value = x[i].value;
            isXtrue=true;
        }
    }
    if(!isXtrue){
        alert("Вы не ввели значение для x!");
        return false;
    }
    if(y===""){
        alert("Вы не ввели значение для y!");
        return false;
    }
    if(y>5 || y <-3){
        alert("Вы ввели неверное значение для y!");
        return false;
    }
    if(r===""){
        alert("Вы не ввели значение для r!");
        return false;
    }
    if(r>4 || r <1){
        alert("Вы ввели неверное значение для r!");
        return false;
    }
    return true;
}

function draw() {
    if(document.getElementById('field_r').value>4||document.getElementById('field_r').value<1) {
        alert("Неверное значение r!");
        return;
    }
    var r = document.getElementById('field_r').value;
    var example = document.getElementById("example");
    var ctx = example.getContext('2d');
    ctx.fillStyle = "cadetblue";
    ctx.fillRect(0, 0, example.width, example.height);
    //Фигуры
    ctx.fillStyle = "red";
    ctx.fillRect(example.width/2-r*50, example.height/2-r*25, r*50, r*25);
    ctx.beginPath();
    ctx.moveTo(example.width/2-r*50,example.height/2);
    ctx.lineTo(example.width/2,example.height/2+r*50);
    ctx.lineTo(example.width/2,example.height/2);
    ctx.fill();
    ctx.arc(example.width/2, example.height/2, r*50, 1/2 * Math.PI, 0, true);
    ctx.fill();

    // Координатные оси
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    ctx.moveTo(example.width/2, 10);
    ctx.lineTo(example.width/2,example.height-10);
    ctx.moveTo(example.width/2, 10);
    ctx.lineTo(example.width/2+5,15);
    ctx.moveTo(example.width/2, 10);
    ctx.lineTo(example.width/2-5,15);
    //
    ctx.moveTo(10, example.height/2);
    ctx.lineTo(example.width-10,example.height/2);
    ctx.moveTo(example.width-10, example.height/2);
    ctx.lineTo(example.width-15,example.height/2-5);
    ctx.moveTo(example.width-10, example.height/2);
    ctx.lineTo(example.width-15,example.height/2+5);
    //
    ctx.moveTo(example.width/2-r*25,example.height/2-5);
    ctx.lineTo(example.width/2-r*25,example.height/2+5);
    ctx.moveTo(example.width/2+r*25,example.height/2-5);
    ctx.lineTo(example.width/2+r*25,example.height/2+5);
    ctx.moveTo(example.width/2-5,example.height/2-r*25);
    ctx.lineTo(example.width/2+5,example.height/2-r*25);
    ctx.moveTo(example.width/2-5,example.height/2+r*25);
    ctx.lineTo(example.width/2+5,example.height/2+r*25);
    //
    ctx.moveTo(example.width/2-r*50,example.height/2-5);
    ctx.lineTo(example.width/2-r*50,example.height/2+5);
    ctx.moveTo(example.width/2+r*50,example.height/2-5);
    ctx.lineTo(example.width/2+r*50,example.height/2+5);
    ctx.moveTo(example.width/2-5,example.height/2-r*50);
    ctx.lineTo(example.width/2+5,example.height/2-r*50);
    ctx.moveTo(example.width/2-5,example.height/2+r*50);
    ctx.lineTo(example.width/2+5,example.height/2+r*50);
    //Числа под графиком
    ctx.font = '10px "Tahoma"';
    ctx.fillStyle = "black";
    ctx.fillText("-" + r,example.width/2-r*50,example.height/2+15);
    ctx.fillText("-" + r + "/2", example.width/2-r*25,example.height/2+15);
    ctx.fillText(r + "/2", example.width/2+r*25,example.height/2+15);
    ctx.fillText(r,  example.width/2+r*50,example.height/2+15);
    //
    ctx.fillText(r,example.width/2+5,example.height/2-r*50);
    ctx.fillText(r + "/2", example.width/2+5,example.height/2-r*25);
    ctx.fillText("-" + r + "/2", example.width/2+5,example.height/2+r*25);
    ctx.fillText("-" + r, example.width/2+5,example.height/2+r*50);
    ctx.stroke();
}

function drawDot() {
    if(document.getElementById('field_r').value>4||document.getElementById('field_r').value<1) {
        alert("Неверное значение r!");
        return;
    }
    draw();
    var example = document.getElementById("example");
    var x = (-example.width/2 + event.clientX-525)/50;
    var y = (example.height/2 - event.clientY+10)/50;
    var R = document.getElementById('field_r').value;
    var ctx = example.getContext('2d');
    if(x<=0&&x>=-R&&y>=0&&y<=(R/2)){
        ctx.fillStyle = "green";
    }
    else if(x<=0&&y<=0&&-y-x<=R){
        ctx.fillStyle = "green";
    }
    else if(x>=0&&y<=0&&y*y+x*x<=R*R){
        ctx.fillStyle = "green";;
    }
    else
        ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(event.clientX-525 , event.clientY-10, 3, 2*Math.PI, 0, true);
    ctx.fill();
    document.getElementById('field_X').value = x;
    document.getElementById('field_y').value = y;
    document.getElementsByName('j_idt19')[0].click();
}

function drawDotOnLoad(x,y,inArea) {
    var example = document.getElementById("example");
    var clientX = x*50+example.width/2;
    var clientY = -y*50+example.height/2;
    var ctx = example.getContext('2d');
    if(inArea==='true'){
        ctx.fillStyle = "green";
    }
    else
        ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(clientX , clientY, 3, 2*Math.PI, 0, true);
    ctx.fill();
}

function entered(name) {
    return ((String(document.getElementById(name).value).length<18)&&(event.keyCode>47)&&(event.keyCode<58)||((event.keyCode===45)&&(document.getElementById(name).value!=='-')&&(document.getElementById(name).value===''))||((event.keyCode===46)&&(document.getElementById(name).value!==''&&document.getElementById(name).value!=='-')&&(!String(document.getElementById(name).value).includes('.'))));
}
