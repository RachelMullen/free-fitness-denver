class OrganizationSerializer < ActiveModel::Serializer
  # include Rails.application.routes.url_helpers
  attributes :id, :name, :organizer_id, :attachment, :description, :announcements, :link, :social_media

  belongs_to :organizer, :class_name => "User"
  has_many :events
  has_many :followers, :class_name => 'OrganizationFollow', :foreign_key => 'follower_id'

  def organization_photo
    rails_blob_path(object.organization_photo, only_path: true) if object.organization_photo.attached?
  end
end
