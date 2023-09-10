// function MainContent(){
//     return(
//         <h1>merhaba mustafa</h1>
//     )
// };

// const h1 = React.createElement("h1", {}, "this is a react project")
//  h1.textContent ="this is a react project"
//  h1.className = "header"
//  document.getElementById("root")

// reactDOM.render(
//     <div>
//         <MainContent />,
//     </div>,
//     document.getElementById("root")
// )

// const root = document.getElementById("root");
// const element =  <div>
//        <MainContent />
//        </div>;

// ReactDOM.render(element, root);
// ReactDOM.render(<p>how are you today</p>, document.getElementById("root"));

// const Example = React.createElement("h1", { }, "Hello World");
// ;
// ReactDOM.render(Example, document.getElementById("root"));
const root = document.getElementById("root");
const page = (
  <div>
    <h1>bobs bistro</h1>
    <ul>
      <li>menu</li>
      <li>about</li>
      <li>contact</li>
      <li>login</li>
    </ul>
  </div>
);
ReactDOM.render(page, root);
