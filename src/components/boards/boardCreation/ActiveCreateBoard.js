import React, { Component } from 'react';
import styled from 'styled-components';
import { Wrapper } from './CreateBoard';
import { cancleCreatingBoard } from '../../../actions/index';
import submitNewBoard from '../../../actions/SubmitNewBoard';
import {connect} from "react-redux"
import BoardTitleForm from "./BoardTitleForm"

const Title = styled.h3`
    color: white;
    text-shadow: 0px 0px 3px #000;
`

const TopWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-bottom: solid 1px rgb(240,240,240);
`

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`

const BoardNamingTitle = styled.h5`
    color: white;   
    text-shadow: 0px 0px 3px #000;
    font-weight: 400;
`

class ActiveCreateBoard extends Component {
    submit = (values) => {
        this.props.submitNewBoard(values.boardTitle);
        values.boardTitle = "";
    }

    render(){
        const { cancleCreatingBoard } = this.props
        return(
            <Wrapper>
                <TopWrapper>
                    <Title>Creating a board</Title>
                    <button onClick = {() => cancleCreatingBoard()} >X</button>
                </TopWrapper>

                <BodyWrapper>
                    <BoardNamingTitle>What we call the board</BoardNamingTitle>
                    <BoardTitleForm 
                        onSubmit = {this.submit}
                        cancleAction = {cancleCreatingBoard}
                    />
                </BodyWrapper>
            </Wrapper>
        )
    }
}


export default connect(null, {cancleCreatingBoard, submitNewBoard})(ActiveCreateBoard)