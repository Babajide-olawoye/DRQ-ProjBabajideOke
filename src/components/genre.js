import React from 'react';

export class Genre extends React.Component {


    //allows html in JAVASCRIPT
    render() {

        //return html
        return (
            <div>


                <table border="1px solid black;" border-collapse="separate;" border-spacing="5em;">
                    <tbody>
                        <tr>
                            <th><h2>{this.props.myGen.title}</h2></th>

                            <td rowSpan="2">
                                {this.props.myGen.discript}
                                <br />
                            </td>

                        </tr>

                        <tr>
                            <td><img src={this.props.myGen.image} width="400" height="400"></img></td>
                        </tr>

                    </tbody>
                </table>
                <br />
            </div>

        );
    }
}

