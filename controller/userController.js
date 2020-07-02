const db = require("../model");
const User = db.user;
const op = db.Sequelize.Op;
const sha256 = require("js-sha256");

exports.create = (request, response) => {
    if (!request.body.username) {
        response.status(400).send({
            message: "Username Tidak Boleh Kosong"
        });
        return;
    }
    const user = {
        username: request.body.username,
        nama: request.body.nama,
        password: sha256(request.body.password),
        status: request.body.status
    };
    User.create(user).then(data => {
        response.send(data);
    }).catch(error => {
        response.status(500).send({
            message: error.message || "Terjadi Error Saat Simpan Data"
        });
    });
};

exports.findAll = (request, response) => {
    const username = request.query.username;
    let condition = username ? {username: {[op.like]: `%${username}%`}} : null;
    User.findAll({where: condition}).then(data => {
        response.send(data);
    }).catch(error => {
        response.status(500).send({
            message: error.message || "Terjadi Error Saat Menampilkan Data"
        });
    });
};

exports.findOne = (request, response) => {
    const username = request.params.username;
    User.findByPk(username).then(data => {
        response.send(data);
    }).catch(error => {
        response.status(500).send({
            message: error.message || "Terjadi Error Saat Menampilkan Data Dengan Username " + username
        });
    });
};

exports.update = (request, response) => {
    const username = request.params.username;
    const user = {
        username: request.body.username,
        nama: request.body.nama,
        password: sha256(request.body.password),
        status: request.body.status
    };
    User.update(user, {
        where: {username: username}
    }).then(num => {
        if (num.length === 1) {
            response.send({
                message: "Berhasil Update Data"
            });
        } else {
            response.send({
                message: "Gagal Update Data Atau Data Tidak Ditemukan"
            });
        }
    }).catch(error => {
        response.status(500).send({
            message: error.message || "Terjadi Error Saat Update Data Dengan Username " + username
        });
    });
};

exports.delete = (request, response) => {
    const username = request.params.username;
    User.destroy({
        where: {username: username}
    }).then(num => {
        if (num.length === 1) {
            response.send({
                message: "Sukses Hapus Data"
            });
        } else {
            response.send({
                message: "Gagal Hapus Data Atau Data Tidak Ditemukan"
            });
        }
    }).catch(error => {
        response.status(500).send({
            message: error.message || "Gagal Hapus Data"
        });
    });
};

exports.deleteAll = (request, response) => {
    User.destroy({
        where: {},
        truncate: false
    }).then(nums => {
        response.send({
            message: `Sebanyak ${nums} Data Berhasil Dihapus`
        });
    }).catch(error => {
        response.status(500).send({
            message: error.message || "Terjadi Error Saat Hapus Semua Data"
        });
    });
};

exports.findAllAktif = (request, response) => {
    User.findAll({
        where: {status: 1}
    }).then(data => {
        response.send(data);
    }).catch(error => {
        response.status(500).send({
            message: error.message || "Terjadi Error Saat Menampilkan Data Yang Aktif"
        });
    });
};
