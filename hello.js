/*
	The main entry point of the module. This will be called whenever a match is
    found via the 'command' section in kassy.json.
	In this basic example it simply replies with "hello world".
*/
exports.run = (api, event) => {
	api.sendMessage($$`ExampleTranslationKey`, event.thread_id);
};
