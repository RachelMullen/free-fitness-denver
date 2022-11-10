class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    ## SHOW ALL USERS
    def index
        render json:@current_user.event_follows
    end

    ## CREATE NEW USER
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    ## SHOW CURRENT USER
    def show
        render json: @current_user
    end

    # ## SHOW CURRENT USERS WOOFS
    # def user_woofs
    #     render json: @current_user.woofs
    # end

    ## SHOW CURRENT USER DETAILS
    # def show_user id
    #     user = User.find(params[:id])
    #     render json: user
    # end

    ## UPDATE CURRENT USER
    def update
        @current_user.update!(user_params)
        render json: @current_user
    end

    ##DELETE CURRENT USER
    def destroy
        @current_user.destroy
        head :no_content
    end

    private
    
    def user_params
        params.permit(:id, :email, :password, :password_confirmation, :name, :bio, :attachment, :profile_picture)
    end
end
