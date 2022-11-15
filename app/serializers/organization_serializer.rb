class OrganizationSerializer < ActiveModel::Serializer
  # include Rails.application.routes.url_helpers
  attributes :id, :name, :organizer_id, :attachment, :description, :announcements, :link, :social_media

  belongs_to :organizer, :class_name => "User"
  has_many :events
  has_many :followers, :class_name => 'OrganizationFollow', :foreign_key => 'follower_id'

  # def attachment
  #   rails_blob_path(object.attachment, only_path: true) if object.attachment.attached?
  # end
end
