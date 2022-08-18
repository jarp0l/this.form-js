export default function handler(req, res) {
  if (req.query.preview === "1") {
    res.status(200).json({ path: "/form" });
    // res.writeHead(302, {
    //   'Location': '/form'
    // })
    // res.end()
  } else {
    res.status(400).json({ error_type: "INVALID_REQUEST" });
  }
}
