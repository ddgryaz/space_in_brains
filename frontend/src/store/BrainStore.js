import {makeAutoObservable} from "mobx";

export default class BrainStore {
    constructor() {
        this._brains = []
        this._page = 1
        this._totalCount = 0
        this._limit = 3

        makeAutoObservable(this)
    }

    setBrains(brains) {
        this._brains = brains
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get brains() {
        return this._brains
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}