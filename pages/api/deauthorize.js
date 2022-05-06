
export function handler(req, res) {
  if (req.method === 'GET') {
    return res.send({status: 'success'})
  }
  else if (req.method === 'POST') {
    console.log(JSON.stringify(req.body, null, 2))
    return res.send({status: 'success'})
  }
}
