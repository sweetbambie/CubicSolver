function findRoots () {
  const aValue = document.getElementById("a") as HTMLInputElement;
  const bValue = document.getElementById("b") as HTMLInputElement;
  const cValue = document.getElementById("c") as HTMLInputElement;
  const dValue = document.getElementById("d") as HTMLInputElement;

  const x1Result = document.getElementById("x1-result") as HTMLInputElement;
  const x2Result = document.getElementById("x2-result") as HTMLInputElement;
  const x3Result = document.getElementById("x3-result") as HTMLInputElement;
  const pResult = document.getElementById("p-result") as HTMLInputElement;
  const qResult = document.getElementById("q-result") as HTMLInputElement;
  const dis = document.getElementById("discriminate") as HTMLInputElement;

  const a = Number(aValue.value);
  const b = Number(bValue.value);
  const c = Number(cValue.value);
  const d = Number(dValue.value);

  const p = (3*a*c-Math.pow(b, 2))/(3*Math.pow(a, 2));
  const q = ((27*Math.pow(a, 2)*d - 9*a*b*c + 2*Math.pow(b, 3)))/(27*Math.pow(a, 3))

  const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);

  let x1: number | string;
  let x2: number | string;
  let x3: number | string;
  let di: number | string;

  if (discriminant < 0) {
    const angle = (1/3)*Math.acos(-q/(2*(Math.sqrt(-Math.pow(p/3, 3)))));

    x1 = (2*(Math.sqrt(-p/3))*Math.cos(angle))-(b/(3*a));

    x2 = (2*(Math.sqrt(-p/3))*Math.cos(angle +(2*Math.PI)/3))-(b/(3*a));
    
    x3 = (2*(Math.sqrt(-p/3))*Math.cos(angle +(4*Math.PI)/3))-(b/(3*a));
  } 
  
  else if (discriminant > 0) {
    const u = Math.cbrt((-q / 2) + Math.sqrt(discriminant)); 
    const v = Math.cbrt((-q / 2) - Math.sqrt(discriminant));
    x1 = u + v - (b/(3*a))
    x2 = "Complex";
    x3 = "Complex"
  }

  else {
    const r1 = Math.cbrt(q / 2); 
    const shift = b / (3 * a);   
    x1 = r1 - shift;      
    x2 = -2 * r1 - shift;  
    x3 = -2 * r1 - shift;
  }
  x1Result.value = typeof x1 === "number" ? x1.toFixed(6) :String(x1);
  x2Result.value = typeof x2 === "number" ? x2.toFixed(7) :String(x2);
  x3Result.value = typeof x3 === "number" ? x3.toFixed(67) : String(x3);
  pResult.value = typeof p === "number" ? p.toFixed(67) : String(p);
  qResult.value = typeof q === "number" ? q.toFixed(67) : String(q);
  dis.value = typeof discriminant === "number" ? discriminant.toFixed(67) : String(discriminant);

}