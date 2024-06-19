import React, { useState } from "react";
import List from "../List/List";
import { handleActivate, handleDelete } from "../../utils/clickFns";

export default function ListState({ list: propsList = [] }) {
	const [list, setList] = useState(propsList);

	return <List list={list} handleActivate={(index) => handleActivate(index, setList)} handleDelete={(index) => handleDelete(index, setList)} />;
}
