import React, { Component } from 'react'
import styled from "styled-components"
import CreateBoardContainer from "./boardCreation/CreateBoardContainer"
import ShowAllBoards from "./ShowAllBoards"
import {connect} from "react-redux"

const Wrapper = styled.div`
  display: flex;
  padding: 60px 35px;
  flex-wrap: wrap;
  `

class BoardContainer extends Component {

   renderAllBoards = () => {
    const { boardsCollections } = this.props;
    return boardsCollections.map(board => {
      return (
        <ShowAllBoards
          id={board.id}
          key={board.id}
          title={board.title}
        />
      )
    })
   }

  render() {
    return (
      <Wrapper>
        <CreateBoardContainer />
        {this.renderAllBoards()}
      </Wrapper>
    )
  }
}

function mapStateToProps({ boardsCollections }) {
  return {
    boardsCollections
  }
}

export default connect(mapStateToProps)(BoardContainer)
