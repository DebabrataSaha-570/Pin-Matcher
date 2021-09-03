function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';
    if (pinString.length == 4) {
        console.log(pin)
    }

}


function generatePin() {
    getPin();
}