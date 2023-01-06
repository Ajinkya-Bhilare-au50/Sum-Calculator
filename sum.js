function calcSum() {
  let box1 = document.getElementById("num1").value;
  let box2 = document.getElementById("num2").value;
  let sum = Number(box1) + Number(box2);
  //   document.getElementById("Ans").value = sum;
  console.log(sum);
  document.getElementById("answer").innerHTML = sum;
}
function clear1() {
  t = 0;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("answer").innerHTML = t;
}
