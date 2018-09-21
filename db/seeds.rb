# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Category.destroy_all
Project.destroy_all
Reward.destroy_all
Backing.destroy_all

%w(Art Comics Film Food Games Music Photography Technology).each do |category|
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

111.times do
  credentials = {
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: 'password',
    biography: Faker::Lorem.paragraph(3),
    location: Faker::Address.country,
    timezone_utc_offset: (-9..-5).to_a.sample
  }
  User.create(credentials)
end

# music projects
music_id = Category.find_by(name: 'Music').id
art_id = Category.find_by(name: 'Art').id
comics_id = Category.find_by(name: 'Comics').id
film_id = Category.find_by(name: 'Film').id
food_id = Category.find_by(name: 'Food').id
games_id = Category.find_by(name: 'Games').id
photo_id = Category.find_by(name: 'Photography').id
tech_id = Category.find_by(name: 'Technology').id

category_indeces = [music_id, art_id, comics_id, film_id, food_id, games_id, photo_id, tech_id]
pledge_goals = [50, 700, 800, 10000, 20000, 5000, 7500, 50000, 55000, 75000, 120, 90000, 500000, 200000, 250000, 25000, 3000, 4000, 11500, 1250, 30000, 125000, 750000]
countries = [
  'US', 'UK', 'Canada', 'Australia',' New Zealand', 'the Netherlands', 'Denmark',
  'Ireland', 'Norway', 'Sweden', 'Germany', 'France', 'Spain', 'Italy', 'Austria',
  'Belgium', 'Switzerland', 'Luxembourg', 'Hong Kong', 'Singapore', 'Mexico', 'Japan'
]
months = (1..12).to_a
days = (1..28).to_a
years = (2019..2020).to_a

7.times do |idx|
  title = Faker::Music.album

  while Project.find_by(title: title)
    title = Faker::Music.album
  end

  m = Project.create!({
    title: title,
    subtitle: Faker::GreekPhilosophers.quote,
    category_id: music_id,
    admin_id: User.all.sample.id,
    pledge_goal: pledge_goals.sample,
    country: countries.sample,
    story: Faker::Lorem.paragraph_by_chars(750, false),
    end_date: "#{years.sample}-#{months.sample}-#{days.sample}",
    complete: true
    })
  m.image.attach(io: File.open("app/assets/images/music/#{idx+1}.jpg"), filename: "m#{idx+1}.jpg")
end

7.times do |idx|
  title = Faker::BreakingBad.episode

  while Project.find_by(title: title)
    title = Faker::BreakingBad.episode
  end

  a = Project.create!({
    title: title,
    subtitle: Faker::GreekPhilosophers.quote,
    category_id: art_id,
    admin_id: User.all.sample.id,
    pledge_goal: pledge_goals.sample,
    country: countries.sample,
    story: Faker::Lorem.paragraph_by_chars(750, false),
    end_date: "#{years.sample}-#{months.sample}-#{days.sample}",
    complete: true
    })
  a.image.attach(io: File.open("app/assets/images/art/#{idx+1}.jpg"), filename: "a#{idx+1}.jpg")
end

7.times do |idx|
  title = Faker::WorldOfWarcraft.quote

  while Project.find_by(title: title)
    title = Faker::WorldOfWarcraft.quote
  end

  c = Project.create!({
    title: title,
    subtitle: Faker::Movie.quote,
    category_id: comics_id,
    admin_id: User.all.sample.id,
    pledge_goal: pledge_goals.sample,
    country: countries.sample,
    story: Faker::Lorem.paragraph_by_chars(750, false),
    end_date: "#{years.sample}-#{months.sample}-#{days.sample}",
    complete: true
    })
  c.image.attach(io: File.open("app/assets/images/comics/#{idx+1}.jpg"), filename: "c#{idx+1}.jpg")
end

7.times do |idx|
  title = Faker::Movie.quote

  while Project.find_by(title: title)
    title = Faker::Movie.quote
  end

  f = Project.create!({
    title: title,
    subtitle: Faker::MichaelScott.quote[0, 50] + "...",
    category_id: film_id,
    admin_id: User.all.sample.id,
    pledge_goal: pledge_goals.sample,
    country: countries.sample,
    story: Faker::Lorem.paragraph_by_chars(750, false),
    end_date: "#{years.sample}-#{months.sample}-#{days.sample}",
    complete: true
    })
  f.image.attach(io: File.open("app/assets/images/film/#{idx+1}.jpg"), filename: "f#{idx+1}.jpg")
end

