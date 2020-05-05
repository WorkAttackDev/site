import services from "../data/services";

export const findServiceByName = (sName = "") => {
	if (sName.trim() === "") return null;
	const searchedService = services.find(
		_s => _s.name.toLocaleLowerCase() === sName.toLocaleLowerCase()
	);
	return searchedService ? searchedService : null;
};
