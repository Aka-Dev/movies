import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import YouTube from 'react-youtube';

class Preview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.params.id,
            movie: {},
            video: [],
            genres: [],
            url: 'https://api.themoviedb.org/3/',
            key: '47e27219ee335b95988455c455c809f8',
            youtubeUrl: 'https://www.youtube.com/watch?v=',
            opts: {
                height: '390',
                width: '640',
                playerVars: { // https://developers.google.com/youtube/player_parameters
                    autoplay: 0
                }
            }
        };
    }


    componentWillMount() {
        //Get movie details
        axios.get(this.state.url + 'movie/' + this.state.id + '?api_key=' + this.state.key + '&language=en-US')
            .then(res => {
                const movie = res.data;
                this.setState({
                    movie,
                    genres: movie.genres
                });
            });
        //Get movie video
        axios.get(this.state.url + 'movie/' + this.state.id + '/videos?api_key=' + this.state.key + '&language=en-US')
            .then(res => {
                const video = res.data.results.map(obj => obj);
                this.setState({ video: video[0] });
            });
    }

    render() {
        return (
            <div className="container">
                <div className="navigateBack">
                    <Link to="/">« Back to the index</Link>
                </div>
                <div className="row preview">
                    <div className="col-md-12 col-lg-12">
                        <Link to={`${this.state.movie.homepage}`} target="_blank"><h1>{this.state.movie.title}</h1> </Link>
                    </div>
                    <div className="col-md-3 col-lg-3">
                        <img src={"http://image.tmdb.org/t/p/w185/" + this.state.movie.poster_path} alt={this.state.movie.title} title={this.state.movie.title} />
                    </div>
                    <div className="col-md-9 col-lg-9 col-desc">
                        <h2>{this.state.movie.tagline}</h2>
                        <h3>Vote average: {this.state.movie.vote_average}</h3>
                        <h3>Vote count: {this.state.movie.vote_count}</h3>
                        <h4>Genres:</h4>
                        <ul>
                            {this.state.genres.map(genre =>
                                <li key={genre.id}>{genre.name}</li>
                            )}
                        </ul>
                        <p>{this.state.movie.overview}</p>
                    </div>
                    <div className="col-md-8 col-lg-8 col-centered">
                        <YouTube
                            videoId={this.state.video.key}
                            opts={this.state.opts}
                        />
                    </div>
                </div>

            </div>
        );
    }
}

export default Preview;