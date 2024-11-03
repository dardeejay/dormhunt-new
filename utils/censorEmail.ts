export function censorEmail(email: string): string {
    try {
        // Split the email into local and domain parts
        const [local, domain] = email.split('@');
        
        // Determine the number of characters to censor
        const numToCensor = local.length - 2; // Censor everything except the first and last character
        
        let censoredLocal: string;
        
        if (numToCensor > 0) {
            censoredLocal = local[0] + '*'.repeat(numToCensor) + local[local.length - 1];
        } else {
            censoredLocal = local; // In case the local part is too short to censor anything
        }
        
        // Reconstruct the email address
        const censoredEmail = `${censoredLocal}@${domain}`;
        return censoredEmail;
    } catch (error) {
        return "Invalid email format";
    }
}
