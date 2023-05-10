import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

const Search = ({ setSearch, search }) => {

    return (
        <div>
            <label htmlFor="search">Search</label>
            <Input
                type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            ></Input>
        </div>
    );
};

export default Search;