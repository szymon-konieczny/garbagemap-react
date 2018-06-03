export const expandMenu = (toggler, toExpand) => {
	console.log('OK!');
	if(toggler) {
		toggler.addEventListener('mousedown', () => {
			toExpand.classList.toggle('hidden');
		}, true);
	};
};