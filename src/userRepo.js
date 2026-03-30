import users from '../database/usuarios.json' with {type:'json'}
import fs from 'fs'

const userRepo = {
        readAll(){
        return users
    },
    readVoluntarios(){
        return users.filter(user => user.tipo === 'voluntario');
    },
    readONGs(){
        return users.filter(user => user.tipo === 'ong');
    }
}

export default userRepo