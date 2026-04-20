// do {
//   if (time === bomb) {
//     alert("Alerta numero invalido, interrompendo BOOOM");
//     break;
//   }
//Crie um programa que simule esse funcionamento do temporizador de
// aquecimento, garantindo que ele continue funcionando até atingir pelo
// menos 5 segundos.
//   alert(time);
//   time++;
// } while (time <= limite);



let time = 0
let aqc = 5
   
for(time = 0; time <=5; time++ ){
     alert(time)
     if(time == aqc) {
        alert("Aquecimento feito com sucesso")
     }
}
