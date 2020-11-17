import axios from 'axios';

// INDEX, SHOW, CREATE, UPDATE, DESTROY
const apikey = '10xqoqDRPJ0A1loNX9D0RFKCbLmhD0Pm'
    const getGiphy = () => {
        return axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${this.state.userinput}`);
    };

export { getAllArticles }; 