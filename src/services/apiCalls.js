import axios from "axios";

const base = "https://api.discogs.com";
const project = "reSearchDiscogs/1.1 +https://github.com/jwow1000/research-discogs"
const token = process.env.REACT_APP_API_TOKEN;
const headers = { headers: {'User-Agent': project } };
// fetch call for search, return json object
export async function fetchSearch(sTerm, pageNum) {
  try {
    const response = await axios.get(
      `${base}/database/search?q=${sTerm}&type=all&token=${token}&page=${pageNum}&per_page=10`,
      headers
    );
    // return the response data 
    console.log('fire the fetch', response.data);
    return response.data;

  } catch (error) {
    console.log(error);
  }

};

// fetch call to take user to first youtube link
export async function handleVideoLink( resource_url ) {
  const response = await axios.get(
    `${resource_url}&token=${token}`, {
    headers: {
      "User-Agent": project
    },
  });
  const point = response.data.videos;
  if (point) {
    window.open(point[0].uri, "_blank");
  } else {
    alert("no videos available");
  }
}