import React, { useState, useEffect } from "react";

const TodoList = () => {
	const [inputValue, setInputValue] = useState("");
	const [inputList, setInputList] = useState(["nana", ""]);

	function addItem(e) {
		if (e.keyCode == 13) {
			setInputValue(inputValue);
			const list = inputList.concat(inputValue);
			setInputList(list);
		}
	}

	return (
		<div className="text-center mt-5">
			<h1>Hello Moto!</h1>
			<input
				type="text"
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				onKeyUp={addItem}
			/>
			<div>{inputList}</div>
		</div>
	);
};

export default TodoList;
