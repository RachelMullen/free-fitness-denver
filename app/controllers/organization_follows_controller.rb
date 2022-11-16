class OrganizationFollowsController < ApplicationController
    skip_before_action :authorize
    wrap_parameters format: []
    def create
        organization_follow = OrganizationFollow.create!(organization_follow_params)
        render json: organization_follow, status: :created
      end
    
    def destroy
      organization_follow = OrganizationFollow.find_by!({follower_id: session[:user_id], organization_id: params[:id]})
      binding.break
      organization_follow.destroy
      head :no_content
    end
  
    private
  
    def organization_follow_params
      params.permit(:id, :follower_id, :organization_id)
    end
    
end
