class DeleteStatusColumnOnProjects < ActiveRecord::Migration
  def up
    remove_column :projects, :status
  end

  def down
    add_column :projects, :status
  end
end
