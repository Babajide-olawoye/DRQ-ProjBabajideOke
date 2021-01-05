
import React from 'react';
import axios from 'axios';

export class Edit extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.onChangeDiscription = this.onChangeDiscription.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: '',
            Discript: ''
        }
    }

    componentDidMount() {
        console.log("load " + this.props.match.params.id);
        console.log("hello")

        axios.get('http://localhost:4000/animeCol/' + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    Title: response.data.title,
                    Year: response.data.year,
                    Poster: response.data.poster,
                    Discript: response.data.discript,
                    _id: response.data._id
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        })
    }

    onChangeDiscription(e) {
        this.setState({
            Discript: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + " "
            + this.state.Year + " " +
            this.state.Poster);

        const newFave = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            discript: this.state.Discript,
            _id: this.state._id
        };
        axios.put('http://localhost:4000/animeCol/' + this.state._id, newFave)
            .then(res => {
                console.log(res.data)

            })
            .catch();
    }

    


    
  

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Anime Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}
                           
                            ></input>
                    </div>
                    <div className="form-group">
                        <label>Add Anime Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>
                    <div className='form-group'>
                        <label>Anime Poster: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}>
                        </textarea>
                    </div>

                    <div className='form-group'>
                        <label>Anime Discription: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Discript}
                            onChange={this.onChangeDiscription}>
                        </textarea>
                    </div>


                    <div className="form-group">
                        <input type='submit'
                            value='Edit Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}