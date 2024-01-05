const heading = React.createElement(
    "h1",
    {},
    "HelloWorld from React!!!"
)
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

    {/* If you put only {}, In console you can see as following
            <div id="root">
                    <h1 >HelloWorld from React!!!</h1>
            </div>
   */}
   // {id:"heading" ,xyz:"abc"},-->If you keep this,In console you will see heading is placed inside root
   //<div id="root">
        //<h1 id="heading" xyz="abc">HelloWorld from React!!!</h1>
   //</div>
    //React.createElement is a object .
//if you do console.log(heading) you can see heading is a object.


    