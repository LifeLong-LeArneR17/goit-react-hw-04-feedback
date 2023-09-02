import React from "react"
import PropTypes from "prop-types";
export const Section = ({title, children}) => {
    return (   
        <> 
        <h2>{title}</h2>
        <div>{children}</div>
        </>
    )

}

Section.prototype = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}