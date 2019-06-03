// content of index.js
const http = require('http')
const port = 3000
var jsonexport = require('jsonexport');

const requestHandler = (request, response) => {

	var contacts = {
		"id":1,
		"referenceNumber":"CVEDP.GB.2019.1000001",
		"version":1,
		"lastUpdated":"2019-02-25T16:36:55.09Z",
		"lastUpdatedBy":
		{
			"displayName":"EU-Imports-InspectorTestUser1",
			"userId":"s_RcwY29955gH7DEKLupAA-FPA4U8xbltyAGMuJ3uto"
		}
	};

	jsonexport(contacts,function(err, csv){
	    if(err) return console.log(err);
	    response.end(csv);
	});

}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})