# == Schema Information
#
# Table name: levels
#
#  id                    :integer          not null, primary key
#  game_id               :integer
#  name                  :string(255)      not null
#  created_at            :datetime
#  updated_at            :datetime
#  level_num             :string(255)
#  ideal_level_source_id :integer
#  user_id               :integer
#  properties            :text(65535)
#  type                  :string(255)
#  md5                   :string(255)
#  published             :boolean          default(FALSE), not null
#  notes                 :text(65535)
#  audit_log             :text(65535)
#
# Indexes
#
#  index_levels_on_game_id  (game_id)
#  index_levels_on_name     (name)
#

class Dancelab < GamelabJr
  serialized_attrs %w(
    default_song
  )

  def self.create_from_level_builder(params, level_params)
    create!(
      level_params.merge(
        user: params[:user],
        game: Game.dance,
        level_num: 'custom',
        properties: {
          block_pools: [
            "Dancelab",
          ],
          helper_libraries: [
            "DanceLab",
          ],
          hide_animation_mode: true,
          show_type_hints: true,
          use_modal_function_editor: true,
        }
      )
    )
  end

  def common_blocks(type)
  end

  # Manually curated
  # TODO - epeach - manually populate these values from song manifest
  def self.hoc_songs
    [["MC Hammer - U Can't Touch This", "hammer"], ["Macklemore - Can't Hold Us", "macklemore90"], ["The Black Eyed Peas - I Got a Feeling", "peas"]]
  end
end
