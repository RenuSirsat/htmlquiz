const quizData = [
    {
        question: "HTML stands for -",

          a:"HighText Machine Language",
          b:"HyperText and links Markup Language",
          c:"HyperText Markup Language",
          d:"None of these",
        correct: "c",
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is -",

          a:"Head, Title, HTML, body",
          b:"HTML, Body, Title, Head",
          c:"HTML, Head, Title, Body",
           d:"HTML, Head, Title, Body",
        
        correct: "d",
    },
    {
        question: "Which of the following element is responsible for making the text bold in HTML?",
          a:"<pre>",
          b:"<a>",
          c:"<b>",
          d:"<br>",
        correct: "c",
    },
    {
        question: "Which of the following tag is used for inserting the largest heading in HTML?",

         a:"<h3>",
         b:"<h1>",
         c:"<h5>",
         d:"<h6>",
        correct: "b",
    },
    {
        question: "Which of the following tag is used to insert a line-break in HTML?",

         a:"<br>",
         b:"<a>",
         c:"<pre>",
         d:"<b>",
        correct: "a",
    },
    {
        question: "How to create an unordered list (a list with the list items in bullets) in HTML?",

         a:"<ul>",
         b:"<ol>",
         c:"<li>",
         d:"<i>",
        correct: "a",
    },
    {
          question: "Which character is used to represent the closing of a tag in HTML?",

           a:"|",
           b:"@",
           c:"/",
          d:".",
        correct: "c",
    },

    {
        question: "How to create an ordered list (a list with the list items in numbers) in HTML?",

        a:"<ul>",
        b:"<ol>",
        c:"<li>",
        d:"<i>",
        correct: "b",
    },

    {
        question:"Which of the following element is responsible for making the text italic in HTML?",

         a:"<i>",
         b:"<italic>",
         c:"<it>",
         d:"<pre>",
        correct: "a",
    },
    {
        question:"<input> is -",

         a:"a format tag.",
         b:"an empty tag.",
         c:"All of the above",
         d:"None of the above",
                
        correct: "b",
    },
    {
        question:"Which of the following tag is used to make the underlined text?",

         a:"<i>",
         b:"<ul>",
         c:"<u>",
         d:"<pre>",
        correct: "c",
    },
    {
        question:"Which of the following tag is used to define options in a drop-down selection list?",

         a:"<select>",
         b:"<list>",
         c:"<dropdown>",
         d:"<option>",
        correct: "d",
    },
    {
        question:"Which of the following tag is used to add rows in the table?",

         a:"<td> and </td>",
         b:"<th> and </th>",
         c:"<tr> and </tr>",
         d:"None of the above",
        correct: "c",
    },
    {
        question:"The <hr> tag in HTML is used for -",

         a:"new line",
         b:"vertical ruler",
         c:"new paragraph",
         d:"horizontal ruler",
        correct: "d",
    },
    {
        question: "Which of the following HTML tag is the special formatting tag?",
        a:"<p>",
        b:"<b>",
        c:"<pre>",
        d:"None of the above",
        correct: "c",
    },
    {
        question:"Which of the following is the container for <tr>, <th>, and <td> ?",

         a:"<data>",
        b:"<table>",
        c:"<group>",
        d:"All of the above",
        correct: "b",
    },
    {
        question:"Which of the following HTML attribute is used to define inline styles?",
         a:"style",
         b:"type",
         c:"class",
         d:"None of the above",
        correct: "a",
    },
    {
        question: "A program in HTML can be rendered and read by -", 
         a:"Web browser",
         b:"Server",
         c:"Interpreter",
         d:"None of the above",
        correct: "a",
    },
    {
        question: "Which of the following is the root tag of the HTML document?",

         a:"<body>",
         b:"<head>",
         c:"<title>",
         d:"<html>",
        correct: "d",
    },
    {
        question: "Which HTML tag is used to display the power in expression, i.e., (x2 - y2)?",

         a:"<sup>",
         b:"<sub>",
        c:"<p>",
        d:"None of the above",
        
        correct: "a",
    },


];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})