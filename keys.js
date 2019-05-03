
console.log('this is loaded');

console.log(process.env.SPOTIFY_ID)


exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};



// exports.spotify = { 
//     id: "f5aa6705a3e74aaf9ab23e8003fda31c",
//     secret: "bd55104f9a8a4859ba58604d69d0a326"};
