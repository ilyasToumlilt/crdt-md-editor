import { Node } from "slate";

export default function useLocalStorageDriver(value: Node[]): void {
    const content = JSON.stringify(value);
    localStorage.setItem('content', content);
}