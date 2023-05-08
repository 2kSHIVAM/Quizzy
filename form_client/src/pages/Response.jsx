// eslint-disable-next-line
import React, { useState } from "react";
import { FormField } from "../components";
import { CustomButton } from "../components";
import questions from "../question.json";
import Axios from "axios";
import {  useNavigate } from 'react-router-dom';

var ques = [];
for (var key in questions) {
  if (questions.hasOwnProperty(key)) {
    var val = questions[key];
    ques.push(val);
  }
}

function Response() {
  const navigate=useNavigate()
  const [defaultAnswers, setDefaultAnswers] = useState(["", "", "", ""]);
  const updateDefaultAnswers = (answer, index) => {
    const oldAnswers = defaultAnswers;
    oldAnswers[index] = answer;
    setDefaultAnswers([...oldAnswers]);
  };
  const [answers, setAnswers] = useState(() => {
    let emptyAns = [];
    for (let i = 0; i < ques.length; i++) {
      emptyAns.push("");
    }
    return emptyAns;
  });

  const updateAnswers = (answer, index) => {
    let oldAns = answers;
    oldAns[index] = answer;
    setAnswers([...oldAns]);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // console.log("Default ANswers: ", defaultAnswers);
      // console.log("Dynamic Answers: ", answers);

      const res = await Axios.post(
        "http://127.0.0.1:3050/api/v1/submitForm/submit",
        {
          name: defaultAnswers[0],
          email: defaultAnswers[1],
          enrollmentNumber: defaultAnswers[2],
          batch: defaultAnswers[3],
          answers: answers,
        }
      );

      console.log(res.data);
      // handle form submission here
    } catch (error) {
      console.error(error)
    }
    navigate('/submitted')
  };


  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Quiz 2023
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Your Name *"
            placeholder="Enter Your Name"
            inputType="text"
            value={defaultAnswers[0]}
            handleChange={(event) =>
              updateDefaultAnswers(event.target.value, 0)
            }
          />
          <FormField
            labelName="Email *"
            placeholder="example@gmail.com"
            inputType="email"
            value={defaultAnswers[1]}
            handleChange={(event) =>
              updateDefaultAnswers(event.target.value, 1)
            }
          />
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Your Enrollment number *"
            placeholder="9999900000"
            inputType="number"
            value={defaultAnswers[2]}
            handleChange={(event) =>
              updateDefaultAnswers(event.target.value, 2)
            }
          />
          <FormField
            labelName="Batch"
            placeholder="Your Batch"
            inputType="text"
            value={defaultAnswers[3]}
            handleChange={(event) =>
              updateDefaultAnswers(event.target.value, 3)
            }
          />
        </div>
        {ques.map((e, i) => (
          <FormField
            labelName={e}
            placeholder="Write in short"
            isTextArea
            value={answers[i]}
            handleChange={(event) => updateAnswers(event.target.value, i)}
          />
        ))}
        {/* <FormField 
            labelName="What IS THE ADVANTAGES OF REACT ?"
            placeholder="Write in short"
            isTextArea
            value={answer1}
            handleChange={(event) => setAnswer1(event.target.value)}
          />
            <FormField 
            labelName="What is meant by networking ?"
            placeholder="Write in short"
            isTextArea
            value={answer2}
            handleChange={(event) => setAnswer2(event.target.value)}
            />
            <FormField 
            labelName="Should we move from web2.0 to web3.0"
            placeholder="Write in short"
            isTextArea
            value={answer3}
            handleChange={(event) => setAnswer3(event.target.value)}
            /> */}

        {/* <label>
            Question 1:
            <textarea value={answer1} onChange={(event) => setAnswer1(event.target.value)} />
            </label>
            <label>
            Question 2:
            <textarea value={answer2} onChange={(event) => setAnswer2(event.target.value)} />
            </label>
            <label>
            Question 3:
            <textarea value={answer3} onChange={(event) => setAnswer3(event.target.value)} />
            </label> */}
        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="submit"
            title="Submit Quiz"
            styles="bg-[#1dc071]"
          />
        </div>
      </form>
    </div>
  );
}

export default Response;

// );
