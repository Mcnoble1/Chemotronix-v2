'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const Calculator = () => {
    const [showQuestions, setShowQuestions] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        "What is the size of your living space?",
        "How many people live in your household?",
        "How many miles do you drive each week?",
        "How many miles do you fly each year?",
        "How much do you spend on electricity each month?",
        "How much do you spend on gas each month?",
        "How much do you spend on food each month?",
        "How much do you spend on clothing each month?",
        "How much do you spend on entertainment each month?",
        "How much do you spend on travel each month?",
        "How much do you spend on other expenses each month?",
    ];

    const handleStartCalculating = () => {
        setShowQuestions(true);
    };

    const handleNext = () => {
        setCurrentQuestion(prev => prev + 1);
    };

    const handleBack = () => {
        setCurrentQuestion(prev => prev - 1);
    };

    return (
        <section className="h-screen bg-[url('/images/calc.png')] bg-cover bg-center">
            <div className=' bg-black/70 h-screen px-[10%] gap-[10%] lg:gap-[25%] flex flex-col lg:flex-row items-center justify-center'>
                {!showQuestions ? (
                <>
                    <div>
                        <h1 className="text-6xl text-white mb-5">Carbon Footprint Calculator.</h1>
                        <button onClick={handleStartCalculating} className="text-2xl rounded-2xl p-4 text-[#01431D]  bg-[#FFFED4]">Start Calculating
                        <FontAwesomeIcon icon={faArrowRight} className="text-[#01431D] text-2xl ml-5" />
                        </button> 
                    </div>

                    <div className="rounded-lg bg-[#01431D]/60 h-fit p-10 text-white">
                        <p>This setting calculates the carbon footprint of an individual by evaluating their daily activities, transportation, energy usage, and consumption patterns allowing users to understand and manage environmental impacts on a personal level</p>
                    </div>
                </>
                ) : (
                    <div className="rounded-lg flex flex-col bg-[#01431D]/60 h-fit w-[100%] lg:w-[80%] mt-[10%] p-10 text-white">
                    <div className="flex items-center mb-5">
                        {currentQuestion >= 1 && (
                            <button onClick={handleBack} className="mr-3">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                         )}
                        <h1 className="text-3xl flex-grow text-center mb-5">{questions[currentQuestion]}</h1>
                    </div>
                    <input type="text" placeholder="Type something here..." className="bg-transparent border mb-10 rounded-lg outline-none p-4" />
                    {currentQuestion < questions.length - 1 && (
                        <button onClick={handleNext} className="bg-[#FFFED4] p-3 mb-5  text-[#01431D] rounded-xl w-[30%] mx-[35%]">Next</button>
                    )}
                    <p className="text-center">{currentQuestion + 1} of {questions.length}</p>
                </div>
                )}
            </div>
        </section>
    );
};

export default Calculator;
