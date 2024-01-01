import { useRouteError,Link } from "react-router-dom";
const Error = ()=>{
    const error = useRouteError();
    console.log(error)
    return (
       <div className="error-wrapper">
            <div className="error">
                <h1>Oops!!!</h1>
                <h2>Something went wrong!!</h2>
                <h3>{error.status} : Page {error.statusText}</h3>
                <br></br>
                <p>
                 Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
                </p>
                <Link to={"/"} className="errorBtn">Go Back</Link>
            </div>
       </div>
    );
};

export default  Error;