class RsvpEventsController < ApplicationController
    before_action :confirm_logged_in
    
    def index 
        @rsvp_events = RsvpEvent.all
    end

    def rsvp_event
        @rsvp_event = RsvpEvent.new
    end

    def create 
        #raise params.inspect
        #user = current_user
         @event = Event.find(params[:id])
         @rsvp_event = current_user.rsvp_events.build({attending_event_id: params[:event_id]})

        if @rsvp_event.save
            redirect_to event_path(@event)
        else
        flash[:error] = 'You Already Joined This Event.'
            redirect_to event_path(@event)
        end
    end

    def show 
        @rsvp_event = RsvpEvent.find(params[:id])
    end

    def destroy
        #raise params.inspect
        @user = current_user
        @event = Event.find(params[:id])
        RsvpEvent.find_by(participant_id: @user.id, attending_event_id: @event.id).delete
        flash[:message] = "You Cancelled Your Rsvp for #{@event.name}."
        redirect_to event_path(@event)       
    end
    
    
end