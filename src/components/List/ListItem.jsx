import React from "react";
import { renderItem } from "../../utils/render";
import Button from "../Button/Button";

export default function ListItem({ item, handleActivate, handleDelete, index }) {
	const baseStyle = { textAlign: "left" };
	const activeStyle = item.active ? { color: "green", fontWeight: "bold" } : {};
	const itemStyle = { ...baseStyle, ...activeStyle };

	return (
		<li style={itemStyle}>
			{renderItem(item)}
			<Button title={item.active ? "Deactivate" : "Activate"} handleClick={() => handleActivate(index)} />
			<Button title={"Delete"} handleClick={() => handleDelete(index)} />
		</li>
	);
}
