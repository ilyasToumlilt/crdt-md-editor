import { Node } from "slate";

//TODO: this can be a more advanced reducer component...

const CONTENT_ITEM_NAME: string = "md-editor-content";

export function setLocalStorageValue(value: Node[]) {
  const content = JSON.stringify(value);
  localStorage.setItem(CONTENT_ITEM_NAME, content);
}

/**
 * This is a custom hook to use the local storage driver to handle values.
 *
 * @param value default value that will be used if no one is found stored in the persistent Local Storage
 */
export function useLocalStorageDriver(defaultValue: Node[]): Node[] {
  // first, we check if the value is not already stored
  const localFirst = localStorage.getItem(CONTENT_ITEM_NAME);
  const initialValue =
    localFirst !== null ? JSON.parse(localFirst) : defaultValue;

    /*
  useEffect(() => {
    function handleValueChanged(newValue: Node[]) {
      const content = JSON.stringify(newValue);
      localStorage.setItem(CONTENT_ITEM_NAME, content);
    }

    return () => {
      // nothing for now
    };
  });*/

  return initialValue;
}