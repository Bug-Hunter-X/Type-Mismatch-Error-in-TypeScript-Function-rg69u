function greeter(person: string) {
  return "Hello, "+ person;
}

let user = ["Alice", "Bob", "Eve"];

user.forEach(person => console.log(greeter(person))); // Correct solution: iterating through the array