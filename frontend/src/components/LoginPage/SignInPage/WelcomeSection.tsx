export default function WelcomeSection() {


    return (
        <div className="grid gap-1 text-center px-6 2xs:px-0">
            <div>
                <p className="text-xl sm:text-2xl lg:text-xl 2xl:text-2xl text-gray-800 dark:text-gray-200">
                    Welcome to
                </p>
            </div>
            <div>
                <h1 className="text-6xl sm:text-7xl lg:text-6xl 2xl:text-7xl font-semibold lg:-mt-1 2xl:-mt-2">
                    Easy Trip!
                </h1>
            </div>
            <div>
                <p className="text-xl sm:text-2xl lg:text-xl 2xl:text-2xl text-gray-800 dark:text-gray-200 px-4.5 2xs:px-0 mt-3 2xs:mt-2">
                    Let's sign in to your account.
                </p>
            </div>
        </div>
    )
}