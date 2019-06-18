

module EventsHelper
  def start_of_event(event)
    event.start_date.strftime('%b %e, %l:%M %p')
  end

  def end_of_event(event)
    event.end_date.strftime('%b %e, %l:%M %p')
  end
end
