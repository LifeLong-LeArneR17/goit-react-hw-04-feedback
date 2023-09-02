import React from "react";

export const FeedbackOptions = ({ options, OnChangeButtonGood, OnChangeButtonBad, OnChangeButtonNeutral }) => {
    return (
        options.map((option, index) => (
            <button key={index} onClick={option.onClick}>{option.label}</button>
        ))
    );
};
