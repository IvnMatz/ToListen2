export async function GET(request) {

  const {searchParams} = new URL(request.url);
  const type = searchParams.get('type');
  const query = searchParams.get('q');
  console.log(query)

  async function spot(){
    const response = await fetch("https://accounts.spotify.com/api/token", 
      {
        method: "POST",
        headers: {"Content-Type" : "application/x-www-form-urlencoded" },
        body:new URLSearchParams({
          grant_type : "client_credentials",
          client_id : process.env.CLIENTID,
          client_secret: process.env.CLIENT_SECRET
        })
      }
    );
    
    if(response.ok){
      const a = await response.json();
      return a
    }
  }
  const ab = await spot();
  const token = ab.access_token;
  let nQ = "";

  for(let c of query){
    if(c != " "){
      nQ += c;
    }
    else{
      nQ += "+";
    }
  }

  const Nurl = "https://api.spotify.com/v1/search?q=" + nQ +"&type=" + type + "&limit=3&offset=0"
  console.log(Nurl)

  async function searchSpot(){
    const response = await fetch(Nurl,
      {
        method : "GET",
        headers: {Authorization : "Bearer " + token}
      }
    );
    console.log(response.status)
    if(response.ok){
      const a = await response.json();
      return a
    }
  }

  const respq = await searchSpot();
  const items = respq.albums.items;
  console.log(respq.albums.items)

  return Response.json({"token" : items});
}