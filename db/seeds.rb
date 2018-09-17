# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Category.destroy_all

%w(Art Comics Crafts Dance Design Fashion Film Food Games Journalism Music Photography Publishing Technology Theater).each do |category|
  Category.create({name: category})
end

User.create({
  name: 'Demo User',
  email: 'user@demo.com',
  password: 'password',
  biography: "This is a demo account for BootUp.com.",
  location: "New York, NY, United States",
  timezone_utc_offset: -5}
)

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
