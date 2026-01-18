function calculate() {
  const total = Number(document.getElementById("total").value);
  const attended = Number(document.getElementById("attended").value);
  const target = Number(document.getElementById("target").value);

  if (total <= 0 || attended < 0 || attended > total) {
    document.getElementById("result").innerText =
      "Invalid input. Fix your numbers.";
    return;
  }

  const current = ((attended / total) * 100).toFixed(2);
  const p = target / 100;
  let x = Math.ceil(((p * total) - attended) / (1 - p));
  if (x < 0) x = 0;

  document.getElementById("result").innerHTML = `
    <p>Current Attendance: <b>${current}%</b></p>
    <p>You must attend the next <b>${x}</b> hours continuously.</p>
  `;
}
