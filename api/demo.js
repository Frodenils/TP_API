const json = require('../database/articles');

module.exports = (app) => {
    app.get("/hello", (req, res) => { // Send Text
        return res.send("Hello world");
    });

    app.get('/api/article', (req, res) => { // Send fake api user
        try {
            return res.status(200).send(json);
        } catch (error) {
            console.error(err);
            return res.status(500).send({message: "an error occured", status: 500});
        }
    });

    app.get("/api/article/:id", (req, res) => { // Get one user data
        try {
            if (!json.articles[req.params.id]) throw "User not found"; // Catch invalid id
            return res.status(200).send(json.articles[req.params.id]);
        } catch (err) {
            console.error(err);
            return res.status(404).send({message: err, status: 404});
        }

    });

    app.put('/api/fake/:id', (req, res) => { // Update fake user (name)
        try {
            let target = json.users[req.params.id]

            if (target && req.body.name) target.name = req.body.name;
            else throw "invalid user id"; // Handle invalid id

            res.status(200).send(target);
        } catch (err) {
            console.error(err);
            return res.status(500).send({message: err, status: 500});
        }
    });
}