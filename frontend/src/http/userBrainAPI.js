import {$authHost} from "./index";

export const getOneUserBrains = async (id) => {
    const {data} = await $authHost.get('api/userBrain', {params: {id}})
    return data
}

export const createUserBrain = async (userId, brainId) => {
    const {data} = await $authHost.post('api/userBrain', {userId, brainId})
    return data
}