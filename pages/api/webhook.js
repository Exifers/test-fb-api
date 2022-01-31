
export default function handler(req, res) {
  // Your verify token. Should be a random string.
  let VERIFY_TOKEN = "cdqwuidheiwhdiewdiewhdiewhdiuew"
    
  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
  console.log(JSON.stringify(req.body, null, 2))
    
  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
  
    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.status(403);
      res.send()
    }
  }
  else if (body.object === 'page') {
      res.status(200)
      res.send('EVENT_RECEIVED')
  } else {
      res.status(404)
      res.send()
  }
}