7.times do |idx|
  fd = Project.create!({
    title: Faker::Food.dish + " " + Faker::Food.dish,
    subtitle: Faker::GreekPhilosophers.quote,
    category_id: food_id,
    admin_id: User.all.sample.id,
    pledge_goal: pledge_goals.sample,
    country: countries.sample,
    story: Faker::Lorem.paragraph_by_chars(750, false),
    end_date: "#{years.sample}-#{months.sample}-#{days.sample}",
    complete: true
    })
  fd.image.attach(io: File.open("app/assets/images/food/#{idx+1}.jpg"), filename: "fd#{idx+1}.jpg")
end

7.times do |idx|
  title = Faker::LeagueOfLegends.quote

  while Project.find_by(title: title)
    title = Faker::LeagueOfLegends.quote
  end

  g = Project.create!({
    title: title,
    subtitle: Faker::RickAndMorty.quote,
    category_id: games_id,
    admin_id: User.all.sample.id,
    pledge_goal: pledge_goals.sample,
    country: countries.sample,
    story: Faker::Lorem.paragraph_by_chars(750, false),
    end_date: "#{years.sample}-#{months.sample}-#{days.sample}",
    complete: true
    })
  g.image.attach(io: File.open("app/assets/images/games/#{idx+1}.jpg"), filename: "g#{idx+1}.jpg")
end

7.times do |idx|
  title = Faker::GreekPhilosophers.quote

  while Project.find_by(title: title)
    title = Faker::GreekPhilosophers.quote
  end

  p = Project.create!({
    title: title,
    subtitle: Faker::MichaelScott.quote[0, 50] + "...",
    category_id: photo_id,
    admin_id: User.all.sample.id,
    pledge_goal: pledge_goals.sample,
    country: countries.sample,
    story: Faker::Lorem.paragraph_by_chars(750, false),
    end_date: "#{years.sample}-#{months.sample}-#{days.sample}",
    complete: true
    })
  p.image.attach(io: File.open("app/assets/images/photo/#{idx+1}.jpg"), filename: "p#{idx+1}.jpg")
end

7.times do |idx|
  title = Faker::Company.catch_phrase

  while Project.find_by(title: title)
    title = Faker::Company.catch_phrase
  end

  t = Project.create!({
    title: title,
    subtitle: Faker::Company.bs,
    category_id: tech_id,
    admin_id: User.all.sample.id,
    pledge_goal: Faker::Number.between(100, 500000).round(-2),
    country: countries.sample,
    story: Faker::Lorem.paragraph_by_chars(750, false),
    end_date: "#{years.sample}-#{months.sample}-#{days.sample}",
    complete: true
    })
  t.image.attach(io: File.open("app/assets/images/tech/#{idx+1}.jpg"), filename: "p#{idx+1}.jpg")
end

112.times do
  Reward.create!({
    name: Faker::Dota.item,
    description: Faker::Hacker.say_something_smart,
    value: [1,5,10,25,70,100,500,1000].sample,
    project_id: Project.all.sample.id,
    delivery_date: "#{years.sample}-#{months.sample}-#{days.sample}"
    })
end

560.times do
  Backing.create!({
    user_id: User.all.sample.id,
    project_id: Project.all.sample.id,
    value: [1, 5, 10, 20, 30, 50, 100, 200, 250, 500, 1000].sample
    })
end

