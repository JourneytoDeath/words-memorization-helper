const eng = document.getElementById("eng");
const textInput = document.querySelector("#kor input");
const correct = document.querySelector("#correct");
const wrong = document.querySelector("#wrong");
const coratio = document.querySelector("#coratio");

const CORRECT = 1;
const WRONG = 0;

function getRandomWord() {
    word = words[Math.floor(Math.random() * words.length)];
    eng.innerText = word.e;
}

function handleInput(event) {
    if (window.event.keyCode == 13 & event.target.value == word.k) {
        // 단어 바뀌는 애니메이션 추가
        setCounter(CORRECT);
        getRandomWord();
        event.target.value = "";
    } else {
        if (window.event.keyCode == 13) {
            setCounter(WRONG);
            getRandomWord();
            event.target.value = "";
        }
        // 영어 단어 흔들림 추가 -> 틀렸다는 표시 해주는 동작
    }
}

function setCounter(input) {
    if (input == CORRECT) {
        correctCounter++;
        correct.innerText = `맞은 개수 : ${correctCounter}`;
    } else {
        wrongCounter++;
        wrong.innerText = `틀린 개수 : ${wrongCounter}`;
    }
    coratio.innerText = `정답률 : ${((correctCounter / (correctCounter + wrongCounter)) * 100).toFixed(2)} %`;
}

const words = [
    {e:"Hello", k:"안녕"},
    {e:"Apple", k:"사과"},
    {e:"Orange", k:"오렌지"},
    {e:"Banana", k:"바나나"},
    {e:"Book", k:"책"},
    {e:"Door", k:"문"},
    {e:"Car", k:"자동차"},
];

let word = words[Math.floor(Math.random() * words.length)];
eng.innerText = word.e;

let correctCounter = 0;
let wrongCounter = 0;
let correctAnswerRate = 0;

textInput.addEventListener("keyup", handleInput);