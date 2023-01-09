const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1178dec88fmsh02db1b75e1cecedp176526jsn1d8808d811b2",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game", options)
  .then((response) => response.json())
  .then((data) => {
    const list = data.d;

    list.map((item) => {
      const name = item.l;
      const poster = item.i.imageUrl;
      const movie = `<li><img src = "${poster}"><h2>${name}</h2></li>`;
      document.querySelector(".movies").innerHTML += movie;
    });
  })
  .catch((err) => console.error(err));
