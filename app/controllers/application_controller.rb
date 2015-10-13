class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  respond_to :json

  before_action :configure_permitted_parameters, if: :devise_controller?

  after_filter :set_csrf_cookie_for_ng

def set_csrf_cookie_for_ng
  cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
end

  def angular
    render 'layouts/application'
  end

  protected

  # In Rails 4.2 and above
  def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end

  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :username
  end
end
