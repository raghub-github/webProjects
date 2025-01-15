import express from 'express';
import { z } from "zod";
import path from 'path';

const app = express();
const portSchema = z.coerce.number().min(1).max(65535).default(3000);
const PORT = portSchema.parse(process.env.PORT);

// app.get('/', (req, res) => {
//     res.send("<h1>Welcome</h1>");
// });

// app.get('/about', (req, res) => {
//     res.send("<h1>About us</h1>");
// });

// app.get('/profile/:username', (req, res) => {
//     res.send(`<h1>My username is ${req.params.username}</h1>`);
// });

app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(express.urlencoded({ extended: true }));
// app.get('/contact', (req, res) => {
//     console.log(req.query);
//     res.redirect("/");
// });

app.post('/contact', (req, res) => {
    console.log(req.body);
    res.send("ok");
});

app.use((req, res) => {
    return res.status(404).send("<h1>Page not found</>");
})

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});