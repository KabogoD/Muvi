import axios from "axios";

export const UpdateId = (id) => (dispatch) => {
  dispatch({
    type: "GET MOVIE DETAIL",
  });

  axios({
    method: "get",
    url: {
      uri: `https://api.themoviedb.org/3/movie/${id}?api_key=d9cf23cf23f14a29b69eccb99afeaeff`,
    },
  }).then((responseData) => {
    const { data } = responseData;
    dispatch({
      type: "GET MOVIE DETAIL DONE",
      paload: data,
    })
  })
  .catch((error) => {
    dispatch({
        type: "GET MOVIE DETAIL FAILED",
        payload: error.message,
    })
  })
};
