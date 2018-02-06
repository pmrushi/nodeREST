var appRouter = function(app) {
	
	var dispenseComplete = {"code":0, "description":"Success aaaa", "id":"24c216c1-3304-4a21-b0a8-3f511052550d"
    }

	app.get("/dispense", function(req, res) {
	    res.send(dispenseComplete);
	});
}

module.exports = appRouter;