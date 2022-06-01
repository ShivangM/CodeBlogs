import React from 'react'

function Blog() {
    return (
        <div className="relative w-full md:w-1/2 lg:w-1/3 p-6">
            {/* <Image className="hidden lg:block absolute top-0 left-0 -ml-40 mt-24" layout='fill' src="zospace-assets/lines/left-line.svg" alt=""/> */}
            <div className="relative z-10 bg-gray-700 rounded-lg cursor-pointer hover:scale-105">
                <div className="relative mb-8 h-52">
                    {/* <Image className="w-full h-full rounded-lg object-cover object-top" src="https://images.pexels.com/photos/6822288/pexels-photo-6822288.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=450&amp;w=940" alt=""/> */}
                    <div className="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-blue-500">
                        <p className="text-xl font-bold">30</p>
                        <p className="text-xs uppercase text-gray-300">Feb</p>
                    </div>
                </div>
                <div className="px-14 pb-10"><a className="inline-block pt-4 text-lg text-white hover:text-gray-100 font-bold border-t border-gray-400" href="#">Is remote work working? A one year check-in</a></div>
            </div>
        </div>
    )
}

export default Blog