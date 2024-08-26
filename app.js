const heading = React.createElement("h1", {class: "heading"}, "Hello World from react!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "This is h1 tag"),
        React.createElement("h2", {}, "This is h2 tag")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "This is h1 tag"),
        React.createElement("h2", {}, "This is h2 tag")
    ])
])

root.render(parent);