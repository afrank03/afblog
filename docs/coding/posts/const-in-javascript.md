# JavaScript: const explained

> Const is like a light side of the force in the dark world of JavaScript  

## Intro
Since ECMA Script 2015 aka ES6, has been introduced in 2015, we have 2 extra ways to declare variables in JavaScript. In this quick post I will talk you through the most interesting one, in my personal opinion way to declare “Variable” in JavaScript today.

## How to
`const` in modern JS is probably the most used keyword to declare a variable. Though word variable is not that accurate now, with this way of declaration. As you probably realised, `const` stands for **Constant** so value is no really variable anymore. Though in JavaScript it’s never that simple, and I will explain why in just a moment. 

In order to declare a variable with keyword `const` you simply type something like this:

```js
const username = “BobbyBaz”;
```

And here you go, you have created a **constant** in JavaScript. This type of variable or constant if to be more precise, can contain any type of data, as you would expect from a regular variable.

## Pros
Keyword `const` finally brings constants support to JavaScript, which means - 
* Less chance for bugs 
* Controlled mutations
* Less magic with overridden values

## Cons
Even though it brings constants support to JavaScript, if you are familiar with JS world a little bit you will know that there are always caveats to pretty much everything. So what’s the trick with const? 

The trick is that, if you use `const` for simple primitives aka data types like `number`, `string`, `bullean` it will work exactly as you would expect. You will not be able to reassign values to these constants. See examples bellow:

```js
const age = 30;
const name = “Arthur”;
const drive = true;
// Re-assign values to constants should lead to compiler error
age = 21; // ERROR
name = “Frank”; // ERROR
drive = false; // ERROR
```

As shown in the example above with simple types `const` works just perfect and as you would expect.

Now let’s see an example where it fails to act as a proper constant.

```js
// JavaScript Json object
const user = {
	name: “Arthur”,
	age: 30,
	drive: true
};

user.name = “Frank”; // Will change user name to new value
user.title = “Mr”; // Will add new property with value
delete user.name; // Will remove ‘name’ property

user = {foo: 123}; // ERROR
```

When we set Object or an Array as a `const` their inner content/value still can change. You will be able to push and delete items from an array, as well as operate as you wish with object properties. 

Good thing is that you will not be able to re-assign top level type of the variable. So you will not be able to change Object const to an array or number. 

Example:
```js
const bookList = [“Book1”, “Book2”];

bookList.push(“book3”); // Will push 3rd value to an array
bookList = 10; // ERROR
```

::: tip Pro tip
In programming there is general good practise to scope everything to be as private and closed as possible until it’s really needed to be exposed or mutable. 

So in case of `const` good practise is to always use it in a first place for all your variables, and replace with other declarations only if there is extreme need for it!
:::

That’s it folks, I hope you found this post useful. See ya in the next one 🔥