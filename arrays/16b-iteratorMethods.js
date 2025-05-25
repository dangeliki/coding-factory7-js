const users = [
  {id: 1 , firstname: "Alice", email: "alice@aueb.gr", isActive: true},
  {id: 2 , firstname: "Bob", email: "bob@aueb.gr", isActive: false},
  {id: 3 , firstname: "Tom", email: "tom@aueb.gr", isActive: true}
]

users.forEach(u => console.log(u))

const emails = users.map(user => user.email)
console.log(emails)

const activeUsers = users.filter(users => users.isActive)
console.log(activeUsers)

