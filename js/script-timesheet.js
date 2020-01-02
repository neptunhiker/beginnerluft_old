$(function() {

	var commentary_msg = "Bitte Inhalte des Coachings kurz und knapp beschreiben.";

	$('[data-toggle="tooltip"]').tooltip();  

	$("#submit").click(function() {
		// check whether fields have been filled out
		$("#commentary").val(commentary_msg); 
		$("#successmessage").text("Daten erfolgreich gespeichert");
	  })

	$(document).on("focusout", "textarea", function(){

		if ($(this).val() == "") {
			$(this).val(commentary_msg);
		}
	})

	$(document).on("focusin", "textarea", function(){

		if ($(this).val() == commentary_msg) {
			$(this).val("");
		}
	})

   	$('input, textarea').change(function() { 
        $("#successmessage").text(""); 
   }); 

})

