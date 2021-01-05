
import React from 'react';
import { Anime } from './anime';


export class AnimeColl extends React.Component {

    //allows html in JAVASCRIPT
    render() {

        //return html
        return this.props.animeColl.map((myAnime)=>{
            return <Anime myAnime = {myAnime} ReloadData={this.props.ReloadData}></Anime>

        })
        
    }

}

