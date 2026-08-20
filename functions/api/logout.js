export async function onRequestGet(){

return new Response(
"logout",
{
headers:{
"Set-Cookie":
"cloudnav_auth=; Path=/; Max-Age=0"
}
}
);

}