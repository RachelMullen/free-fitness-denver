class EventFollowsController < ApplicationController
    # skip_before_action :authorize

    wrap_parameters format: []
    def create
        event_follow = EventFollow.create!(event_follow_params)
        render json: event_follow, status: :created
      end

    def get_followed_events
        event_follows = EventFollow.where("follower_id=?", params[:follower_id])
        render json: event_follows
    end
    
    def destroy
      event_follow = EventFollow.find_by!({follower_id: session[:user_id], organization_id: params[:id]})
      event_follow.destroy
      head :no_content
    end
private    
    def event_follows_params
        params.permit(:follower_id, :event_id, :id)
    end
end
