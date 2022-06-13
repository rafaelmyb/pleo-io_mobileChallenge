import React from "react"

import { Container, Input, Image, Button } from "./styles"

export default function SearchBar() {
  return (
    <Container>
      <Image source={require('../../assets/images/search.png')} />
      <Input placeholder="Search" />
      <Button>
        <Image source={require('../../assets/images/filter.png')}/>
      </Button>
    </Container>
  )
}