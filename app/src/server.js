import app from "./app";
import { connectWithDb, uri } from "./mongo";

const port = 3000;

app.get("/", (req, res) => {
    res.send("S Ahmed Naim");
});

app.listen(port, () => {
    connectWithDb();
    
    console.log(`Server is running on port ${port}`);
});