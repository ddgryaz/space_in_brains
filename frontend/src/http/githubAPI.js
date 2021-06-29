import {$github} from "./index";

export const getCommits = async () => {
    const {data} = await $github.get('commits?per_page=15') // Получаем 15 последних коммитов
    return data
}