import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Pagination from '@material-ui/lab/Pagination';

const Pages = observer(() => {
    const {brain} = useContext(Context)
    const pageCount = Math.ceil(brain.totalCount / brain.limit)
    const handleChange = (event, value) => {
        brain.setPage(value);
    };
    return (
        <div style={{marginTop: '25px'}}>
            <Pagination style={{backgroundColor: "lightgray", width: "400px", borderRadius: "10px"}}
            count={pageCount}
            color="primary"
            page={brain.page}
            onChange={handleChange}
            />
        </div>
    );
});

export default Pages;