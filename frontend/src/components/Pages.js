import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {brain} = useContext(Context)
    const pageCount = Math.ceil(brain.totalCount / brain.limit)
    const pages = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <Pagination size="sm" className="mt-4">
            {pages.map(page =>
                <Pagination.Item
                    key = {page}
                    active={brain.page === page}
                    onClick={() => brain.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;