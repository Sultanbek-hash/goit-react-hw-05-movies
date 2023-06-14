import { BsSearch } from 'react-icons/bs';
import SearchForm from './SearchForm';
import SearchInput from './SearchInput';
import PropTypes from 'prop-types';

export const SearchBar = ({onSubmit}) => (
    <div>
        <SearchForm onSubmit={onSubmit}>
            <SearchInput/>
            <button className='buttonIcon' type='submit' aria-label='search button'>
                <BsSearch />
            </button>
        </SearchForm>
    </div>
);
SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };