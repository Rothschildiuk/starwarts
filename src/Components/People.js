import React, {Component} from 'react';
import RequestUtil from "../api/RequestUtil";

class People extends Component {

    state = {
        peoplesList: []

    };

    async componentDidMount() {

        const responce = await RequestUtil.getPeoples();
        const allPeoples = await responce.json();
        console.log(allPeoples);
        this.setState({peoplesList: allPeoples})
    }

    render() {
        return (
            <div className="People">
                <h5>AllPeoples</h5>

            </div>
        );
    }
}

export default People;
