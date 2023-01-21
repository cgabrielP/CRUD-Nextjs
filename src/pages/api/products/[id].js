export default function handler(req, res) {
    console.log(req.query);
    console.log(req.method);
    res.status(200).json('Getting product number '+ req.query.id)
  }