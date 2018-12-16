import HttpRequest from '@/libs/axios'
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

export const axios = new HttpRequest(baseUrl)

export const exportFile = (data, url) => {
	const form = document.createElement("form");
	form.style.display = "none";
	form.action = baseUrl+url;
	form.method = "post";
	document.body.appendChild(form);
	for (let key in data) {
		let input = document.createElement("input");
		input.type = "hidden";
		input.name = key;
		input.value = data[key];
		form.appendChild(input);
	}
	form.submit();
	form.remove();
}

// export const {axios, exportFile}
