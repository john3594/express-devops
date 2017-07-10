import React from 'react'
import $ from 'jquery'
import PropTypes from 'prop-types'

export default class Prompt extends React.Component{
    render(){
        let { title, content, actionText, action, close } = this.props
        $('.prompt-done').focus()
        return(
            <div class="prompt">
                <div class="prompt-top">
                    <span class="prompt-title">{title}</span>
                    <span onClick={() => close(null, "deleting")} ><i class="material-icons">clear</i></span>
                </div>
                <div class="prompt-middle">
                    <span class="prompt-content">{content}</span>
                </div>
                <div class="prompt-bottom">
                    <a href="#" class="sec_btn prompt-cancel" onClick={e => close(e, "deleting")} >Cancel</a>
                    <a href="#" class="pri_btn prompt-done" autoFocus="true" onClick={action} >{actionText}</a>
                </div>
            </div>
        )

    }
}

Prompt.defaultProps = {
    title: "Title",
    content: "Main content goes here. Content should be of 2 lines to avoid the blur that Chrome creates!",
    actionText: "Action",
    action: () => { console.log('Hello, This is an action!!') }
}

Prompt.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    actionText: PropTypes.string,
    action: PropTypes.func
}