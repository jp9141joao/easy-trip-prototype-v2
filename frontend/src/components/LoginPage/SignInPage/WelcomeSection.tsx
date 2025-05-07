export default function WelcomeSection() {

    return (
        <div className="grid gap-1 text-center">
            <div>
                <p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-200">
                    Welcome to
                </p>
            </div>
            <div>
                <h1 className="text-6xl sm:text-7xl font-semibold">
                    Easy Trip!
                </h1>
            </div>
            <div>
                <p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-200">
                    Let's sign in to your account.
                </p>
            </div>
        </div>
    )
}