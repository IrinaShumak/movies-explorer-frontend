class MoviesApi {
  constructor(options) {
    this._options = options;
    this._url = options.baseUrl;
    this._headers = options.headers;    
  }

  _getResponseData (res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }
  
  takeMoviesInfo () {
    return fetch(`${this._url}`, {      
      headers: this._headers       
    })
    .then(this._getResponseData)
  }

}


export const apiMovies = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {    
    'Content-Type': 'application/json'
  }
});