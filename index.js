const { userDatabase } = require('./database/')
const { User, Statistic } = require("./models")
const createModelFromObject = require("./lib/create-model-from-object")
const getRoles = require("./lib/get-roles")

// const uygar = User.create({ name: "uygar", surname: "aydin", email: "uygar.aydin@erdogan.edu.tr", phone: "23213", department: "Bilgi İşlem Daire Başkanlığı", title: "Öğr. Gör.", identificationNumber: "11", institutionalNumber: "22" })
// const saygin = User.create({ name: "saygin", surname: "aydin", email: "uygar.aydin@erdogan.edu.tr", phone: "23213", department: "Bilgi İşlem Daire Başkanlığı", title: "Öğr. Gör.", identificationNumber: "11", institutionalNumber: "22" })

// const user = userDatabase.findUser("uygar")

const uygar = createModelFromObject({ name: "uygar", surname: "aydin", email: "uygar.aydin@erdogan.edu.tr", phone: "23213", department: "Bilgi İşlem Daire Başkanlığı", title: "Öğr. Gör.", identificationNumber: "11", institutionalNumber: "22", role: getRoles().TRANSLATOR })

console.log(uygar)