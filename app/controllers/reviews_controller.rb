
class ReviewsController < ApplicationController
  before_action :authenticate_user!

  def index
    # raise params.inspect
    @user = current_user
    @event = Event.find_by(id: params[:event_id])
    @reviews = Review.where(reviewing_event_id: @event.id)
    respond_to do |format|
      format.html { render 'reviews/index', :layout => false }
      format.json { render json:  @reviews, :layout => false}
    end
  end

  def new
    # raise params.inspect
    @user = current_user
    @event = Event.find_by(id: params[:event_id])
    @review = Review.new
  end

  def create
    # raise params.inspect
    @user = current_user
    @event = Event.find_by(id: params[:event_id])
    @review = @event.reviews.create(review_params)
    @review.reviewer = @user

    if @review.save
      # redirect_to event_path(user_id: @user.id, id: @event.id)
      respond_to do |format|
        format.html {redirect_to @event}
        format.json {render :json => @review}
      end
    else
      flash[:error] = 'YOU ALREADY REVIEWED THIS EVENT OR YOU NEED TO WRITE A REVIEW.'
      redirect_to event_path(user_id: @user.id, id: @event.id)
    end
  end

  def show
    # raise params.inspect
    @event = Event.find_by(id: :event_id)
    @review = Review.find(params[:id])
  end

  def destroy
    # raise params.inspect
    if params[:id]
      @user = current_user
      @event = Event.find(params[:id])
      review = Review.find_by(reviewer_id: @user.id, reviewing_event_id: @event.id)
      if review.nil?
        redirect_to event_path(@event), alert: 'YOU NEED TO WRITE A REVIEW'
      else
        review.reviewer == @user
        review.destroy
        flash[:message] = "YOU CANCELLED YOUR REVIEW FOR #{@event.name}."
        redirect_to event_path(@event)
      end
    end
  end

  def edit 
    @user = current_user
    @event = Event.find_by(id: params[:event_id])
    @review = Review.find_by(reviewer_id: @user.id, reviewing_event_id: @event.id)
  end

  def update
    #raise params.inspect
    @user = current_user
    @event = Event.find_by(id: params[:event_id])
    @review = Review.find_by(id: params[:id])
    if @review.update(review_params)
      flash[:message] = "YOU SUCCESFULLY UPDATED #{@event.name} REVIEW"
      redirect_to event_path(@event)
    else
      flash[:error] = 'ERROR UPDATING EVENT.'
      redirect_to event_path(@event)
    end
  end


  


  private

  def review_params
    params.require(:review).permit(:rating, :body)
  end
end
