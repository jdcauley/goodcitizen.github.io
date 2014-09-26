
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("sendEmail", function(request, response) {
  var sendgrid = require("sendgrid");
  sendgrid.initialize("johnpeele", "coLd7Eks1uB4ka");

  var name = request.params.name;
  var email = request.params.email;
  var budget = request.params.budget;
  var message = request.params.message;

  sendgrid.sendEmail({
   to: "john@wearegoodcitizen.com",
   from: email,
   fromname: name,
   subject: "Good Citizen - Project Planner Submission",
   // text: "Name: "+name+"\nEmail: "+email+"\nMessage:\n\n"+message
   text: "<html><body><table rules='all' style='border-color: #666;' cellpadding='10'><tr style='background: #eee;'><td><strong>Name:</strong> </td><td>"+name+"</td></tr><tr><td><strong>Email:</strong> </td><td>"+email+"</td></tr><tr><td><strong>Phone:</strong> </td><td>"+budget+"</td></tr><tr><td><strong>Message:</strong> </td><td>"+message+"</td></tr></table></body></html>"

   }, {
     success: function(httpResponse) {
       console.log(httpResponse);
       response.success("Email sent!");
    },
     error: function(httpResponse) {
       console.error(httpResponse);
       response.error("Uh oh, something went wrong");
    }
  });
});
