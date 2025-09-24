export default async function fetchQuestions(category, difficulty, amount) {
    let url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${category}`;

    const response = await fetch(url);
    const data = await response.json();


    return data.results;
}