const UsersController = {
    getAll: (req, res) => {
        res.send('will get users');
    },
    get: (req, res) => {
        const id = req.params.id;
        res.send(`${id} user info`);
    },
    create: (req, res) => {
        res.send({});
    },
    update: (req, res) => {
        const id = req.params.id;
        res.send(`${id} user updated`);
    },
    patch: (req, res) => {
        const id = req.params.id;
        res.send(`${id} user patched`);
    },
    delete: (req, res) => {
        const id = req.params.id;
        res.send(`${id} user deleted`);
    }
}

module.exports = UsersController;