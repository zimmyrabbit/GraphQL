//file system들이 모여있는 모듈
import fs from 'fs'
import {resolve} from 'path'

//현재 경로가 basePath로 잡히게 된다
const basePath = resolve()

const filenames = {
    messages: resolve(basePath, 'src/db/messages.json'),
    user: resolve(basePath,'src/db/user.json')
}

export const readDB = target => {
    try{
        return JSON.parse(fs.readFileSync(filenames[target], 'utf-8'))
    }catch(err){
        console.error(err)
    }
}

export const writeDB = (target, data) => {
    try{
        return fs.writeFileSync(filenames(target),JSON.stringify(data))
    }catch(err){
        console.error(err)
    }
}