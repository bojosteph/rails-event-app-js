// var Review = function (attributes) {
//   this.id = attributes.id;
//   this.body = attributes.body;
//   this.user = attributes.user;
//   this.rating = attributes.rating;
// };

// Review.prototype.deleteLink = function () {
//   var output = '<a class="btn btn-danger btn-xs" data-confirm="Are you sure you want to delete?" rel="nofollow" data-method="delete" href="/events/:event_id/reviews/' + this.id + '">';
//   output += '<span class="glyphicon glyphicon-remove"></span>';
//   output += '</a>';
//   return output;
// }

// Review.prototype.renderReview = function () {
//   var html = "";
//   html += '<ol class="list-unstyled" id="review-" + review.id >';
//   html += '<li><strong>' + this.user.username + '</strong>' + " " + ':' + " " + this.body + " " + this.deleteLink() + '</li>';
//   html += '</ol>';
//   return html;
// };

// var attachListener = function () {
//   $(document).on('submit', 'form#new_review', function (event) {
//     event.preventDefault();
//     var $form = $(this);
//     var action = $form.attr("action");
//     var params = $form.serialize();
//     $.ajax({
//       url: action,
//       data: params,
//       dataType: "json",
//       method: "POST"
//     }).success(function (json) {
//       $(".reviewText").val("");
//       var review = new Review(json);
//       var renderReview = review.renderReview();
//       $("#reviewSection").append(renderReview);
//     });
//   });
// }

// $(document).ready(function(){
//   attachListener();
// });