import React, { useState } from "react";
import List from "../List/List";

export default function ListState({ list: propsList = [] }) {
	const [list, setList] = useState(propsList);

	const handleActivate = (index) => {
		setList((prevList) => prevList.map((item, idx) => (idx === index ? { ...item, active: !item.active } : item)));
	};

	const handleDelete = (index) => {
		setList((prevList) => prevList.filter((_, idx) => idx !== index));
	};

	return <List list={list} handleActivate={handleActivate} handleDelete={handleDelete} />;
}
