import React, {useEffect, useState} from 'react';
import {TextField} from "@material-ui/core";
import {observer} from "mobx-react-lite";
import "../components/style/Search.scss"
import {getAllBrains} from "../http/allBrainsAPI";
import {BRAIN_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";

const Search = observer(() => {
    const history = useHistory()
    const [brains, setBrains] = useState([])

    useEffect(() => {
        getAllBrains().then(data => setBrains(data))
    }, [])
    // console.log(brains)

    const [value, setValue] = useState('')
    const search = brains.filter(brain => {
        return brain.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div>
        <TextField
            label="Поиск Брейнов"
            onChange={(e) => setValue(e.target.value)}
        />
        <ul className="autocomplite">
            {
                value
                ? search.map((brain) => {
                        return (
                            <li className="autocomplite__item" key={brain.id}
                                onClick={() => history.push(BRAIN_ROUTE + '/' + brain.id)}
                            >{brain.name}</li>
                        )
                    })
                : null
            }
        </ul>
        </div>
    );
});

export default Search;