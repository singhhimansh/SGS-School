function Events({setHambState, hambState}) {
    return(

        <div className={`h-screen relative flex flex-col justify-center ${ hambState==='close'? '' : 'blur-md -z-20' }`}>
            <h1 className="text-2xl capitalize font-bold text-center">underdevelopment</h1>
        </div>

    );

    
}

export default Events;