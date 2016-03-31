class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.integer :value, null: false
      t.text :description, null: false

      t.timestamps
    end
  end
end
