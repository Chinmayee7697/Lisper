//Importing express and axios
import express from "express";
import axios from "axios";

// creating an express app and setting the port number 
const app = express();

// public folder for static files
app.use(express.static("public"));

//use of axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get("/", async (req, res) => {

  try {
    //using app brewery secrets API
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
  
});

// use port 3000 unless there exists a preconfigured port
var port = process.env.PORT || 3000;

// Listening on our predefined port and starting the server.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
