json.search_results do
  json.array! @search_results.map(&:searchable) do |search_result|
    case search_result
    when User
      json.partial! "api/users/users", user: search_result
    when Project
      json.partial! "api/projects/projects", project: search_result
    end
    json._type search_result.class.to_s

  end
end
