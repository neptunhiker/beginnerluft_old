$(function() {
 

	$("#login").click(function() {
		// check whether email exits
		var testemails = ["beata.rozwadowska@beginnerluft.de", 
							"lea.bergmann@beginnerluft.de",
							"sebastian.schmitz@beginnerluft.de",
							"anna.homann@beginnerluft.de",
							"paul.mathes@beginnerluft.de"];

		var email = $("input[name=email]").val();
		console.log(email);

		if (testemails.includes(email)) {
			$("#email-message").text("");
			var password = $("input[name=pw").val();
			console.log(password);
			if (password === "0000") {
				$("#password-message").text("");
				$("#login-message").text("password correct").css("color", "green");
				window.open("https://neptunhiker.github.io/beginnerluft/timesheet", "_self");
			} else {
				$("#password-message").text("wrong password");
			}
		} else {
			$("#email-message").text("E-Mailadresse unbekannt");
			console.log("Email adresse unbekannt");
		}
	  })

	})

