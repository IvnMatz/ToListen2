export async function GET() {

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
    console.log(response.status)
    if(response.ok){
      console.log("lol")
      const a = await response.json();
      return a
    }
  }
  const ab = await spot();
  console.log(ab);

  return Response.json({"token" : ab.access_token});
}