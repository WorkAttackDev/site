import works from "../data/works";

export const findWorkByName = (wName = "") => {
	if (wName.trim() === "") return null;
	const searchedWork = works.find(
		_w => _w.name.toLocaleLowerCase() === wName.toLocaleLowerCase()
	);
	return searchedWork ? searchedWork : null;
};
