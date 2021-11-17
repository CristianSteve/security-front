import { useCallback, useState } from "react";
const CHECKBOX = "checkbox";

export const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState);

	const handleInputChange = ({ target }) => {
		if(target.type === CHECKBOX)
			setValues({
				...values,
				[target.name]: target.checked,
			});
		else
			setValues({
				...values,
				[target.name]: target.value,
			});
	};

	const handlePushState = useCallback((...newValues) =>{
		setValues(...newValues)
	},[])

	const resetInput = () =>{
		setValues(initialState)
	} 

	return [values, handleInputChange, handlePushState, resetInput];
};