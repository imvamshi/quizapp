
let str = `@QUESTIONS
Who is the CEO of Alphabet
@ANSWERS
3
Maichel Dell
Bill Gates
Sundar Pichai
Larry Page
@END

@QUESTION

When was West Virginia University founded?

@ANSWERS
3
1967
1945
1867
1921
None of the above
All of the above
@END
* Remember: blank lines and comments are ignored throughout!

* END OF FILE
`;

const QUESTION = "@Q";
const ANSWER = "@A";
const END = "@E";
const COMMENT = "*";

function isQuestion(s) {
    return (s.includes(QUESTION));
}
function isAnswer(s) {
    return (s.includes(ANSWER));
}
function isAnEnd(s) {
    return (s.includes(END));
}
function isComment(s) {
    return (s.includes(COMMENT));
}
function blank(s) {
    return s.length == 0;
}

const stringLines = str.split('\n');

let readingQuestion = false;
let readingAnswer = false;
let readingOption = false;

const data = {
    "question": [],
    "options": [],
    "answer": [],
    "asked": [],

}

let ovec = [];
let qvec = [];
let answer = '';

let qno = 0;

for (let i = 0; i < stringLines.length; i++) {
    let line = stringLines[i];
    if(blank(line)) {
        continue;
    }
    if(!isComment(line)) {
        if(isQuestion(line)) {
            readingQuestion = true, readingAnswer = false, readingOption = false;
            continue;
        } else if(isAnswer(line)) {
            readingQuestion = false, readingAnswer = true, readingOption = false;
            continue;
        } else if(isAnEnd(line)) {
            readingQuestion = true, readingAnswer = false, readingOption = false;
            
            // QUIZ quiz = QUIZ();
            // quiz.question = qvec;
            // quiz.answer = answer;
            // quiz.options = ovec;
            // quiz.asked = false;
            // quizVector.push_back(quiz);

            // qvec.clear();
            // ovec.clear();
            
            data["question"].push(JSON.stringify(qvec));
            data["options"].push(ovec);
            data["answer"].push(answer);
            data["asked"].push(false);

            qvec = [];
            ovec = [];


            continue;
        }
    }
    if(readingQuestion) {
        qvec.push(line);
    } else if(readingAnswer) {
        answer = line;
        readingOption = true;
        readingAnswer = false;
    } else if(readingOption) {
        ovec.push(line);
    }   
}

// console.log(data);


