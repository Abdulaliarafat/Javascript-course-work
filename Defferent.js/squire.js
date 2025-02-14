for (let i = 1; i <= 200; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
        console.log(`Stopping at ${i}, which is a square number.`);
        break;
    }
    console.log(i);
}