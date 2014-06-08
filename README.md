# fliptable

A column oriented representation of your table will save you on average about 50% of bytes!

Do your tables look like this in JSON?

`````
[
  {"name": "Anne", "age": 25, "city": "Stuttgart"},
  {"name": "Mike", "age": 33, "city": "London"},
  {"name": "Juli", "age": 27, "city": "Paris"}
]
`````

`fliptable(table)` flips a row oriented array of objects into

`````
{
  "name": ["Anne", "Mike", "Juli"],
  "age": [25, 33, 27],
  "city": ["Stuttgart", "London", "Paris"]
}
`````

a column oriented object of arrays.

## Save 50%

Our row oriented sample table is 449600 characters long using `JSON.stringify(table)`.
If you apple `fliptable(table)` the JSON string is only 212382 long.
You saved more than 50% without losing any information!
And yoo can flip the table a second time and get exactly what you had before.
`table = fliptable(fliptable(table))`
