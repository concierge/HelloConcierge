/*
	Method that is called to determine if a message should result in this module being run.
	text is the body of the message. commandPrefix is the prefix that should be used for
	static commands (commands that will always be available given the same text is typed)
	on a particular platform (eg, skype, slack, facebook...) - usually this is the string
	"/" or "!".
	Returns true if the module should run, false otherwise.
*/
exports.match = function(text, commandPrefix) {
    return text === commandPrefix + 'helloworld';
};

/*
	Method that provides help strings for use with this module.
	Refer to documentation for notes about which strings refer to what help.
*/
exports.help = function() {
    return [[this.commandPrefix + 'helloworld','Says "hello world"','Provides a useful example to demonstrate the creation of a Kassy Module. Says "hello world".']];
};

/*
	The main entry point of the module. This will be called by Kassy whenever the match function
	above returns true. In this basic example it simply replies with "hello world".
*/
exports.run = function(api, event) {
	api.sendMessage("hello world", event.thread_id);
};
