const Sentiment = require('sentiment');
const sentiment = new Sentiment();

const result1 = sentiment.analyze('Cats are basically cheating.');
console.dir(result1); // Score: -3, Comparative: -0.75

const result2 = sentiment.analyze('I love big red strawberries.')
console.dir(result2); // Score: +4, Comparative: +0.8
// Analyses a given sentence and returns a sentiments score
function getSentenceScore(sentence){
    let analysis = sentiment.analyze(sentence)
    return analysis.score
}

console.log(getSentenceScore('Module 1 is overwhelming.'))
console.log(getSentenceScore('I hate studying for exams.'))
console.log(getSentenceScore('Lack of sleep makes your tired.'))
console.log(getSentenceScore('Eating yummy food feels amazing'))