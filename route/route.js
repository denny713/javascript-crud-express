module.exports = (app) => {
    const user = require("../controller/userController");
    app.post("/", user.create);
    app.get("/", user.findAll);
    app.get("/aktif", user.findAllAktif);
    app.get("/:username", user.findOne);
    app.put("/:username", user.update);
    app.delete("/:username", user.delete);
    app.delete("/", user.deleteAll);
}
