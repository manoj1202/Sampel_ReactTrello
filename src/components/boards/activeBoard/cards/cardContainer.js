import React ,{Component} from 'react'
import BoardTitleInput from '../../boardCreation/BoardTitleInput';
import Card from "./card"
import {connect} from "react-redux"

class CardContainer extends Component{

    submit = values => {
        const { listId, submitNewCard} = this.props
        let cardName = `cardName_${listId}`
        submitNewCard(values[cardName], uniqueId("cardItem_"), listId)
    }

    renderCards = () => {
        const { activeBoardData, listId } = this.props
        return activeBoardData.listItems[listId].cards.map((card, i) =>{
            return(
                <Card 
                    key = {i}
                    title = {card.name}
                    listId= {card.listId}
                    cardId = {card.cardId}
                    isArchevied = {card.isArchived}
                />
            )
        })
    }

    render(){
        const { hadleSubmit, listId} = this.props
        return(
            <div>
                <form onSubmit = {hadleSubmit(this.submit)} >
                    <label>
                        <Field 
                            type = "text"
                            component = {BoardTitleInput}
                            name = {`cardname_${listId}`}
                        />
                    </label>
                </form>
                {this.renderCards()}
            </div>
        )
    }
}

validate = values => {
    const error = {}

    if(!values.cardName){
        errors.cardName = "Error!!"
    }
    return error
}

const afterSubmit = (result, dispatch) => {
    dispatch(reset("cardName"))
}

const mapStateToProps = ({activeBoardData}) => {
    activeBoardData
}


export default reduxForm({
    validate,
    form : "cardName",
    onSubmitSuccess : afterSubmit
})(connect(mapStateToProps, {submitNewCard})(CardContainer))