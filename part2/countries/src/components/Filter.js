const Filter = ({ search, handleSearch }) => (
  <div>
    find countries <input type="text" value={search} onChange={handleSearch} />
  </div>
);

export default Filter;
