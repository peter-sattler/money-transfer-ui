/************************************************/
/* Generate a random number between min and max */
/************************************************/
function generateRandom(min, max) {
    var random = Math.random() * (max - min + 1);
    return Math.floor(random) + min;
}