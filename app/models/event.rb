class Event < ApplicationRecord
    # CATEGORIES = ['Comedy', 'Drama', 'Animation', 'Mystery', 'Horror', 'Fantasy', 'Action', 'Documentary', 'Science Fiction']

    belongs_to :organization
    # has_one_attached :attachment

    validates :name, presence: true

    # validates :category, inclusion: {
    #     in: CATEGORIES,
    #     message: "must be one of: #{CATEGORIES.join(', ')}"
    #   }
    
end
