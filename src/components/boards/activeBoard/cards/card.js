import React, { Component } from "react"
import styled from "styled-components"
import {connect} from "react-redux"

const CardWrapper = styled.div`
    margin: 10px 0;
    padding: 14px 7px;
    background: rgb(241, 241, 241);
    border-radius: 4.5px;
    cursor: grab;
    animation: ${fadeIn} 300ms linear;
    display: flex;
    justify-content: space-around;
`

const CardTitle = styled.h3`
    font-weight: bold;
    font-size: 19px;
    margin: 0;
`
class Card extends Component {
    
    render(){
        const {title,archiveCard, cardId,listId,isArchived} = this.props
       
        const cardStyles = {
            opacity: isDragging || isArchived ? 0.35 : 1,
            boxShadow: "0 6px 6px rgba(0,0,0,0.16), 0 6px 6px rgba(0,0,0,0.23)",
            textDecoration: isArchived ? "line-through" : "none",
            backgroundColor: isArchived ? "#DECAFF" : "#caffde",
        };

        return(
            <div>
                <CardWrapper >
                    <CardTitle>{title}</CardTitle>
                    <ArchiveTask onClick={() => this.togglePost(cardId, listId)}>✓</ArchiveTask>
                </CardWrapper> 
            </div>
        )
    }
}

const mapStateToProps = ({activeBoardData}) =>{
    return{
        activeBoardData
    }
}

export default connect(mapStateToProps, {archiveCard})(Card)