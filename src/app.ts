import express from "express";

const PORT = 3000;

const app = express();


const mockedUsers = [{ id: 1, userName: "chandu0101", displayName: "ChandraSekhar Kode" },
{ id: 2, userName: "chandu01012", displayName: "ChandraSekhar Kode2" },
{ id: 3, userName: "chandu01013", displayName: "ChandraSekhar Kode3" }
];
app.get("/", (req, res) => {
    res.status(201).send({ msg: "Hello" })
});

app.get('/api/users', (req, resp) => {
    resp.send(mockedUsers)
})

app.get("/api/users/:id", (req, resp) => {
    console.log(req.params);
    const parsedId = parseInt(req.params["id"]);
    console.log(`parsed Id : ${parsedId}`);

    if (isNaN(parsedId)) {
        resp.status(400).send({ msg: "Bad User Request" })
    } else {
        const user = mockedUsers.find((user) => user.id === parsedId);
        if (user !== undefined) {
            resp.send(user);
        } else {
            resp.sendStatus(404);
        }
    }


});

app.get("/api/products", (req, resp) => {
    resp.send([{ id: 123, name: "cow milk", price: 85 }])
})
app.listen(PORT, () => {
    console.log(`App Running on ${PORT}`);

})