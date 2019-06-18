
class RsvpEventsController < ApplicationController
  before_action :authenticate_user!

  def index
    @rsvp_events = RsvpEvent.all
    respond_to do |format|
      format.html {render 'rsvps/index', :layout => false }
      format.json {render :json => @rsvp_events, :layout => false}
  end

  def rsvp_event
    @rsvp_event = RsvpEvent.new
  end

  def create
    # raise params.inspect
    # user = current_user
    @event = Event.find(params[:id])
    @rsvp_event = current_user.rsvp_events.build(attending_event_id: params[:event_id])

    if @rsvp_event.save
      flash[:message] = "THANK YOU FOR JOINING #{@event.name.upcase}"
      respond_to do |format|
        format.html {redirect_to @event}
        format.json {render :json => @rsvp_event}
      end
    else
      flash[:error] = 'YOU ALREADY JOINED THIS EVENT.'
      redirect_to event_path(@event)
    end
  end
end

  def show
    @rsvp_event = RsvpEvent.find(params[:id])
  end

  def destroy
    # raise params.inspect
    if params[:id]
      @user = current_user
      @event = Event.find(params[:id])
      @rsvp_event = RsvpEvent.find_by(participant_id: @user.id, attending_event_id: @event.id)
      if @rsvp_event.nil?
        redirect_to events_path(@event), alert: 'YOU CAN ONLY CANCEL YOUR RSVP '
      else

        @rsvp_event.participant == @user
        @rsvp_event.destroy
        respond_to do |format|
          flash[:notice] = "YOU CANCELLED YOUR RSVP FOR  #{@event.name.upcase}."
          format.html { redirect_to @event }
        end 
      end
    end
  end
end
