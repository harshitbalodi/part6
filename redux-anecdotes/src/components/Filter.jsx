import { useDispatch } from "react-redux"
import { FilterSetter } from "../reducers/FilterReducer";
const Filter = () => {
    const dispatch= useDispatch();
    const handleChange= (event) =>{
        console.log(event.target.value);
        dispatch(FilterSetter(event.target.value))
    }

  return (
    <div>
        filter 
        <input name="filter" placeholder="Search" onChange={handleChange} />
    </div>
  )
}

export default Filter