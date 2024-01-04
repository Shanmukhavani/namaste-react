{/*
LETS ASSUME WE WANT TO CREATE THE FOLLOWING HTML STRUCTURE USING REACT
<div id="parent">
    <div id="child">
        <h1>"Hello React!!"</h1>
    </div>

</div>

*/}

const parent =React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement(
            "h1",
            {},
            "I'm h1 tag"
        )
    )

);
console.log(parent);//object
const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent)

        
{/*TO HAVE TWO HEADINGS INSIDE CHILD
LETS ASSUME WE WANT TO CREATE THE FOLLOWING HTML STRUCTURE USING REACT
<div id="parent">
    <div id="child">
        <h1>"I'M H1 TAG"</h1>
        <h2>"I'M H2 TAG"</h2>
    </div>

    </div>

    ************THE REACT CODE WILL BE AS FOLLOWS**************
         const parent =React.createElement(
            "div",
            {id:"parent"},
            React.createElement(
                "div",
                {id:"child"},[
                React.createElement("h1",{},"I'm h1 tag"),
                React.createElement("h2",{},"I'm h2 tag")
                    
                ])

        );
        console.log(parent);//object
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent)
*/}

{/*  IF YOU HAVE SOME ELEMENT INSIDE YOUR HTML AS BELOW THAT WILL BE REPLACED BY REACT ELEMENT INSIDE THE App.js file

        EXAMPLE:index.html
        <body>
            <div id="root">
                <h1>Shanmukhavani</h1> <---REPLACED BY THE ELEMENTS IN REACT ,CAN'T APPEAR IN BROWSER
                <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
                <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
                <script src="./App.js"></script>
           </div>
        </body>

        EXAMPLE2: hello top of the root and hello below the root
                  
            <body>
                <h1>hello top of the root</h1>
                <div id="root">
                    <h1>Shanmukhavani</h1> <---REPLACED BY THE ELEMENTS IN REACT ,CAN'T APPEAR IN BROWSER
                    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
                    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
                    <script src="./App.js"></script>
                </div>
                <h1>hello bottom of the root</h1>
            </body>

            OUTPUT:
            hello top of the react
            react elements from app.js goes here
            hello bottom of the react 


*/}
