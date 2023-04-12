const API_KEY="cb14da79-2ba4-4ea8-b328-637951fa108c";

export const getMatchInfo = () =>{
    const url=`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}`;
    return fetch(url).then((res) => res.json()).catch((err) =>console.log(err))

}

export const getMatchScore = () =>{
    const url=`https://api.cricapi.com/v1/cricScore?apikey=${API_KEY}`;
    return fetch(url).then((res) => res.json()).catch((err) => console.log(err))
}