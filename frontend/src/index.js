import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import BrainStore from "./store/BrainStore";
import CommentStore from "./store/CommentStore";
import GithubStore from "./store/GithubStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        brain: new BrainStore(),
        comment: new CommentStore(),
        commit: new GithubStore()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
