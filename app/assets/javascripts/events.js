$(function(){
  console.log('events.js is loaded ...')
  listenForClick()
  listenClick()
  //  listenForNewEventsFormClick()
});

function listenForClick() {
  $('button#events-data').on('click', function(event){
    event.preventDefault()
    getEvents()
  })
}

function listenClick() {
  $('#new_review').submit(function (event) {
    event.preventDefault();

    $.ajax({
      type: ($("input[name='_method]").val() || this.method),
      url: this.action + ".json",
      data: $(this).serialize(),
      success: function(data) {
        const review = new Review(data);
        $("#reviews").append(review.renderReview())
        $('#new_review').trigger("reset");
      }
    })
    
    });
    
  }


class Review {
  constructor(attributes) {
    this.body = attributes["body"];
    this.rating = attributes["rating"];
    this.full_name = attributes["full_name"]
  }
  //Sets a method on object prototype to save memory
  renderReview() {
    const $ol = $("#reviews ol");
    $ol.append("<li>" + this.full_name + " says: " + "<em>" + this.body + "</em> </li>");
    $("#review_content").val("");
  }

}





function getEvents() {
  $.ajax({
    url: 'http://192.168.1.169:3000/events/',
    method: 'get',
    dataType: 'json',
    success: function(data) {
      console.log("the data is:", data)
      data.map(event => {
        const newEvent = new Event(event)
        const newEventHtml = newEvent.eventHTML()
        document.getElementById('ajax-events').innerHTML += newEventHtml
      })
    }
  })
}

// function listenFornewEventsFormClick() {
//   $('button#ajax-new-event').on('click', function(event){
//     event.preventDefault();
//     let newEventsForm = event.newEventsForm()
//     document.querySelector('div#new-event-form-div').innerHTML = newEventsForm
//   })
// }

class Event {
  constructor(obj) {
    this.id = obj.id
    this.name = obj.name
    this.location = obj.location
    this.description = obj.description
    this.start_date = obj.start_date
    this.end_date = obj.end_date
    this.reviews = obj.reviews
    this.rsvp_events = obj.rsvp_events

    
  }

  // static newEventsForm() {
  //   return (`
  //   < strong > New event event form < /strong>
  //     <form>
	// 			 Rating (between 1 and 10): <input type="number" name="rating" min="1" max="10">
	// 			<input type='text' name='body'></input><br>
	// 			<input type='submit' />
	// 		</form>
  //   `)
  // }
}

Event.prototype.eventHTML = function () {
  let eventReviews = this.reviews.map(review => {
    return (`
    <p>Reviewer: ${review.full_name} Rating: ${review.rating}  Review: ${review.body}</p>
    `)
  }).join('')

  let eventParticipants = this.rsvp_events.map(rsvp => {
    return (`
    <p>Participants: ${rsvp.participant}</p>
    `)
  }).join('')
  return (`
  <div class='event'>
    
    <h6>${this.name}</h6>
    <p>${this.location}</p>
    <p>${this.description}</p>
    <p>${this.start_date}</p>
    <p>${this.end_date}</p>
    <p>${eventReviews}</p>
    <p>${eventParticipants}</p>
  `)
}


  // function listenForNewEventsFormClick() {
  //   $('review-form').submit(function (e) {
  //     e.preventDefault();
  //     var values = $(this).serialize();
  //     var newReview = $.post('/reviews', values);
  //     newReview.done(function (data) {
  //       var review = data;
  //       $("#reviewRating").text(review["rating"]);
  //       $("#reviewBody").text(product["body"]);

  //     })
  //   })
  // } 