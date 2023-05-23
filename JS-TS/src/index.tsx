import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import {User} from "./06-Callbacks/06-Callbacks";
import {splitIntoWords} from "./2023/01-hello-tests-2023/01";
import App from "./App";
import {addSkills, sum} from "./2023/03-Function-2023/2023.03";
import {student} from "./2023/02-Object-2023/2023.02";
import {render} from "@testing-library/react";



/*const sentence = "Hello world!"
const result = splitIntoWords(sentence)
console.log(result)

console.log(result[0] === 'Hello')

const result2 = sum(242,4353)
console.log(result2)*/

const a = sum(2,3)

const s = student.technologies.map(skill =>
    <div>{skill.id}  -  {skill.title}</div>
)



ReactDOM.render(
    <React.StrictMode>
        <App/>
        {s}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
