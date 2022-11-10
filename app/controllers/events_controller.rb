class EventsController < ApplicationController
    def index
        events = Event.all.order(:name)
        render json: events
    end

    def show
        event = Event.find(params[:id])
        render json: event
    end

    private  

    def destroy
        event = Event.find(params[:id])
        event.destroy
        head :no_content
    end

    def event_params
        params.permit(:name, :organization_id, :announcements, :link, :social_media, :description, :attachment, :location_name, :address, :city, :state, :zip, :date, :time, :difficulty_distance, :category)
    end
end
