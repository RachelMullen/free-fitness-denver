class OrganizationFollowsController < ApplicationController

    private
    def organization_follows_params
        params.permit(:follower_id, :organization_id)
    end
end
