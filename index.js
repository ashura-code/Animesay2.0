const getAnimeQuote = async () => {
  let variable = await fetch('https://api.rei.my.id/animequotes/random')
    .then((val) => val.json())
    .then((res) => console.log(res));
};

