import Axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
console.log( process.env.REACT_APP_RAPID_KEY);
const options = {
//   method: 'GET',
//   url: BASE_URL,
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
    // part: 'id,snippet',
    // type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': "99fba23b85msh1e6c4fe1b5e63c2p19e0bejsnae23f08c0453",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// Axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


export const FetchFromAPI = async (url) => {
    console.log(`${BASE_URL}/${url}`);
    const {data} = await Axios.get(`${BASE_URL}/${url}`, options)
    return data

}