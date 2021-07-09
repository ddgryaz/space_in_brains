import {$authHost} from "./index";

export const mostPopularBrains = async () => {
    const {data} = await $authHost.get('api/mostPopular')
    return data
}