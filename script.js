

var org = "<tr><td>Notes</td><td>Frequency (Hz)</td></tr>";

function clearText(){
  document.getElementById("output").innerHTML = org;
}


function find(){

  document.getElementById("output").innerHTML = org;

  var data = document.getElementById("ipText").value;
  // let freq = [];
  let a = (2**(1/12));
  for (i = 1; i <= 12; i++){
    let num = (data*(a**i));
    let final = Math.round(num * 100) / 100;

    let b = final.toString();

    let change = "";

    let tochange = document.getElementById("output");

    change += "<tr><td>";
    if (i == 1){
      change += "Komal Re";
    }
    else if (i == 2){
      change+= "Shuddha Re";
    }
    else if (i == 3){
      change+= "Komal Ga";
    }
    else if (i == 4){
      change+= "Shuddha Ga";
    }
    else if (i == 5){
      change+= "Shuddha Ma";
    }
    else if (i == 6){
      change+= "Teevra Ma";
    }
    else if (i == 7){
      change+= "Pa";
    }
    else if (i == 8){
      change+= "Komal Dha";
    }
    else if (i == 9){
      change+= "Shuddha Dha";
    }
    else if (i == 10){
      change+= "Komal Ni";
    }
    else if (i == 11){
      change+= "Shuddha Ni";
    }
    else if (i == 12){
      change+= "Tar Sa";
    }
    change += "</td><td>";
    change += b;
    change += "</td></tr>";

    tochange.innerHTML += change;

    // str = `Test    `

  }
  // var temp = freq.join('<br>');
  // document.getElementById("output").innerHTML = temp;
} 



//document.getElementById("output").innerHTML += "<tr><td>Test</td><td>Data</td></tr>";