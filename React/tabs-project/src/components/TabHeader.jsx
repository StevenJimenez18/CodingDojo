import React, {useState} from 'react'

const TabHeader = props => {

    const selectHandler = e => {
        props.isClicked(props.tabItem.index)
        
    }

    const selectedstyle = {
        backgroundColor: "mediumseagreen"
    }

    const nonselectedStyle = {
        backgroundColor: "lightgray"
    }

    return (
        <div>
            <button onClick= { selectHandler } style = { props.tabItem.selected ? selectedstyle : nonselectedStyle}>{props.tabItem.title}</button>
        </div>
    );
}

export default TabHeader
