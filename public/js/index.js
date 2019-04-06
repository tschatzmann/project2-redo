 // Chosen CSS

console.log('index.js')
    let userData=[];
// // Capture the form inputs
 $("#submit").on("click", function (event) {
 console.log('submit clicked')
     event.preventDefault();
     console.log('in sumbit profile');
//     //    photo = defaultPhoto;
//     // Form validation
     function validateForm() {
         console.log('in validate')
         var isValid = true;

         $(".chosen-select").each(function () {

             if ($(this).val() === "") {
                 isValid = false;
             }
         });
         return isValid;
     }

//     // If all required fields are filled
    if (validateForm()) {
        // Create an object for the user"s data
    const answers = [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
    console.log(answers); 
    debugger;
    // AJAX post the data to the friends API.
    $.post(`/submitQuestions/`, { answers }, function (data) {
        console.log('the data here', data);
        console.log('in post in profile.handlebars');
            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            //   $("#match-name").text(data.name);
            //   $("#match-img").attr("src", data.photo);
            //    $("#match-imag").attr("style","width: 20px")
            //  $("#match-imag").attr("style","height: 20px")
            // Show the modal with the best match
            //   $("#results-modal").modal("toggle");


     });
}else{

           alert("Please fill out all fields before submitting!");
}
});
console.log('leaving index.js')
