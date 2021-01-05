import React from 'react';
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export class Anime extends React.Component {

    constructor() {
        super();
        this.DeleteShow = this.DeleteShow.bind(this);
    }



    DeleteShow(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.myAnime._id);

        axios.delete("http://localhost:4000/animeCol/" + this.props.myAnime._id)
            .then(() => {
                console.log("deleted")
                this.props.ReloadData();

            })
            .catch();
    }

    //allows html in JAVASCRIPT
    render() {

        //return html
        return (
            <div>

                <table border ="1px solid black;" border-collapse ="separate;" border-spacing = "5em;">
                <tbody>
                    <tr>
                        <th><h2>{this.props.myAnime.title}</h2></th>
                        
                        <td rowSpan="3">
                            {this.props.myAnime.discript}
                            <br/>
                            <Button variant="danger" onClick={this.DeleteShow}>Delete</Button>
                            <a href={'../edit/'+this.props.myAnime._id}><Button>   Edit</Button></a>
                        </td>
                        
                    </tr>
                    <tr>
                        <td> {this.props.myAnime.year} </td>
                    </tr>
                    <tr>
                        <td><img src={this.props.myAnime.poster} width="400" height="400"></img></td>
                    </tr>
                </tbody>
                </table>

                <br />
            
            
            </div>
            
            


        );
    }
}

