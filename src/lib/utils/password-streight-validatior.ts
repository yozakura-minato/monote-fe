export default function isStrongPassword(password: string): boolean {
    if (password.length < 8) return false;

    let level = 0;
    if (/[A-Z]/.test(password)) level++;
    if (/[a-z]/.test(password)) level++;
    if (/\d/.test(password)) level++;
    if (/[^A-Za-z0-9]/.test(password)) level++;
    return level >= 2;
};