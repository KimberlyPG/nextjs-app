import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-email",
    "streaming",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read",
].join(","); //all the string will be one string separated by ,

const params = {
    scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = "https://accounts.spotify.com/authorize?" +queryParamString.toString();

const spotifyApi = new SpotifyWebApi({
    clientId: '545f17e5de8249298d3ebc1f720dd5f0',
    clientSecret: '9e36243524f74c2bbbe70f1d97e53ccc',
})

export default spotifyApi;

export { LOGIN_URL };