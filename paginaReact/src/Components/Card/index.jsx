const Card=() => {
    return (
        
        <div className="bg-teal-400 cursor-pointer w-100 h-80 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5" >
                <span className="absolute bottom-0 left-0 bg- rounded-lg text-black text-xs m-2 p-1">
                    {" "}
                    Dispositivos{" "}
                </span>
                <img className="w-full h-full object-cover rounded-lg"
                    src="https://falabella.scene7.com/is/image/FalabellaCO/64998877_3?wid=800&hei=800&qlt=70"
                    alt=""
                    srcSet=""
                />
                <div className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1">
                    +
                </div>
            </figure>
            <p className="flex justify-between ">
                <span className="text-sm font-light">Celular</span>
                <span className="text-lg font-medium">$123</span>
            </p>
            
</div>
       
    )
}
export default Card