import React, {useState} from 'react';
import CheckBox from '../CheckBox';

import {
  Container,
  SearchContainer,
  Input,
  Image,
  Button,
  FilterContainer,
} from './styles';

export default function SearchBar({
  searchText,
  setSearchText,
  setFilterOption,
}: any) {
  const [showFilters, setShowFilters] = useState(false);
  const [checkMerchant, setCheckMerchant] = useState(false);

  function handleShowFilters() {
    setShowFilters(!showFilters);
  }

  function handleCheck() {
    setCheckMerchant(!checkMerchant);
    setFilterOption('merchant');
  }

  return (
    <Container>
      <SearchContainer>
        <Image source={require('../../assets/images/search.png')} />
        <Input
          placeholder="Search"
          value={searchText}
          onChangeText={t => setSearchText(t)}
        />
        <Button onPress={() => handleShowFilters()}>
          <Image source={require('../../assets/images/filter.png')} />
        </Button>
      </SearchContainer>

      {showFilters ? (
        <FilterContainer>
          <CheckBox
            label="Merchant"
            value={checkMerchant}
            onChange={handleCheck}
          />
        </FilterContainer>
      ) : null}
    </Container>
  );
}
