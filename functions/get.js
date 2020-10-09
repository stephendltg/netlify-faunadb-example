/* Import faunaDB sdk */
let fetch = require("node-fetch")

exports.handler = (event, context) => {
  
  console.log(event.path)
  
  return fetch("http://94.76.218.170:8080/wp-json", {
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + Buffer.from('epyo:epyois100%MAGIC', "utf8").toString("base64")
    }
  })
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
