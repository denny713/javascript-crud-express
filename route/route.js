module.exports = app => {
    const user = require("../controller/userController");
    let router = require("express").Router();
    router.post("/", user.create);
    router.get("/", user.findAll);
    router.get("/aktif", user.findAllAktif);
    router.get("/:username", user.findOne);
    router.put("/:username", user.update);
    router.delete("/:username", user.delete);
    router.delete("/", user.deleteAll);
    app.use('/api/user', router);
}
