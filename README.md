# fliptable

A column oriented representation of your table will save you a lot of bytes!

Do your tables look like this in JSON?

`````
[
  {"name": "Anne", "age": 25, "city": "Stuttgart"},
  {"name": "Mike", "age": 33, "city": "London"},
  {"name": "Juli", "age": 27, "city": "Paris"}
]
`````

`fliptable` flips row oriented arrays of objects into

`````
{
  "name": ["Anne", "Mike", "Juli"],
  "age": [25, 33, 27],
  "city": ["Stuttgart", "London", "Paris"]
}
`````

a column oriented object of arrays.
