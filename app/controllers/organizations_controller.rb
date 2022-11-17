class OrganizationsController < ApplicationController
    # skip_before_action :authorize

    def index
        render json: Organization.all.order(:name)
    end

    #Show user Organizations
    def user_organizations
        organizations = @current_user.organizations 
        render json: organizations, include: :user
    end

    def show
        organization = Organization.find(params[:id])
        render json: organization, include: :events, status: :ok
    end

    def create
        organization = Organization.create!(organization_params)
        render json: organization, status: :created
    end 

    def update
        organization = Organization.find(params[:id])
        organization.update!(organization_params)
        render json: organization, status: :accepted
    end 

    def destroy
        organization = Organization.find(params[:id])
        organization.destroy
        head :no_content
    end

    private  
    def organization_params
        params.permit(:name, :organizer_id, :announcements, :link, :social_media, :description, :attachment, :organization_photo)
    end
end