class Api::PageController < ApplicationController
  before_action :validate_params

  def save
    user = User.find_or_create_by(name: params[:user])
    page = Page.find_or_create_by(user: user, name: params[:page])
    part = Part.find_or_initialize_by(page: page)
    part.contents = params[:contents]

    if part.save
      head :ok
    else
      failed
    end
  end

  private

  def validate_params
    failed if params[:user].blank?
    failed if params[:page].blank?
  end

  def failed
    head :bad_request
  end
end
