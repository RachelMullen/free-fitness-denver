class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :name, :bio, :attachment
end
