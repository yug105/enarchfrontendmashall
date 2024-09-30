import Image from "next/image"
const Homepage = () => {
    return (
        <div className=" sticky pt-20 w-full top-0 left-0">
            <img src="https://picsum.photos/seed/picsum/200/300" alt="image" width={100} height={100} className="w-full px-5 py-4"/>
            <div className="relative mx-5">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="image" width={100} height={100} className="w-full h-full object-cover"/>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 px-5 py-4" ></div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white-400 text-xl"> hi thereejhbgcjeqgcjg</div>
            </div>
            <div className="w-full px-5 py-4 flex justify-around gap-2 ">
                <div>
                    <img src="https://picsum.photos/200/300?grayscale" alt="image" width={300} height={200} className="object-fill w-full h-full"></img>
                </div>
                <div>
                    <img src="https://picsum.photos/200/300?grayscale" alt="image" width={600} height={200} className="object-fill w-full h-full"></img>
                </div>
            </div>
            <div className=" flex justify-start w-full px-5 py-4 bg-slate-950 my-3">
                <div className="text-white text-xs">@2024 cpyrigth pvtltd....fhegfj</div>

            </div>
        </div>
        
    )
}
export default Homepage