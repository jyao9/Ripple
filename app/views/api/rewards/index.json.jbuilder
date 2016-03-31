json.array!(@rewards) do |reward|
  json.partial!("rewards", reward: reward)
end
