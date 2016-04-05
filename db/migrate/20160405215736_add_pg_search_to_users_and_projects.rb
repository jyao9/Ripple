class AddPgSearchToUsersAndProjects < ActiveRecord::Migration
  def change
    PgSearch::Multisearch.rebuild(Project)
    PgSearch::Multisearch.rebuild(User)
  end
end
