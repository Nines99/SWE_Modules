try {
    noSuchVariable;
} catch (err) {
    console.log ("caught the error");
    console.error(err.message)
}

console.log('print errors but keeps going')