import {makeAutoObservable} from "mobx";

export default class BrainStore {
    constructor() {
        this._brains = []
        makeAutoObservable(this)
    }

    setBrains(brains) {
        this._brains = brains
    }

    get brains() {
        return this._brains
    }
}