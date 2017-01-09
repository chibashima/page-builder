class Api::PageController < ApplicationController
  before_action :validate_params

  def show
    part = User.find_by(name: params[:user]).page.find_by(name: params[:page]).part
    if part.present?
      render json: part.contents, status: :ok
    else
      failed
    end
  end

  def save
    user = User.find_or_create_by!(name: params[:user])
    page = Page.find_or_create_by!(user: user, name: params[:page])
    part = Part.find_or_initialize_by(page: page)
    part.contents = params[:contents]
    part.save!
    head :ok
  rescue
    failed
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
