package main

import "fmt"

type Person struct {
  Name, Email, Phone string
  Age uint8
}

func main() {
  bob := Person{Name: "Bob", Email: "bob@gmail.com", Age: 23}
  alison := Person{Name: "Alison", Email: "alison@gmail.com", Age: 18}
  karen := Person{}
  people []Person 
  people[0] = bob
  people[1] = alison
  people[2] = karen

  fmt.Print(people[0])
  fmt.Print(people[1])
  fmt.Print(people[2])

}
