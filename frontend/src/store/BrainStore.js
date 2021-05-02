import {makeAutoObservable} from "mobx";

export default class BrainStore {
    constructor() {
        this._brains = [
            {id: 1, name: 'JavaScript', img:'https://habrastorage.org/r/w120/webt/59/cc/76/59cc7600c78a2239379574.jpeg'},
            {id: 2, name: 'JavaScript1', img:'https://habrastorage.org/r/w120/webt/59/cc/76/59cc7600c78a2239379574.jpeg'},
            {id: 3, name: 'JavaScript2', img:'https://habrastorage.org/r/w120/webt/59/cc/76/59cc7600c78a2239379574.jpeg'},
            {id: 4, name: 'JavaScript3', img:'https://habrastorage.org/r/w120/webt/59/cc/76/59cc7600c78a2239379574.jpeg'},
            {id: 5, name: 'JavaScript4', img:'https://habrastorage.org/r/w120/webt/59/cc/76/59cc7600c78a2239379574.jpeg'},
        ]
        makeAutoObservable(this)
    }

    setBrains(brains) {
        this._brains = brains
    }

    get brains() {
        return this._brains
    }
}