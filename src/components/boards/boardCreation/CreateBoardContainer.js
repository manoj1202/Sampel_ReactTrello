import React, { Component } from 'react'
import CreateBoard from './CreateBoard'
import ActiveCreateBoard from './ActiveCreateBoard'
import {connect}  from "react-redux"



class CreateBoardContainer extends Component {
  
  render() {
      console.log(this.props)
      const {newBoard} = this.props;
      console.log(newBoard)
    
      return (
      <div>
        {newBoard.isBoardOpen ? <ActiveCreateBoard /> : <CreateBoard />}
      </div>
    )
  } 
}

const mapStateToProps = ({newBoard}) => {
  return{
    newBoard
  }
}
export default connect(mapStateToProps)(CreateBoardContainer)