# m4 = Project.create({
#   title: "Expand the Empire!",
#   subtitle: "Supporting the indie efforts of The Cat Empire in theirn new album.",
#   category_id: music_id,
#   admin_id: User.all.sample.id,
#   pledge_goal: 7500,
#   country: 'USA',
#   story: Faker::Lorem.paragraph(50),
#   end_date: '2019-07-01',
#   complete: true
# })
# m4.image.attach(io: File.open("app/assets/images/catempire.jpg"), filename: "catempire.jpg")
#
# m1 = Project.create({
#   title: "Bring back the 'Come Fly With Me Album'!",
#   subtitle: "Bringing back one of the best crooner albums of all time. Come fly with us!",
#   category_id: music_id,
#   admin_id: User.all.sample.id,
#   pledge_goal: 50000,
#   country: 'USA',
#   story: Faker::Lorem.paragraph(50),
#   end_date: '2018-09-30',
#   complete: true
# })
# m1.image.attach(io: File.open("app/assets/images/sinatra.jpg"), filename: "sinatra.jpg")
#
# m2 = Project.create({
#   title: "Good Jazz for Everybody...",
#   subtitle: "Legal fess for an effort to make some classic jazz albums public domain.",
#   category_id: music_id,
#   admin_id: User.all.sample.id,
#   pledge_goal: 10000,
#   country: 'USA',
#   story: Faker::Lorem.paragraph(50),
#   end_date: '2018-10-30',
#   complete: true
# })
# m2.image.attach(io: File.open("app/assets/images/jazzforall.jpg"), filename: "jazzforall.jpg")
#
# m3 = Project.create({
#   title: "BAN METAL MUSIC!!!",
#   subtitle: "Metal music is terrible and we WILL ban it!",
#   category_id: music_id,
#   admin_id: User.all.sample.id,
#   pledge_goal: 1000050,
#   country: 'Germany',
#   story: Faker::Lorem.paragraph(50),
#   end_date: '2019-05-01',
#   complete: true
# })
# m3.image.attach(io: File.open("app/assets/images/banmetal.jpg"), filename: "banmetal.jpg")
#
# a1 = Project.create({
#   title: "Starving Artist Society",
#   subtitle: "You never know if they'll make it big...",
#   category_id: art_id,
#   admin_id: User.all.sample.id,
#   pledge_goal: 5500,
#   country: 'UK',
#   story: Faker::Lorem.paragraph(50),
#   end_date: '2018-12-24',
#   complete: true
# })
# a1.image.attach(io: File.open("app/assets/images/starrynight.jpg"), filename: "starrynight.jpg")
#
# c1 = Project.create({
#   title: "Make DC vs. Marvel Happen!",
#   subtitle: "Fan made comics with both franchises!",
#   category_id: comics_id,
#   admin_id: User.all.sample.id,
#   pledge_goal: 10000,
#   country: 'France',
#   story: Faker::Lorem.paragraph(50),
#   end_date: '2020-12-01',
#   complete: true
# })
# c1.image.attach(io: File.open("app/assets/images/dcvmarvel.jpg"), filename: "dcvmarvel.jpg")
#
# fl1 = Project.create({
#   title: "Mandate Pulp Fiction",
#   subtitle: "Lobby law makers to make viewing of Pulp Fiction a legal mandate.",
#   category_id: film_id,
#   admin_id: User.all.sample.id,
#   pledge_goal: 20000,
#   country: 'US',
#   story: Faker::Lorem.paragraph(50),
#   end_date: '2018-10-10',
#   complete: true
# })
# fl1.image.attach(io: File.open("app/assets/images/pulpfiction.jpg"), filename: "pulpfiction.jpg")
#
# fd1 = Project.create({
#   title: "Help Me Eat Potato Salad",
#   subtitle: "I hav enever had potato salad and would like to have some. Please help!",
#   category_id: food_id,
#   admin_id: User.all.sample.id,
#   pledge_goal: 200,
#   country: 'US',
#   story: Faker::Lorem.paragraph(50),
#   end_date: '2018-09-29',
#   complete: true
# })
# fd1.image.attach(io: File.open("app/assets/images/potato.jpg"), filename: "potato.jpg")
#
# g1 = Project.create({
#   title: "Fortnite Addiction Sponsorship",
#   subtitle: "I really want an XboxOne to play Fortnite with my friends and feed my addiction. ",
#   category_id: games_id,
#   admin_id: User.all.sample.id,
#   pledge_goal: 1000,
#   country: 'the Netherlands',
#   story: Faker::Lorem.paragraph(50),
#   end_date: '2018-09-29',
#   complete: true
# })
# g1.image.attach(io: File.open("app/assets/images/fortnite.jpg"), filename: "fortnite.jpg")
#
# g1 = Project.create({
#   title: "Fortnite Addiction Sponsorship",
#   subtitle: "I really want an XboxOne to play Fortnite with my friends and feed my addiction. ",
#   category_id: games_id,
#   admin_id: User.all.sample.id,
#   pledge_goal: 1000,
#   country: 'the Netherlands',
#   story: Faker::Lorem.paragraph(50),
#   end_date: '2018-09-29',
#   complete: true
# })
# g1.image.attach(io: File.open("app/assets/images/fortnite.jpg"), filename: "fortnite.jpg")
#
# p1 = Project.create({
#   title: "Take Baby Animal Photos",
#   subtitle: "Raising money to travel the world taking photos of exotic baby animals.",
#   category_id: photo_id,
#   admin_id: User.all.sample.id,
#   pledge_goal: 45000,
#   country: 'France',
#   story: Faker::Lorem.paragraph(50),
#   end_date: '2019-01-01',
#   complete: true
# })
# p1.image.attach(io: File.open("app/assets/images/animals.jpg"), filename: "animals.jpg")
#
# t1 = Project.create({
#   title: "Raberry Pi for Toddlers",
#   subtitle: "A children's book with tutorials for programming the Pi.",
#   category_id: tech_id,
#   admin_id: User.all.sample.id,
#   pledge_goal: 150000,
#   country: 'UK',
#   story: Faker::Lorem.paragraph(50),
#   end_date: '2019-01-01',
#   complete: true
# })
# t1.image.attach(io: File.open("app/assets/images/pi.jpg"), filename: "pi.jpg")
