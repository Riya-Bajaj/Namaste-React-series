//--------------------------------------------------------------------

// const heading = React.createElement(  //creactElement is an object of react
//     "h1",                // these are props (all 3)
//     {id: "heading"},             
//     "Hello world from react!"   //child
// );

// // {} --> this object is the place which is used to give attributes to tab like id or class

// console.log(heading)   //return us an object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // < !--render heading inside root-->

// root.render(heading);   //converts the object to h1 tag and displays on
//-------------------------------------------------------------------------




//-----------------------------------------------------------------------
/* 
<div id = "parent">
    <div id="child">
        <h1>"hellooo"</h1>
    </div>
</div> 

ReactElement is object => HTML that browser understands
*/

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div", 
//         {id: "child"}, 
//         React.createElement("h1", {}, "hellooo"))
// )

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div", 
        {id: "child"}, 
        [React.createElement("h1", {}, "hellooo"),React.createElement("h2", {}, "Riya")])            //array of children
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
//-----------------------------------------------------------------------

