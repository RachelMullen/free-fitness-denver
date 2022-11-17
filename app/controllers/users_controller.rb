class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        render json:@current_user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user, status: :ok
    end

    def update
        @current_user.update!(user_params)
        render json: @current_user, status: :accepted
    end

    def destroy
        @current_user.destroy
        head :no_content
    end

    private
    
    def user_params
        params.permit(:id, :email, :password, :password_confirmation, :name, :bio, :attachment, :profile_picture)
    end
end
