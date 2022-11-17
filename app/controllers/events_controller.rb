class EventsController < ApplicationController
        skip_before_action :authorize

    def index
        render json: Event.all.order(:name), status: :ok
    end

    def show
        event = Event.find(params[:id])
        render json: event, status: :ok
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end 

    def update
        event = Event.find(params[:id])
        event.update!(event_params)
        render json: event, status: :accepted
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
