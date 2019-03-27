import React, {Component} from 'react';
import RequestUtil from "../api/RequestUtil";

class Platet extends Component {
    state = {
        planetsList: []

    };

    async componentDidMount() {

        const responce = await RequestUtil.getPlanets();
        const allPlanets = await responce.json();
        console.log(allPlanets);
        this.setState({planetsList: allPlanets})
    }


    render() {
        return (
            <div className="Platet">
                <h5>AllPlanets</h5>

            </div>
        );
    }
}

export default Platet;
