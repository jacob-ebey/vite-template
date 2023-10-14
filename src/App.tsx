import React from 'react';
import { Button } from "~/components/ui/button";

const HeroWithCTAs: React.FC = () => {
    return (
        <section className="text-center py-20 bg-gray-100 dark:bg-black">
            <h1 className="text-4xl mb-4 font-bold text-gray-800 dark:text-white">
                Go quickly from idea to prototype.
            </h1>
            <p className="text-xl mb-10 text-gray-500 dark:text-gray-300">
                Generate new, or iterate on existing React components.
            </p>
            <div className="flex justify-center gap-4">
                <Button variant="outline" name="signInBtn">
                    Sign in
                </Button>
                <Button variant="ghost" name="signUpBtn">
                    Sign up
                </Button>
            </div>
        </section>
    )
}

export default HeroWithCTAs;