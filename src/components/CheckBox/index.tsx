import React from 'react';
import {Checkbox, Container, LabelCheck} from './styles';

interface CheckBoxProps {
  label: string;
  onChange: () => void;
  value: boolean;
}

export default function CheckBox({label, onChange, value}: CheckBoxProps) {
  function handleChange() {
    if (onChange) {
      return onChange();
    }
  }

  return (
    <Container>
      <Checkbox onPress={handleChange} fill={value} />
      <LabelCheck>{label}</LabelCheck>
    </Container>
  );
}
