

var org = "<tr><td>Notes</td><td>Frequency (Hz)</td></tr>";

function clearText(){
  document.getElementById("output").innerHTML = "";
}


function find(){

  document.getElementById("output").innerHTML = org;

  var data = document.getElementById("ipText").value;
  // let freq = [];
  // let a = (2**(1/12));
  for (i = 0; i <= 22; i++){
    // let num = (data*(a**i));
    // let final = Math.round(num * 100) / 100;

    // let b = final.toString();

    let change = "";

    let tochange = document.getElementById("output");

    b = "0";

    change += "<tr><td>";
    if (i == 0){
      change += "S"
    }
    else if (i == 1){
      change += "r1";
    }
    else if (i == 2){
      change+= "r2";
    }
    else if (i == 3){
      change+= "R1";
    }
    else if (i == 4){
      change+= "R2";
    }
    else if (i == 5){
      change+= "g1";
    }
    else if (i == 6){
      change+= "g2";
    }
    else if (i == 7){
      change+= "G1";
    }
    else if (i == 8){
      change+= "G2";
    }
    else if (i == 9){
      change+= "M1";
    }
    else if (i == 10){
      change+= "M2";
    }
    else if (i == 11){
      change+= "m1";
    }
    else if (i == 12){
      change+= "m2";
    }
    else if (i == 13){
      change+= "P";
    }
    else if (i == 14){
      change+= "d1";
    }
    else if (i == 15){
      change+= "d2";
    }
    else if (i == 16){
      change+= "D1";
    }
    else if (i == 17){
      change+= "D2";
    }
    else if (i == 18){
      change+= "n1";
    }
    else if (i == 19){
      change+= "n2";
    }
    else if (i == 20){
      change+= "N1";
    }
    else if (i == 21){
      change+= "N2";
    }
    else if (i == 22){
      change+= "S'";
    }
    change += "</td><td>";
    // change += b;
    if (i == 0){
      var curr = data;
      
      change += curr.toString();
      
    }
    else if (i == 1){

      var curr = Math.round(((256/243)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 2){
      var curr = Math.round(((16/15)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 3){
      var curr = Math.round(((10/9)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 4){
      var curr = Math.round(((9/8)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 5){
      var curr = Math.round(((32/27)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 6){
      var curr = Math.round(((6/5)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 7){
      var curr = Math.round(((5/4)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 8){
      var curr = Math.round(((81/64)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 9){
      var curr = Math.round(((4/3)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 10){
      var curr = Math.round(((27/20)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 11){
      var curr = Math.round(((45/32)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 12){
      var curr = Math.round(((729/512)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 13){
      var curr = Math.round(((3/2)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 14){
      var curr = Math.round(((128/81)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 15){
      var curr = Math.round(((8/5)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 16){
      var curr = Math.round(((5/3)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 17){
      var curr = Math.round(((27/16)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 18){
      var curr = Math.round(((16/9)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 19){
      var curr = Math.round(((9/5)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 20){
      var curr = Math.round(((15/8)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 21){
      var curr = Math.round(((243/128)*data) * 100) / 100;
      
      change += curr.toString();
    }
    else if (i == 22){
      var curr = Math.round(((2)*data) * 100) / 100;
      
      change += curr.toString();
    }
    change += "</td></tr>";

    tochange.innerHTML += change;

    // str = `Test    `

  }
  // var temp = freq.join('<br>');
  // document.getElementById("output").innerHTML = temp;
} 



//document.getElementById("output").innerHTML += "<tr><td>Test</td><td>Data</td></tr>";