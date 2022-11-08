class OrganizationsController < ApplicationController

    def index
        organizations = Organization.all
        render json: organizations
    end

    def show
        organization = find_organization
        render json: organization
    end


    private  

    def find_organization
        Organization.find(params[:id])
    end
end
