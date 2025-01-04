require("dotenv").config();

const EleventyFetch = require("@11ty/eleventy-fetch");

const lastFmApiKey = process.env.LAST_FM_API_KEY;

const baseUrl = "http://ws.audioscrobbler.com";
const username = "priyanshusinha7";

const fetchLastFm = async (method, duration, extraArgs) => {
  try {
    const path = `/2.0/?method=${method}&user=${username}&api_key=${lastFmApiKey}&format=json`;
    let url = `${baseUrl}${path}`;

    if (extraArgs) {
      url = `${url}&${extraArgs}`;
    }

    const response = await EleventyFetch(url, { duration, type: "json" });

    return response;
  } catch (e) {
    console.error(`Error fetching last.fm data for method=${method}`, e);
    return undefined;
  }
};

const fetchTopTracks = async (period = "7day") => {
  const response = await fetchLastFm(
    "user.gettoptracks",
    "10s",
    `period=${period}`,
  );

  if (!response) {
    return [];
  }

  const tracks = response.toptracks.track.slice(0, 6);

  const topTracks = tracks.map((track) => {
    const extraLargeImage = track.image.find(
      (img) => img.size === "extralarge",
    );
    const imgUrl = extraLargeImage["#text"];
    return {
      artist: track.artist.name,
      track: track.name,
      url: track.url,
      imgUrl,
    };
  });

  return topTracks;
};

const fetchRecentTracks = async () => {
  const response = await fetchLastFm("user.getrecenttracks", "5m");

  if (!response) {
    return [];
  }

  const tracks = response.recenttracks.track.slice(0, 6);

  const recentTracks = tracks.map((track) => {
    const extraLargeImage = track.image.find(
        (img) => img.size === "extralarge",
      );
      const imageUrl = extraLargeImage ? extraLargeImage["#text"] : "";
    return {
      artist: track.artist["#text"],
      track: track.name,
      url: track.url,
      imageUrl,
    };
  });

  return recentTracks;
};

module.exports = async function () {
  const recentTracks = await fetchRecentTracks();
  const topTracks = await fetchTopTracks();

  return {
    recentTracks,
    topTracks,
  };
};