export interface INavLink<T> {
    label: string;
    href: T;
    isPathActive?: boolean;
}