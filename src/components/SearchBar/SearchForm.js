import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit, children }) => (
    <form className='Form' onSubmit={onSubmit}>
      {children}
      </form>
  );
  
  export default SearchForm;
  
  SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };