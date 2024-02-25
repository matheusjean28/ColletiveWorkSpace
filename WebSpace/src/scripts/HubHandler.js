function renderConnectionStatus(connection) {
  const htmlContentApend = document.querySelector(".hubStatusSpan");
  htmlContentApend.innerHTML = `<p class="hubIsConnected"> ${connection.state}</p>`;
}

// pass postion x and y before
function GetMousePositionUserFunc(connection, postionX, postionY) {
  connection
    .invoke("SendMessage", connection.connectionId, message =`x: ${postionX}, y: ${postionY}`)
    .then(() => {})
    .catch((error) => {
      console.error("Errror:", error);
    });
}

