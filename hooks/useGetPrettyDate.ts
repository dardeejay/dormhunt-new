export const useGetPrettyDate = () => {
    const formatSecondsToPrettyDate = (seconds: number): string => {
        const date = new Date(seconds * 1000);
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
    const formatSecondsToHours = (seconds: number): string => {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
    }
    return { formatSecondsToPrettyDate, formatSecondsToHours };
}
