import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, } from '../../redux/filters/slice';
import { selectNameFilter } from "../../redux/filters/selectors";

import s from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.searchWrapper}>
      <p className={s.title}>Find contact</p>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="name or phone"
      />
    </div>
  );
};

export default SearchBox;