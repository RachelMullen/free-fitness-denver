class EventsController < ApplicationController
    def index
        events = Event.all
        render json: events
    end

    def show
        event= find_event
        render json: event
    end


    private  

    def find_event
        Event.find(params[:id])
    end
end
