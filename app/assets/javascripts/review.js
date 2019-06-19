// $(function () {
//   console.log('review.js is loaded ...')
//   listenForReviews()
//    listenFornewReviewFormClick()
// });

// function listenForReviews() {
//   $('button#review-data').on('click', function (event) {
//     event.preventDefault()
//     getReview()
//   })
// }

// function getReview() {
//   $.ajax({
//     url: `${this.url}`,
//     method: 'get',
//     dataType: 'json',
//     success: function (data) {
//       console.log("the data is:", data)
//       data.map(review => {
//         const newReview = new Review(review)
//         const newReviewHtml = newReview.reviewHTML()
//         document.getElementById('ajax-review').innerHTML += newReviewHtml
//       })
//     }
//   })
// }

// function listenFornewReviewFormClick() {
//   $('button#ajax-new-review').on('click', function (e) {
//     e.preventDefault();
//     let newReviewForm = Review.newReviewForm()
//     document.querySelector('div#new-review-form-div').innerHTML = newReviewForm
//   })
// }

// class Review {
//   constructor(obj) {
//     this.id = obj.id
//     this.rating = obj.rating
//     this.body = obj.body
//     this.full_name = obj.full_name
//     this.start_date = obj.start_date
//     this.reviewing_event = obj.reviewing_event
    


//   }

//   static newReviewForm() {
//     return (`
//     < strong > New event event form < /strong>
//       <form>
//          Rating (between 1 and 10): <input type="number" name="rating" min="1" max="10">
//         <input type="hidden" value= :event_id >
//   			<input type='text' name='body'></input><br>
//   			<input type='submit' />
//   		</form>
//     `)
//   }
// }

// Review.prototype.reviewHTML = function () {
  
//   return (`
//   <div class='review'>
    
//     <p>Comments: </p>
//     <ol>
        
//             <li>
//                 <p>${this.full_name} gives rating: ${this.rating} says: ${this.body}</em></p>
//             </li>
        
//     </ol>
//   `)
// }