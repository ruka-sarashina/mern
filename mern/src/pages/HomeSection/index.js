import React from 'react'

const HomeSection = () => {
    return (
        <section id="home" className="pt-24 lg:pt-28 xl:pt-40 xl:pb-20">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <span
                            className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Taufik NurFauzi</span>
                        <h2 className="font-medium text-second text-lg mb-5 lg:text-2xl">Student | <span className="text-dark">Web
                            Developer</span></h2>
                        <p className="font-medium text-second mb-10 leading-relaxed">Mari Menjelajah Dunia <span
                            className="text-dark font-bold">
                            Programmer 👨‍💻
                        </span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection
