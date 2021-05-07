import {$authHost} from "./index";

export const getAllComment = async () => {
    const {data} = await $authHost.get('api/comment')
    return data
}

export const createComment = async (userId, comment) => {
    const {data} = await $authHost.post('api/comment', {userId, comment})
    return data
}