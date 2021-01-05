
import React from 'react';
import axios from 'axios';
import { GenreColl } from './genColl';

export class ReadGenre extends React.Component {

    constructor(){
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    state = {
        genColl: []
    };

    componentDidMount(){
        console.log("inside here p")
        axios.get('http://localhost:4000/gen')
            .then(
                (response) => {
                    console.log("inside here p")
                    //setting genColl array to data retrieved from server
                    this.setState({ genColl: response.data.types })
                })
            .catch(
                (error) => { console.log(error) }
            );
    }

    
    //allows html in JAVASCRIPT
    render() {

        //return html
        return (
            <div>
                
                <GenreColl genreList={this.state.genColl} componentDidMount={this.componentDidMount}></GenreColl>

            </div>

        );
    }
}

