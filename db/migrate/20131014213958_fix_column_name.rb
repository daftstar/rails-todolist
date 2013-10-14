class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :tasks, :task, :name
  end
end
