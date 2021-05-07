import {makeAutoObservable} from "mobx";

export default class CommentStore {
    constructor() {
        this._comment = []
        makeAutoObservable(this)
    }

    setComment(comment) {
        this._comment = comment
    }

    get comments() {
        return this._comment
    }
}