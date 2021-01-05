
import React from 'react';
import axios from 'axios';
import { AnimeColl } from './animeColl';

export class Read extends React.Component {

    constructor(){
        super();
        
        this.ReloadData = this.ReloadData.bind(this);
    }
    state = {
        animeColl: []
    };


    ReloadData(){
        axios.get('http://localhost:4000/animeCol')
            .then((response) => {
                this.setState({ animeColl: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    componentDidMount(){
        console.log("inside here p")
        axios.get('http://localhost:4000/animeCol')
            .then(
                (response) => {
                    console.log("inside here p")
                    //setting movie array to data retrieved
                    this.setState({ animeColl: response.data })
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
                
                <AnimeColl animeColl={this.state.animeColl} ReloadData={this.ReloadData}></AnimeColl>
                <a href="/create" >What you want too add your own favourite anime to the list.... Go ahead</a>

            </div>

        );
    }
}

