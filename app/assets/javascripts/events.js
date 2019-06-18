$(function(){
  console.log('events.js is loaded ...')
  listenForClick()
  // listenForNewEventsFormClick()
});

function listenForClick() {
  $('button#events-data').on('click', function(event){
    event.preventDefault()
    getEvents()
  })
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

function listenFornewEventsFormClick() {
  $('button#ajax-new-event').on('click', function(event){
    event.preventDefault();
    let newEventsForm = event.newEventsForm()
    document.querySelector('div#new-event-form-div').innerHTML = newEventsForm
  })
}

class Event {
  constructor(obj) {
    this.id = obj.id
    this.name = obj.name
    this.location = obj.location
    this.description = obj.description
    this.start_date = obj.start_date
    this.end_date = obj.end_date
    this.reviews = obj.reviews
    
  }

  static newEventsForm() {
    return (`
    < strong > New event event form < /strong>
      <form>
				 Rating (between 1 and 10): <input type="number" name="rating" min="1" max="10">
				<input type='text' name='body'></input><br>
				<input type='submit' />
			</form>
    `)
  }
}

Event.prototype.eventHTML = function () {
  let eventReviews = this.reviews.map(review => {
    return (`
    <p>rating: ${review.rating}  review: ${review.body}</p>
    `)
  })
  return (`
  <div class='event'>
    
    <h6>${this.name}</h6>
    <p>${this.location}</p>
    <p>${this.description}</p>
    <p>${this.start_date}</p>
    <p>${this.end_date}</p>
    <p>${eventReviews}</p>
  `)
}