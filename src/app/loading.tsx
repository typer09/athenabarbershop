/**
 * LOADING PAGE
 * Global loading state for route transitions
 */
export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                {/* Animated loading spinner */}
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-neutral-700 border-t-primary-500" />
                <p className="text-sm text-neutral-400">Loading...</p>
            </div>
        </div>
    );
}
