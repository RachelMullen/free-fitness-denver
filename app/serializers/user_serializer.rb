class UserSerializer < ActiveModel::Serializer
  # include JSONAPI::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :email, :password_digest, :name, :bio, :attachment, :profile_picture

  # has_many :organizations, :class_name => 'Organization', :foreign_key => 'organizer_id'
  # has_many :event_follows, :class_name => 'EventFollow', :foreign_key => 'follower_id'
  # has_many :organization_follows, :class_name => 'OrganizationFollow', :foreign_key => 'follower_id'
  # has_many :events, through: :event_follows
  # has_many :organizations, through: :organization_follows

  def profile_picture
    rails_blob_path(object.profile_picture, only_path: true) if profile_picture.attached?
end

end
