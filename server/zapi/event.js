
 Restivus.addCollection(Events);
 
 Restivus.addRoute('eventsapi/:id', {authRequired: false}, {
    get: function () {
			      var event = Events.findOne(this.urlParams.id);
			      if (event) {
			        return {status: 'success', data: event};
			      }
			      return {
			        statusCode: 404,
			        body: {status: 'fail', message: 'Post not found'}
			      };
   			},
   	post:   {action: function () {
			        var event = Events.findOne(this.urlParams.id);
			        if (event) {
			          return {status: "success", data: event};
			        }
			        return {
			          statusCode: 400,
			          body: {status: "fail", message: "Unable to add event"}
			        };
			      }
    		},
    delete: {action: function () {
			        if (Events.remove(this.urlParams.id)) {
			          return {status: "success", data: {message: "Event removed"}};
			        }
			        return {
			          statusCode: 404,
			          body: {status: "fail", message: "Event not found"}
			        };
                   }
            }
});

