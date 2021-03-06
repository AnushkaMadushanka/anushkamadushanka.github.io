import React, { Component } from 'react';
import Typist from 'react-typist';

import './home.css'
import angular from '../assets/icons/angular.jpg'
import react from '../assets/icons/react.jpg'
import csharp from '../assets/icons/csharp.jpg'
import js from '../assets/icons/js.jpg'
import node from '../assets/icons/node.jpg'
import unity from '../assets/icons/unity.jpg'
import sqlserver from '../assets/icons/sql.jpg'


export default class Home extends Component {
    render() {
        return (
            <div className="details-holder-home">
                <div style={{ width: '100%' }}>
                    <Typist className="details-background">
                        <section className="details">
                            <div className="details-name">
                                Hi, <br />
                                I'm Anushka
                                </div>
                            <div className="details-shortdes">
                                Desktop/Web/Game Developer
                                </div>
                        </section>
                        <Typist.Delay ms={500} />
                        <section className="details">
                            <div className="details-name">
                                My Story
                                </div>
                            <div className="details-shortdes">
                                <p>
                                    I am a software engineer with Excellent problem solving skills. I am open to learn new technologies depending on project needs, friendly concerning client needs/changes and always love to learn and help.
                                    </p>
                                <p>
                                    I love what I do, spend hours doing it, I always look for challenges and apply the best practices for the code I write.
                                    </p>
                            </div>
                        </section>
                    </Typist>
                    <section className="details-background" style={{ textAlign: "center" }}>
                        <section className="details icon-holder">
                            <img src={angular} className="ts-icon" alt="Angular"/>
                            <img src={react} className="ts-icon" alt="ReactJs"/>
                            <img src={js} className="ts-icon" alt="Javascript"/>
                            <img src={node} className="ts-icon" alt="NodeJs"/>
                            <img src={csharp} className="ts-icon" alt="C#"/>
                            <img src={sqlserver} className="ts-icon" alt="SQL Server"/>
                            <img src={unity} className="ts-icon" alt="Unity"/>
                        </section>
                    </section>
                </div>
            </div>
        )
    }
}