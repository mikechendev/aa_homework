export const fetchSearchGiphys = (searchTerm) =>
  $.ajax({
    method: 'GET',
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=2qF7z3EstePvz4O3FUZM32bQMFLvuXtT&limit=2`,
  });
