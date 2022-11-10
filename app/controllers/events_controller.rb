class EventsController < ApplicationController
    

#display organization with events, otherwise, display events
#GET /users/:user_id/s
    # def index
    #     if params[:organization_id] 
    #      organization = Organization.find(params[:organization_id])
    #      events = organization.events
    #     else
    #      organizations = Event.all.order(:name)
    #     end
    #      render json: events, include: :organization
    #  end

    def index
        render json: Event.all.order(:name), status: :ok
    end

    def show
        event = Event.find(params[:id])
        render json: event, status: :ok
    end

    #create event that belongs to user
    # POST /users/:user_id/events
    def create
        user = User.find(params[:user_id])
        event = user.items.create!(event_params)
        render json: event, status: :created
    end 

    def update
        organization = Organization.find(params[:id])
        organization.update!(organization_params)
        render json: organization, status: :accepted
    end 

    def destroy
        event = Event.find(params[:id])
        event.destroy
        head :no_content
    end

    private  

    def event_params
        params.permit(:name, :organization_id, :announcements, :link, :social_media, :description, :attachment, :location_name, :address, :city, :state, :zip, :date, :time, :difficulty_distance, :category)
    end
end
