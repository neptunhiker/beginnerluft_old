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
			if (password === "0000") {
				$("#password-message").text("");
				$("#login-message").text("Passwort korrekt").css("color", "green");
				window.open("https://neptunhiker.github.io/beginnerluft/timesheet", "_self");
			} else {
				$("#password-message").text("Falsches Passwort");
			}
		} else {
			$("#email-message").text("E-Mailadresse unbekannt");
	
		}
	  })

	})

