import React from "react";
import NotFound from "./NotFound";
import Languages from "./Languages";
import Experiences from "./Experiences";
import Education from "./Education";
import PersonalWork from "./PersonalWork";
import Skills from "./Skills";
import Interests from "./Interests";

const Line = (props) => {
    return (
        <div>
            { props.value !== 'languages'
            && props.value !== 'experiences'
            && props.value !== 'education'
            && props.value !== 'skills'
            && props.value !== 'personal work'
            && props.value !== 'interests'
            && props.value !== ''
            && props.value !== 'clear' && (
                <NotFound value={props.value} />
            ) }
            { props.value === 'languages' && (
                <Languages />
            ) }
            { props.value === 'experiences' && (
                <Experiences />
            ) }
            { props.value === 'personal work' && (
                <PersonalWork />
            ) }
            { props.value === 'education' && (
                <Education />
            ) }
            { props.value === 'skills' && (
                <Skills />
            ) }
            { props.value === 'interests' && (
                <Interests />
            ) }
        </div>
    )
};


export default Line