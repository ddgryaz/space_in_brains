import {$authHost, $host} from "./index";

export const createBrain = async (brain) => {
    const {data} = await $authHost.post('api/brain', brain)
    return data
}

export const getBrains = async (page, limit = 5) => {
    const {data} = await $host.get('api/brain', {params: {page, limit}})
    return data
}

export const getOneBrain = async (id) => {
    const {data} = await $host.get('api/brain/' + id)
    return data
}