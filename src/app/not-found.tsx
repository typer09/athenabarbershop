/**
 * NOT FOUND PAGE
 * Custom 404 page with consistent branding
 */
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
            <h1 className="text-8xl font-bold text-primary-500">404</h1>
            <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
            <p className="mt-2 max-w-md text-neutral-400">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
                href="/"
                className="mt-8 rounded-lg bg-primary-500 px-6 py-3 font-medium text-neutral-950 transition-colors hover:bg-primary-400"
            >
                Go Back Home
            </Link>
        </div>
    );
}
