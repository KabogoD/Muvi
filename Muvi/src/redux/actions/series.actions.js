 import axios from "axios";

 export const fetchSeries = () => {
     return (dispatch) => {
         dispatch({
             type: "SERIES_FETCHING",
         });

         axios({
             method: "get",
             url: "https://api.themoviedb.org/3/tv/on_the_air?api_key=d9cf23cf23f14a29b69eccb99afeaeff"
         })
         .then((responseData) => {
             const {data} = responseData;
             dispatch({
                 type: "SERIES_FETCHING_DONE",
                 payload: data.results, 
             })
         })
         .catch((error) => {
            dispatch({
                 type: "SERIES_FETCHING_FAILED",
                payload: error.message,
             })
         })
     };
 };