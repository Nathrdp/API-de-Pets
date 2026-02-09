import { pets } from "./pets.js";

export const validarPet = (req, res, next) => {
    try {
        const {nome, idade, raça, tutor} = req.body;

        if(!nome) {
            return res.status(400).send({
                ok: false,
                message: "O campo nome é obrigatório!"
            });
        }
        if(!raça) {
            return res.status(400).send({
                ok: false,
                message: "O campo raça é obrigatório!"
            });
        }
        if(!idade) {
            return res.status(400).send({
                ok: false,
                message: "O campo idade é obrigatório!"
            });
        }
        if(!tutor) {
            return res.status(400).send({
                ok: false,
                message: "O campo tutor é obrigatório!"
            });
        }

        next();
    } catch(error) {
        return res.status(500).send({
            ok: false,
            message: error.toString()
        });
    }
}
