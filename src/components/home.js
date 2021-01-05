
import React from 'react';

export class Home extends React.Component {

    render() {
        return (
            <div>
                <div>
                    
                    <img src="https://image.myanimelist.net/ui/uf6p6rEk2dlZoh8DIyYQTScPXcYWVkorZzR5QFff8Dz3qY2oXvvW5x3Hrb-W5JxGHRwmguU8B08LZEEOtbv2G3WKIJ9sNYmr_hbsa72u_rSA04XHa2uGxv_npt3alTiqCO1wZi7NrJbnS1vOPJyjoZkSTvU9Syn4esm53zmf6UE"></img>
                </div>
                <div style={{ float: 'left' }}>
                    <a href="/genre">
                    <h4>CLICK FOR HERE TO VIEW LIST OF ANIME GENRE</h4>
                        <img height= '600' width ='600' src="https://cdn.shopify.com/s/files/1/0012/7208/6587/articles/Top_10_6_1200x1200.png?v=1559546754"></img>
                    </a>

                </div>

                <div style={{ float: 'right' }}>
                    <a href="/read">
                        <h4>CLICK IMAGE FOR A LIST OF MY FAVOURITE ANIME</h4>
                        <img height= '600' width ='600' src="https://pm1.narvii.com/5757/eee6c392a5fcbaf182912e2cee9ac43ef2a6a340_hq.jpg"></img>
                    </a>
                </div>

            </div>


        )
    }
}

