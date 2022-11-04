class CreateOrganizationFollows < ActiveRecord::Migration[7.0]
  def change
    create_table :organization_follows do |t|
      t.integer :follower_id
      t.integer :organization_id

      t.timestamps
    end
  end
end
