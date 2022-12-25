import PropTypes from 'prop-types';
import { FilterBox, Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterBox>
      <Label>
        Find contacts by name
        <Input type="text" name="filter" value={value} onChange={onChange} />
      </Label>
    </FilterBox>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
