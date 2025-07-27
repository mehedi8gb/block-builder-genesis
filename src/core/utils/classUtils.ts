export const mergeClasses = (...classes: (string | undefined | false)[]): string => {
    return classes.filter(Boolean).join(' ');
};
