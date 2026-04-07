// read_news.js

// read all article datas
async read_data() {
	try{
		const res = await fetch('/static/datas/datas.json');
		const data = await res.json();
		return data.article ?? {};
	} catch(e){
		console.error(e);
		return {};
	}
}

// 
