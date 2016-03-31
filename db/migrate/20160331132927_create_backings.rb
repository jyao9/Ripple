class CreateBackings < ActiveRecord::Migration
  def change
    create_table :backings do |t|
      t.integer :reward_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :backings, :reward_id
    add_index :backings, :user_id
  end
end
