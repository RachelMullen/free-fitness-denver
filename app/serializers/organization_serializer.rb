class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :organizer_id, :attachment, :description, :announcements, :link, :social_media

  belongs_to :organizer, :class_name => "User"
  has_many :events
end
