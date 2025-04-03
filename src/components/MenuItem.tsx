import { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
}

export default function MenuItem({item} : MenuItemProps) {
  return (
    <button className="border-2 border-red-400 hover:bg-red-200 w-full p-3 flex justify-between">
        <p>{item.name}</p>
        <p className="font-black">Bs. {item.price}</p>
    </button>
  )
}
