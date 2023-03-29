function codeToRunLater() {
    for (var i = 0; i < 10; i++) {
        console.log("running: " + i);
    }
}

setTimeout(codeToRunLater, 1000);

console.log("End");