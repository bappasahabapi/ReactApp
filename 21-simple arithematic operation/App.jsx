import React from 'react';

function add(a,b){
    let sum =a+b;
    return sum;
}
function sub(a,b){
    let sub =a-b;
    return sub;
}
function mul(a,b){
    let mul =a*b;
    return mul;
}
function div(a,b){
    let div =a/b;
    div =div.toFixed(3);
    return div;
}
// el,div};xport default add;
// export {sub,mu

function App() {
    return (
        <>
            <ul>
                <li> Add the two number {add(40, 4)}</li>
                <li> sub the two number {sub(40, 4)}</li>
                <li> mul the two number {mul(40, 4)}</li>
                <li> div the two number {div(40, 4)}</li>
                {/* <li> div the two number {div(40, 3)}</li> */}
            </ul>
        </>
    );
}
export default App;