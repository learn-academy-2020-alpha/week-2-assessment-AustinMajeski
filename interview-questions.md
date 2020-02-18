# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.




1. What does CRUD stand for?

  Your answer:
	I don't remember.

  Researched answer:
	The acronym, stands for Create, Retrieve, Update, Delete.
		- It is a basic function of any computer database or a program with persistent storage. 
		- This is what leads to easy-to-navigate user interface.




2. What are the 5 HTTP verbs?

  Your answer:
	- Push
	- Retrieve
	- Read
	- Update
	- Delete

  Researched answer:

	- GET	:	fetch information

	- HEAD	:	functionally identical to a GET, but instead of returning the response body only the headers are returned.
		-- This allows you to check the headers before deciding whether or not to fetch the whole body.
		-- So, you might check what the Last-Modified value was, to see if your local copy was out of date; if it was, you could then make a GET request.
	
	- POST	:	a statement by the client that a new “subordinate resource” should be created beneath the given URI.
		-- Examples:  (1) Adding a new post to a messageboard thread.
					  (2) Adding a new post to a blog.  
					  (3) Sending a message via a contact form.
	
	- PUT	:	 instructs the server to replace a resource.
	
	- DELETE	:	instructs the server to delete the resource identified by the given URL.

	------------------------------------------------------------------------------------------

	 * There are also these HTTP verbs:    TRACE, OPTIONS, CONNECT, and PATCH




3. When creating a basic (stateless) class component in React, what are the necessary elements needed to render "Hello World" on the page?

  Your answer:
	
	> a 'Component' class
	> a render method
	> the render method to return the div containing the text "Hello World"
	> place '<COMPONET_NAME />' inside the 'App' class's return statement of its render method


	//////////////////////////////////////////////////////////////////////////////////////////

	(1)
	- create a new class extending 'Component'
	- (importing nothe 'React' and 'Component' from 'react')  ->  only if the class is located in a different file
	- inside the class:
		- create a 'render' method
		- inside the 'render' method, create a return statement (contents can be encompassed by parentheses '(' and ')')
		- inside the 'return' statement, place one pair of 'div' or 'React.Fragment' tags, and place HTML tags inside them.
			- ^ inside the 'div'/'React.Fragment' is where your "Hello World" phrase will go.
	- export the class

	(2)
	- inside your 'App' class, call the newly made componet.
		- inside the 'div'/'React.Fragment' tags inside the 'return' statement of the 'render' method,
			- place '<COMPONET_NAME />' 

	Example:

		========================================================
		--------------------------------------------------------
		'MyComponent' js file in a 'components' folder inside of the 'src' (source) folder
		--------------------------------------------------------
			import React, { Component } from 'react'
			class MyComponent extends Component{
				render(){
					return(
						<React.Fragment>
							<p>Hello World</p>
						</React.Fragment>
					)
				}
			}
			export default MyComponent
		--------------------------------------------------------



		--------------------------------------------------------
		Inside the 'App' js file inside the 'src' folder
		--------------------------------------------------------
			import React, { Component } from 'react'
			import MyComponent from './components/MyComponent'
			class App extends Component{
				render(){
					return(
						<React.Fragment>
							<MyComponent />
						</React.Fragment>
					)
				}
			}
			export default App
		--------------------------------------------------------
		========================================================
		


  Researched answer:
	
	- in your HTML, have dome div with some id to replace with your react components
	- after creating a component, call
		"ReactDOM.render(<MyAppComponent />, document.getElementById('THE_ID'));"
	- "MyAppComponent" should include a 'div' encompassing your text: "Hello World"
	- creating the "MyAppComponent" class is stated above in "Your Answer"




4. What is JSX?

  Your answer:
	JSX is React's syntaxt for writing HTML tags

  Researched answer:
	JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code.
	 > ( by using JSX you can write concise HTML/XML-like structures (e.g., DOM like tree structures) in the same file as you write JavaScript code )




5. What is the difference between React state and props?

  Your answer:
	State:	local variables for the specific component.
	Props:	arguments passed to a component when it is constructed.

  Researched answer:
	State:	State is an object of variables, directly initialized and managed by the component.
	Props:	Props are variables passed to a component by its parent component.




6. STRETCH: What is hoisting in JavaScript?

  Your answer:
	I've heard the term, but don't know what it is.
	Is it when your create an object or do something with data, and do not update your HTML page until it's all done?

  Researched answer:
	Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
	(*) However, in contrast, undeclared variables do not exist until code assigning them is executed.
		- Therefore, assigning a value to an undeclared variable implicitly creates it as a global variable when the assignment is executed.
		- ! - This means that, all undeclared variables are global variables.
	




## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

## notes to self.  did not look much into these yet, but am familiar


- React lifecycle methods
	> look into 'mounting'

- API
	> to my knowledge, it's a group of code independant from the rest of the program that can receive an input and give an output, and will do a specific thing.
	>> Ex) an encryption API can take in a bit of text as inout and give the user back the encyrpted version of the text

- event.preventDefault()
- DOM events
