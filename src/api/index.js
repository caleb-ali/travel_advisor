import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'

const options = {
  params: {
    latitude: '12.91285',
    longitude: '100.87808',
    
  },
  headers: {
    'X-RapidAPI-Key': '6a5bf03a16msh2ef61448bf7cd3ap111a1cjsnef9dd1d680e9',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};


export const getPlacesData = async () => {
    try {
        const {data: {data}} = await axios.get(URL, options);
        return response;
    } catch (error) {
        console.log(error)
    }
}