// $(function () {
//     $('#formbox').validate({
//         submitHandler: function (form) {
//             $(form).ajaxSubmit({
//                 type: "POST",
//                 data: $(form).serialize(),
//                 url: "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php";
//         }
//     });
// }); 

document.getElementById("formbox").addEventListener("submit", function(){
    document.getElementById("success").innerHTML = "Thanks for the message!";
})