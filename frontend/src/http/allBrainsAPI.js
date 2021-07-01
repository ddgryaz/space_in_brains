import {$host} from "./index";

export const getAllBrains = async () => {
    const {data} = await $host.get('api/allBrains')
    return data
}