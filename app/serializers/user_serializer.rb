class UserSerializer < ActiveModel::Serializer
  # include JSONAPI::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :email, :name, :bio, :attachment, :profile_picture

  has_many :events, :class_name => 'Organization' ,:foreign_key => "organizer_id"
  has_many :organizations, :class_name => 'Organization', :foreign_key => "organizer_id"

  has_many :events, through: :followed_events
  has_many :organizations, through: :followed_organizations

  has_many :followed_events, :class_name => 'EventFollow', :foreign_key => "follower_id"
  has_many :followed_organizations, :class_name => 'OrganizationFollow', :foreign_key => "follower_id"

  has_many :following_events, :class_name => 'EventFollow', :foreign_key => "event_id"
  has_many :following_organizations, :class_name => 'OrganizationFollow', :foreign_key => "organization_id"

  has_many :organizations, through: :following_organizations
  has_many :events, through: :following_events
  
  def profile_picture
     rails_blob_path(object.profile_picture, only_path: true) if object.profile_picture.attached?
  end
end
