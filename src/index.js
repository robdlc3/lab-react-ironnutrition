import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

const Search = ({ setSearch, search }) => {
  //   const [query, setQuery] = useState('');

  //   const handleSearch = (e) => {
  //     setQuery(e.target.value);
  //     filterFood(e.target.value);
  //     console.log("QUERY: ", query);
  //   };

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
