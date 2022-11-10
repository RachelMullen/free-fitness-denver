class OrganizationsController < ApplicationController

    def index
        organizations = Organization.all.order(:name)
        render json: Organization.all
    end

    def show
        organization = Organization.find(params[:id])
        render json: organization
    end


    private  
    def destroy
        organization = Organization.find(params[:id])
        organization.destroy
        head :no_content
    end

    def organization_params
        params.permit(:name, :organizer_id, :announcements, :link, :social_media, :description, :attachment)
    end
end
