# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

department1 = Department.create(name: "Sporting Goods")

department1.items.create(name: "Basketball", price: 6.66)
department1.items.create(name: "Hula Hoop", price: 4.32)
department1.items.create(name: "Baseball Bat", price: 12.34)

department2 = Department.create(name: "Gardening")

department2.items.create(name: "Hose", price: 5.56)
department2.items.create(name: "Shovel", price: 10.91)
department2.items.create(name: "Wheelbarrow", price: 45.56)





# Department.create(name: "Gardening")
# Department.create(name: "Sporting Goods")
# Department.create(name: "Electronics")

