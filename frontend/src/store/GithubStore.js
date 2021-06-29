import {makeAutoObservable} from "mobx";

export default class GithubStore {
    constructor() {
        this._commit = []
        makeAutoObservable(this)
    }

    setCommit(commit) {
        this._commit = commit
    }

    get commits() {
        return this._commit
    }
}