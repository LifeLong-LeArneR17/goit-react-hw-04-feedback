import React from "react"
import {NotificationStyled} from './Notification.styled';
import PropTypes from "prop-types";


export const Notification = ({message}) => {
 return (<NotificationStyled>{message}</NotificationStyled>)   
}

Notification.prototypes = {
    message: PropTypes.string.isRequired
}