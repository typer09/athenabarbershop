"use client";

/**
 * ERROR PAGE
 * Global error boundary for the app
 */
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
            <h1 className="text-4xl font-bold text-primary-500">
                Something went wrong
            </h1>
            <p className="mt-4 max-w-md text-neutral-400">
                We apologize for the inconvenience. Please try again.
            </p>
            <button
                onClick={reset}
                className="mt-8 rounded-lg bg-primary-500 px-6 py-3 font-medium text-neutral-950 transition-colors hover:bg-primary-400"
            >
                Try Again
            </button>
        </div>
    );
}
