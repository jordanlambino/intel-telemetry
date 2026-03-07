import Contact from "./contact"

type TitleProps = {
    title: string
    subtitle?: string
}

export default function Title({ title, subtitle }: TitleProps) {
    return (
        <header className="snap-start bg-slate-700 text-white py-20 text-center">
            <h1 className="text-4xl font-bold max-w-4xl mx-auto px-8">
                {title}
            </h1>
        {subtitle && (
            <p className="text-xl mt-6 opacity-90">
                {subtitle}
            </p>
        )}
            <section className="flex justify-center items-center py-4">
                <Contact
                    name="Reva Agrawal"
                    email="..."
                    github="..."
                />
                <span className="mx-2 text-gray-400 text-sm">·</span>
                <Contact
                    name="Jordan Lambino"
                    email="jaryel.lambino@gmail.com"
                    github="https://github.com/jordanlambino"
                />
                <span className="mx-2 text-gray-400 text-sm">·</span>
                <Contact
                    name="Dhruv Patel"
                    email="..."
                    github="..."
                />
            </section>
            
            <section className="flex justify-center items-center">
                <Contact
                    name="Yu-Xiang Wang"
                    email="yuxiangw@ucsd.edu"
                    github="..."
                />
            </section>
        </header>
    )
}