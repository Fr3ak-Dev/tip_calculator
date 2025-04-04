import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: () => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button className="border-2 border-red-400 hover:bg-red-200 p-3 text-lg rounded-lg flex justify-between w-full"
      onClick={addItem}>
        <p>{item.name}</p>
        <p className="font-black">Bs. {item.price}</p>
    </button>
  )
}
