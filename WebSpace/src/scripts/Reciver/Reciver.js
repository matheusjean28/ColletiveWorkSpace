function handlerVariableState(_variable, value) {
    _variable += parseInt(value);
    return _variable;
}

function UpdatepositionX(value) {
    positionX = parseFloat(value);
}

function UpdatepositionY(value) {
    positionY = parseFloat(value);
}

function sendPosition(connection) {
    GetMousePositionUserFunc(connection, positionX, positionY);
}