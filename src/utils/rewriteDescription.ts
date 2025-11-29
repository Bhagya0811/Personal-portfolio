export const rewriteDescription = (rawDescription: string): string => {
    // Basic rewriting logic to enhance clarity and professionalism
    const rewrittenDescription = rawDescription
        .replace(/(?:\r\n|\r|\n)/g, ' ') // Remove line breaks
        .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
        .trim(); // Trim leading and trailing spaces

    // Further enhancements can be added here based on specific needs
    return rewrittenDescription;
};