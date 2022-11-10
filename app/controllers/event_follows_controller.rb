class EventFollowsController < ApplicationController


private    
    def event_follows_params
        params.permit(:follower_id, :event_id)
    end
end
