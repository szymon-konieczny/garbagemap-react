export const expandMenu = (toggler, toExpand) => {
	if(toggler) {
		toggler.addEventListener('mousedown', () => {
			toExpand.classList.toggle('hidden');
		}, true);
	};
};