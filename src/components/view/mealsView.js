import React, { Component } from 'react';
export class MealsView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { values } = this.props.MealsDetails;
        console.log("Meals :"+values);

        return values.MealsDetails.map((mealCard, index) => {
            return ( <div>
                <h3> Meals Details</h3>
                <div>
                    <label>Arrange meal from: {mealCard.arrangeFrom}</label><br/>
                    <label>Veg count: {mealCard.vegCount}</label><br/>
                    <label>Non Veg count: {mealCard.nonVegCount}</label><br/>
                </div>
            </div>)

    });
 }

}
export default MealsView;