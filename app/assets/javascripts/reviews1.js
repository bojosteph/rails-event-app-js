// $(document).on(function () {

//   attachListeners();
// })



// var attachListeners = function() {
//   $("#loadReviews").on("click", function (e) {
//     e.preventDefault();
//     $.ajax({
//         method: 'GET',
//         url: this.href + ".json",
//         //data: $(this).serialize()
//       }).done(function (data) {
//         const $ol = $("#reviews ol")
//         $ol.html("")
//         data.forEach(function (review) {
//           $ol.append(`<li> ${review.user.full_name} says: <em>${review.content}</em> </li>`);
//         })
//       })
//       .error(function (error) {
//         alert("There was an error!")
//       });
//   })
//   $("#newReview").on("submit", function(e){
//     e.preventDefault();
//     $.ajax({
//       type: ($("input[name='_method']").val() || this.method),
//       url: this.action + ".json",
//       data: $(this).serialize(),
//       success: function(data){
//         const review = new Review(data);
//         $("#reviews").append(review.renderReview())
//         $("#sub").removeAttr('disabled')
//       }
      
//     })
//     .error(function(error) {
//           alert("There was an error!")
//   });
// });

// class Review {
//   constructor(attributes){
//     this.rating = attributes["rating"];
//     this.body = attributes["body"];
//     this.user = attributes["user"];
//     this.user.full_name = attributes["user"]["full_name"]
//   }
//   renderReview() {
//     const $ol = $("#comments ol");
//     $ol.append("<li>" + this.user.full_name + " says: " + "<em>" + this.body + "</em> </li>");
//     $("#comment_content").val("");
//   }

// }

  
//     $(".js-next").on("click", function (e) {
//       e.preventDefault()

//       var nextId = parseInt($(".js-next").attr("data-id")) + 1;
//       $.get("/events/" + nextId + ".json", function (data) {

//         $(".eventName").html("EVENT NAME:  " + data["name"].toUpperCase());
//         $(".eventStart").html("START OF EVENT:  " + data["start_date"]);
//         $(".eventEnd").html("END OF EVENT:  " + data["end_date"]);
//         $(".eventLocation").html("EVENT LOCATION:  " + data["location"].toUpperCase());
//         $(".eventDescription").html("EVENT DETAILS:  " + data["description"].toUpperCase());

//         $(".js-next").attr("data-id", data["id"]);
//       });
//     });

//   }






