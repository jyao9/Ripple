class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :category, null: false
      t.text :blurb, null: false
      t.integer :author_id, null: false
      t.integer :duration, null: false
      t.integer :goal, null: false
      t.integer :status, null: false, default: 0

      t.timestamps
    end
    add_index :projects, :author_id
  end
end
