# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

30.times do
  credentials = {
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: 'asdfjkl',
    biography: Faker::Lorem.paragraph(3),
    location: "#{Faker::Address.city}, #{Faker::Address.state}, United States",
    timezone_utc_offset: (-9..-5).to_a.sample
  }
  User.create(credentials)
end
