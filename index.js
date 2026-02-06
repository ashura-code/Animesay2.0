const getPhoto = async (name, anime) => {
  const url = `https://real-time-image-search.p.rapidapi.com/search?query=${name + ' ' + anime}&limit=1&size=any&color=any&type=any&time=any&usage_rights=any&file_type=any&aspect_ratio=any&safe_search=off&region=us`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'cc7365826amsh843b939188aa9ebp14e9dajsn4316a1950472',
      'x-rapidapi-host': 'real-time-image-search.p.rapidapi.com',
    },
  };

  try {
    console.log('came here');
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    document.getElementById('image_container').innerHTML =
      `<img src="${result.data[0].url}"/>`;
    console.log(result.data[0].url);
    // console.log(result);
  } catch (error) {
    console.error(error);
  }
};
const getAnimeQuote = async () => {
  let variable = await fetch('https://api.rei.my.id/animequotes/random')
    .then((val) => val.json())
    .then((res) => {
      document.getElementById('quote_string').innerHTML = res.english
        ? res.english
        : JSON.stringify(res);
      document.getElementById('character_string').innerHTML = res.character
        ? '<b>character: </b>' + res.character
        : JSON.stringify(res);
      document.getElementById('anime_string').innerHTML = res.anime
        ? res.anime
        : JSON.stringify(res);
      getPhoto(res.character, res.anime);
    });
};

getAnimeQuote();
