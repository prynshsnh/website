require("dotenv").config();

const EleventyFetch = require("@11ty/eleventy-fetch");
const cheerio = require("cheerio");

const fetchLetterboxd = async (duration) => {
  try {
    const url = `https://letterboxd.com/priyanshusinha/rss/`;
    const response = await EleventyFetch(url, { duration, type: "text" });
    return response;
  } catch (e) {
    console.error("Error fetching data from Letterboxd", e);
    return undefined;
  }
};

const fetchRecentMovies = async () => {
  const response = await fetchLetterboxd("1d");

  if (!response) {
    return [];
  }

  const $ = cheerio.load(response, { xml: true });

  const recentMovies = [];

  $("channel")
    .children("item")
    .slice(0, 8)
    .each((_, element) => {
      const title = $(element).children("letterboxd\\:filmTitle").text();

      if (!title) {
        return false;
      }

      const img = $(element).children("description").text();
      const imgSrc = $(img).children("img").attr("src");
      const url = $(element).children("link").text();
      const rating = $(element).children("letterboxd\\:memberRating").text();

      recentMovies.push({
        imgSrc,
        rating,
        title,
        url,
      });
    });

  return recentMovies;
};

module.exports = fetchRecentMovies;