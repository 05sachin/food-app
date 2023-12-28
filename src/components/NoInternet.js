const NoInternet = ()=>{
    return (
        <div className="noInternet">
            <h2 >Looks like you're offline!! Please check you Internet Connection...</h2>
            <h3>Try:</h3>
            <ul>
                <li>Checking the network cables, modem, and router</li>
                <li>Reconnecting to Wi-Fi</li>
            </ul>
        </div>
    )
}

export default NoInternet;