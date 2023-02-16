const heading = React.createElement("h1", {
    //Tag attributes comes here.
    id: "titles"
}, "Hai React");
const heading1 = React.createElement("h2", {
    id: "titles"
}, "Hai React");
const container = React.createElement("div", {
    //Tag attributes comes here.
    id: "container"
}, [
    heading,
    heading1
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
console.log(heading) //gives you object.
;

//# sourceMappingURL=index.bd54d3d4.js.map
