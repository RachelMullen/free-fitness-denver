class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :organizer_id, :attachment, :description, :announcements, :link, :social_media
end
