const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello from node+express");
});

app.listen(PORT, "0.0.0.0", ()=>{
    console.log(`server is running on http://0.0.0.0:${PORT}`);
})