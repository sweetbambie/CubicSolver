const canvas = document.getElementById("graph") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

document?.addEventListener("submit", (event) => {
  event.preventDefault();
  const aValue = document.getElementById("a") as HTMLInputElement;
  const bValue = document.getElementById("b") as HTMLInputElement;
  const cValue = document.getElementById("c") as HTMLInputElement;
  const dValue = document.getElementById("d") as HTMLInputElement;
  const equationDisplay = document.getElementById("equation-display") as HTMLParagraphElement;
  const equationText = `y = ${aValue.value}x³ + ${bValue.value}x² + ${cValue.value}x + ${dValue.value}`;
  equationDisplay.innerText = equationText;
  const a = Number(aValue.value);
  const b = Number(bValue.value);
  const c = Number(cValue.value);
  const d = Number(dValue.value);
  const p = (3 * a * c - Math.pow(b, 2)) / (3 * a ** 2);
  const q = ((27 * Math.pow(a, 2) * d - 9 * a * b * c + 2 * Math.pow(b, 3))) / (27 * Math.pow(a, 3))
  const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
  let x1: number | string;
  let x2: number | string;
  let x3: number | string;

  if (discriminant < 0) {
    const angle = (1 / 3) * Math.acos(-q / (2 * (Math.sqrt(-Math.pow(p / 3, 3)))));
    x1 = (2 * (Math.sqrt(-p / 3)) * Math.cos(angle)) - (b / (3 * a));
    x2 = (2 * (Math.sqrt(-p / 3)) * Math.cos(angle + (2 * Math.PI) / 3)) - (b / (3 * a));
    x3 = (2 * (Math.sqrt(-p / 3)) * Math.cos(angle + (4 * Math.PI) / 3)) - (b / (3 * a));
  } else if (discriminant > 0) {
    const u = Math.cbrt((-q / 2) + Math.sqrt(discriminant));
    const v = Math.cbrt((-q / 2) - Math.sqrt(discriminant));
    x1 = u + v - (b / (3 * a))
    x2 = "Complex";
    x3 = "Complex"
  } else {
    const r1 = Math.cbrt(-q / 2);
    const shift = b / (3 * a);

    x1 = 2 * r1 - shift;
    x2 = -r1 - shift;
    x3 = -r1 - shift;
  }

  (document.getElementById("x1-result") as HTMLElement).innerText = `${x1}`;
  (document.getElementById("x2-result") as HTMLElement).innerText = `${x2}`;
  (document.getElementById("x3-result") as HTMLElement).innerText = `${x3}`;
  (document.getElementById("p-result") as HTMLElement).innerText = `${p}`;
  (document.getElementById("q-result") as HTMLElement).innerText = `${q}`;
  (document.getElementById("discriminate") as HTMLElement).innerText = `${discriminant}`;

  ctx.clearRect(0, 0, 600, 600);
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 1;

  for (let i = 0; i <= 600; i += 20) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 600);
    ctx.moveTo(0, i);
    ctx.lineTo(600, i);
    ctx.stroke();
  }

  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 300);
  ctx.lineTo(600, 300);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(300, 0);
  ctx.lineTo(300, 600);
  ctx.stroke();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.beginPath();
  
  for (let x = -300; x <= 300; x++) {
    const X = x / 20;
    const y = a * X * X * X + b * X * X + c * X + d;
    ctx.lineTo(300 + x, 300 - y * 20);
    ctx.stroke();
  }
})