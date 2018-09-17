
  @categories.each do |category|
    json.set! category.id do
      json.partial! '/api/categories/category.json.jbuilder', category: category
    end
  end
