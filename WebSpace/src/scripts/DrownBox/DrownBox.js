function onMouseMove(e) {
    // Calcula as novas posições da div com base na posição atual do mouse e na diferença calculada anteriormente
    var newX = e.clientX - offsetX;
    var newY = e.clientY - offsetY;

    // Define as novas posições da div
    draggableElement.style.left = newX + 'px';
    draggableElement.style.top = newY + 'px';
}