import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";
  
  interface ShoppingListContextType {
    shoppingList: string[];
    addItem: (item: string) => void;
    deleteItem: (item: string) => void;
  }
  
  interface ShoppingListProviderProps {
    children: ReactNode;
  }
  
  export const ShoppingListContext = createContext({} as ShoppingListContextType);
  
  function ShoppingListProvider({ children }: ShoppingListProviderProps) {
    const [shoppingList, setShoppingList] = useState<string[]>([]);
  
    function addItem(newItem: string) {
      const isItemInTheList = shoppingList.some(
        (item) => item === newItem
      );
  
      if (isItemInTheList) {
        alert("Esse item ja esta na sua lista de compras");
      } else {
        const newShoppingList = [...shoppingList, newItem];
        localStorage.setItem('@aluchef:shoppingList', JSON.stringify(newShoppingList)); 
        setShoppingList(newShoppingList);
      }
    }

    function deleteItem(item: string) {
        const filteredShoppingList = shoppingList.filter(itemList => itemList !== item)
        localStorage.setItem('@aluchef:shoppingList', JSON.stringify(filteredShoppingList)); 
        setShoppingList(filteredShoppingList);
    }
  
    useEffect(() => {
      const shoppingList = localStorage.getItem('@aluchef:shoppingList')
      if (shoppingList) {
        setShoppingList(JSON.parse(shoppingList))
      }
  }, [])
  
    return (
      <ShoppingListContext.Provider value={{ shoppingList, addItem, deleteItem }}>
        {children}
      </ShoppingListContext.Provider>
    );
  }
  
  function useShoppingList() {
    const context = useContext(ShoppingListContext);
  
    return context;
  }
  
  export { ShoppingListProvider, useShoppingList };
  