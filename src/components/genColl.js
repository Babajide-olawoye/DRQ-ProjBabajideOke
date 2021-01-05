import React from 'react';
import { Genre } from './genre';


export class GenreColl extends React.Component {

    //allows html in JAVASCRIPT
    render() {

        //mapping my types array to myGen variables eg : myGen.title, myGen.image etc
        return this.props.genreList.map((myGen)=>{
            
            return <Genre myGen ={myGen} componentDidMount={this.props.componentDidMount}></Genre>
        })
        
    }

}


