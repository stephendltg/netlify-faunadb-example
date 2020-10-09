/* Import faunaDB sdk */
let fetch = require("node-fetch")

exports.handler = (event, context) => {
  
  console.log(event.path, context)
  
  return fetch("https://itunes.apple.com/search?term=queen")
	.then(res => res.json())
	.then( data =>{
	  return {
	    statusCode: 200,
	    body: JSON.stringify(data)
	  }
	})
	.catch( e => {
	  return {
        statusCode: 400,
        body: JSON.stringify(e)
      }
	})
  
}



function printTracks(data){
	// Extract track names
	let tracks = data.results.map(item => item.trackName)
		
	// Filter out duplicates
	tracks = tracks.filter((v, i, a) => a.indexOf(v) === i)
	
	// Sort alphabetically
	tracks = tracks.sort()
	
	tracks.forEach(t => console.log("-> " + t))
}
