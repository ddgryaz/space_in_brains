import {$authHost, $host} from "./index";

export const createBrain = async (brain) => {
    const {data} = await $authHost.post('api/brain', brain)
    return data
}

export const getBrains = async () => {
    const {data} = await $host.get('api/brain')
    return data
}

export const getOneBrain = async (id) => {
    const {data} = await $host.get('api/brain/' + id)
    return data
}