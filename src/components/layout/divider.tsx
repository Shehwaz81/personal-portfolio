

export const Divider = () => {
    return (

    <div className="flex items-center justify-center mb-10 mt-5 mb-5">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent ml-10"></div>
            <div className="mx-3 flex"> 
                <div className="text-cyan-400 text-2xl animate-pulse scale-110">⬢</div>
            </div>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mr-10"></div>
    </div>
    )
}

export default Divider