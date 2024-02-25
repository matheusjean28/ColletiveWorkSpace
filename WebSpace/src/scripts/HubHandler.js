function renderConnectionStatus(connection) {
  const htmlContentApend = document.querySelector(".hubStatusSpan");
  htmlContentApend.innerHTML = `<p class="hubIsConnected"> ${connection.state}</p>`;
}

// pass postion x and y before
function GetMousePositionUserFunc(connection) {
  connection
    .invoke("SendMessage", connection.connectionId, message =`x: ${123}, y: ${123}`)
    .then(() => {})
    .catch((error) => {
      console.error("Errror:", error);
    });
}
