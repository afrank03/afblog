# JavaScript variables - Best practices

## Intro
If you want to become a really good software engineer, it’s not enough just to learn some basic principles of the language. It’s not even enough to know language at quite an advanced level. To become a genuinely decent developer, you need to know about things like: **Clean Code**, **Best practices**, **Application design**, **Patterns** etc. which are not directly connected to a specific programming language. 

In this post I want to share some good practices developers use when they declare variables. But before we dove into action, let’s answer one question first.

## What is best practice?
Best practice is pretty much anything that will make your code better, more solid, readable, well structured, scalable and easy to understand. But this is very vague description isn’t it.? So let me give you a little glimpse of what best practices are, using JavaScript variables as an example.

## Naming convention
Giving a good name to your variable is crucial. From how you will name you variables will depend the future of your application code. Because it will dictate how easy it is: 
* To understand your code
* To navigate it
* To maintain it

So what we can do to genuinely improve naming? 

### Use Case-separation
There are few known **case-separators**

```js
let camelCase;
let PascalCase;
let snake_case;
const SNAKE_UPPER_CASE = “foo”;
```

These are major case-separators. As you can see main purpose of using them is to separate words in your variable names. This way your code will already be much easier to read. 

Let’s do a quick comparison

```js
const responsefromuserapi = {}; // Bad
// VS
const responseFromUserApi = {}; // Good
```

So the benefit is quite obvious **but** which one to pick?
I will give you few tips:
1. If your codebase already uses one of the conventions, just follow it - keep consistency, even if it not your favorite. 
2. If codebase is messy or doesn’t have any conventions, pick one and follow it. In that case you will have to protect your choice and make sure others are following it too. 
3.  If you are working with JavaScript agreed standard is to use `camelcase` for variables, object properties, functions, and object methods.
4. `PascalCase` is often used for class names. 
For example:

```js
class UserAvatar {
// ...
}
```

5. `SNAKE_UPPER_CASE` is often used to symbolize an application level constants. Usually to contain configurations needed for your app to function. For example it may contain some API connection strings, tokens, constant value for app settings, like number of connections etc.

### Meaningful names
There is a concept of **self documented code** which you may heard of. It basically means, that you document your code, buy giving good, descriptive names to your variables and functions, that people can read like a book and understand, what is going on. It’s quite difficult craft, and even senior engineers are struggling with that from time to time. But it’s definitely possible and worth getting better at. 

So first thing first, try to forget about things like `a, b, c` names. Loads of tutorials will be using these to simplify examples, but in real codebase these names are really bad, because they do not mean anything. 

You may often think that shorten variable is better, because you save bites in your code etc. But this is mainly false, especially if we talk about JavaScript. Your code will be minimized and transpile for production anyway. So all your well written names will end-up being exactly `a, b, c` in your browser. But for Engineers, while you work with the code, keep it as descriptive as possible. Few examples of bad VS good

```js
const n = “Arthur” // Bad
const name = “Arthur”; // Good

const ddmmyy = “01.01.1970”; // Bad
const dateOfBirth = “01.01.1970”; // Good

const userAUrl = “...”; // Bad
const uaUrl = “...”; // Bad
const uau = “...”; // Bad
const userAvatarUrl = “...”; // Good
```

So don’t be afraid to make a little bit bigger but more descriptive name. And don’t be lazy too. People love to shorten name to save milliseconds of their time now, but they do not realise they and others will spend minutes or maybe even hours to figure out in three month what was meant by `uau`.

Try to not over-explain your variables too, so for example something like `userObject` or `basketListArray` will be a bit overkill. People should have intellisense in their IDE’s and if you name variables wisely it will be obvious what type of content there will be.

### Rule exceptions
Sometimes you may have to loop through an array and you need an iterator, which usually is named as `i` or you may need some math operations, in these cases people often use `x, y` names etc. These will be exceptions from general rules.

For majority of your code, I hope you got the idea 💡.

## Declaration
Try to declare you variables as higher to the top as possible. Ideally stack all declarations together if possible or at least group them. This will give you and other devs better idea what variables you have used in further code as well as you will always know where to look for initial declarations if you need them. So try to avoid creation of variables on fly in the middle of your scripts.

## Mutability & Scope
Good programming practice is to build your application with everything closed, scoped, and protected as much as possible. This is needed to prevent potential bugs. And to ensure your code will be used right. 

So in JavaScript there is not many ways you can protect your code privacy. But what you can do, is use `const` and `let` to prevent mutations and control scoping of your data. 

So a good practice would be to use keyword `const` for every variable declaration and change it only when it’s really needed. And use `let` over `var` if you need mutable data, but you will still be in control of scope. This way you will reduce potential to bugs in you code.

## Wrap-up
That’s it folks, thanks for reading this post until this point. It end-up being quite long article. 
I hope you enjoyed it. If you have any question or you want to know more, put comments down bellow. 

### Further reading / watch
I have a YouTube channel “**FrankCoding**” where I explain some of that stuff already and will be adding more videos on a regular basis about JavaScrip, programming best practices and so on.

If you are really interested in getting you code Clean, I suggest you take a look into this book - “ Clean Code: A Handbook of Agile Software Craftsmanship” by Robert C. Martin
