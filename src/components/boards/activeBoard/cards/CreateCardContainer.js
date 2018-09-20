import React,{Component} from "react"
import BoardTitleInput from "../../boardCreation/BoardTitleInput";
import Card from "./card"
import {submitNewCard} from "../../../../actions/index"
import { Field, reduxForm, reset } from 'redux-form'
import uniqueId from 'lodash/uniqueId'
import {connect} from "react-redux"

class CreateCardContainer extends Component{

    submit = values => {
        const { listId } = this.props;
        let cardName = `cardName_${listId}`
        this.props.submitNewCard(values[cardName], uniqueId('cardItem_'), listId)
    }

    renderCards = () => {
        const { activeBoardData, listId } = this.props;
        return activeBoardData.listItems[listId].cards.map((card, i) => {
            return (
                <Card
                    key={i}
                    title={card.name}
                    listId={card.listId}
                />
            )
        })
    }

    render(){
        const {handleSubmit, listId} = this.props
        return(
            <div>
                <form onSubmit = {handleSubmit(this.submit)} >
                    <label>
                        <Field 
                            type = "text"
                            component = {BoardTitleInput}
                            name = {`cardName_${listId}`}
                        />
                    </label>
                </form>
                {this.renderCards()}
            </div>
        )
    }
}

const validate =(values, props) =>{
    const error = {}
    const {listId} = props
    let cardName = `cardName_${listId}`

    if(!values[cardName]){
        errors[cardName] = "Enter Name"
    }

    return error
}

const afterSubmit = (result, dispatch) =>{
    dispatch(reset("card"));
}

const mapStateToProps = ({activeBoardData}) =>{
    return {
        activeBoardData
    }
}

export default reduxForm({
    validate,
    form : "card",
    onSubmitSuccess: afterSubmit
})(connect (mapStateToProps, {submitNewCard})(CreateCardContainer))