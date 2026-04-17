let total = 0;
let dia = 1;

do {
  total = total + dia;
  alert(`Dia ${dia}: R$${total}`);
  dia++;
} while (dia <= 10);
alert("Total economizado: R$" + total);

//0+1 = 1
//1+2 = 3
//3+3 = 6
//6+4 = 10
