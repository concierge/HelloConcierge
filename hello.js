/*
	The main entry point of the module. This will be called whenever a match is found via kassy.json.
	In this basic example it simply replies with "hello world".
*/
exports.run = (api, event) => {
	api.sendMessage("hello world", event.thread_id);
};
