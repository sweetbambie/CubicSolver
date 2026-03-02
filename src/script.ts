const aValue = document.getElementById("a") as HTMLInputElement;
const bValue = document.getElementById("b") as HTMLInputElement;
const cValue = document.getElementById("c") as HTMLInputElement;
const dValue = document.getElementById("d") as HTMLInputElement;

function findRoots () {
  const a = Number(aValue.value);
  const b = Number(bValue.value);
  const c = Number(cValue.value);
  const d = Number(dValue.value);

  const p = (3*a*c-Math.pow(b, 2))/(3*Math.pow(a, 2));
  const q = ((27*Math.pow(a, 2)*d - 9*a*b*c + 2*Math.pow(b, 3)))/(27*Math.pow(a, 3))

  const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);

  if (discriminant < 0) {
    const angle = (1/3)*Math.acos(-q/(2*(Math.sqrt(-Math.pow(p/3, 3)))));

    const x1 = (2*(Math.sqrt(-p/3))*Math.cos(angle))-(b/(3*a))

    const x2 = (2*(Math.sqrt(-p/3))*Math.cos(angle +(2*Math.PI)/3))-(b/(3*a))
    
    const x3 = (2*(Math.sqrt(-p/3))*Math.cos(angle +(4*Math.PI)/3))-(b/(3*a))
  } 
  
  if (discriminant > 0) {
    const u = Math.cbrt((-q / 2) + Math.sqrt(discriminant)); 
    const v = Math.cbrt((-q / 2) - Math.sqrt(discriminant));
    const x1 = u + v - (b/(3*a))
  }

  else {
  console.log("Use Cardano's Method C");
  } 

}