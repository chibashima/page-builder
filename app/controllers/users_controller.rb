class UsersController < ApplicationController
  def index
  end

  def login
    if User.exists?(name: params[:user_name])
      redirect_to pages_path
    else
      redirect_to users_path
    end
  end
end
