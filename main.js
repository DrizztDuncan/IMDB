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
      console.log(item);
    });
  })
  .catch((err) => console.error(err));
