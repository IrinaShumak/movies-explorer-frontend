class MainApi {
  constructor(options) {
    this._options = options;
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._token = options.headers.authorization;
  }

  _getResponseData (res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  _getToken = () => localStorage.getItem('jwt');  

  getInitialCards() {
    return fetch(`${this._url}/movies`, {      
      headers: {
        authorization: `Bearer ${this._getToken()}`
      }
    })
    .then(this._getResponseData);
  }

  updateProfileInfo ({name, email}) { 
    return fetch(`${this._url}/users/me`, {      
      method: 'PATCH',
      headers: {
        ...this._headers,
        authorization: `Bearer ${this._getToken()}`
      },
      body: JSON.stringify({ name, email })
    })
    .then(this._getResponseData)
  }

  takeUserInfo () {
    return fetch(`${this._url}/users/me`, {      
      headers: {
        authorization: `Bearer ${this._getToken()}`
      } 
    })
    .then(this._getResponseData)
  }

  likePhoto (card) {
    return fetch(`${this._url}/movies`, {      
      method: 'POST',
      headers:{
        ...this._headers,
        authorization: `Bearer ${this._getToken()}`
      },
      
      body: JSON.stringify({        
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: `https://api.nomoreparties.co${card.image.url}`,
        trailer: card.trailerLink,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
        thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
        movieId: card.id,        
      })
    })
    .then(this._getResponseData)
  }

  deleteCard(id) {
    return fetch(`${this._url}/movies/${id}`, {      
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${this._getToken()}`       
      }
    })
    .then(this._getResponseData)
  }
}


export const api = new MainApi({
  baseUrl: 'https://api.movies.irinashumak.nomoredomains.icu',
  headers: {    
    'Content-Type': 'application/json'
  }
});