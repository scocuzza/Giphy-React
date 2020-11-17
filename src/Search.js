import './App.css';
import react, { Component} from 'react'
import axios from 'axios'

class Search extends Component {
   constructor(props) {
       super(props)
       this.state = {
           giphyUrl: ''
       }
   }
    
    render() {
        return (
            <>
                <input type="text" onChange={this.props.onChange} placeholder="Search for a giphy!"></input>
                <button onClick={this.getGiphy}>Enter</button>
                <div>
                    <img src={this.state.giphyUrl}></img>
                </div>
            </>
        )
    }
    getGiphy = () => {
        const apikey = '10xqoqDRPJ0A1loNX9D0RFKCbLmhD0Pm'
        let userInput = this.props.userInput
        let response = axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${userInput}`, 
        {headers: {
            'Content-Type': 'application/json'
        }})
            .then((response) => {
                console.log('Giphy', response);
                console.log(response.data.data[0].images.downsized.url);
                this.setState({
                    giphyUrl: response.data.data[0].images.downsized.url
                })
            })
            .catch((error) => {
                console.log('API ERROR:', error);
            });
        console.log(response);
    }
}

export default Search;
