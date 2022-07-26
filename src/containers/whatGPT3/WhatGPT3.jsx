import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus cumque aliquid maxime dolore incidunt perferendis ipsum hic? Nostrum, repudiandae? Repellendus doloribus eum culpa deserunt voluptates quia rerum necessitatibus? Itaque?"/>
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>
                    
                    The possibilties are beyond your imagination
                </h1>
                <p>Explore The Library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus cumque aliquid maxime dolore incidunt perferendis ipsum hic? Nostrum, repudiandae? Repellendus doloribus eum culpa deserunt voluptates quia rerum necessitatibus? Itaque?"/>
                <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus cumque aliquid maxime dolore incidunt perferendis ipsum hic? Nostrum, repudiandae? Repellendus doloribus eum culpa deserunt voluptates quia rerum necessitatibus? Itaque?"/>
                <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus cumque aliquid maxime dolore incidunt perferendis ipsum hic? Nostrum, repudiandae? Repellendus doloribus eum culpa deserunt voluptates quia rerum necessitatibus? Itaque?"/>
            </div>
        </div>
    );
};

export default WhatGPT3;