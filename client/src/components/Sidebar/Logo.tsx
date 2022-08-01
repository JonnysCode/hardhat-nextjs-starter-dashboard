import { TbPacman } from 'react-icons/tb'

export function Logo(props: any) {
  return (
    <div {...props}>
      <div className="mx-4 my-8 flex flex-shrink-0 flex-row items-center gap-1 ">
        <div className="flex">
          <TbPacman className="h-14 w-14 text-secondary"></TbPacman>
        </div>
        <div className="flex">
          <h1 className="text-3xl font-bold">Pacman</h1>
        </div>
      </div>
    </div>
  )
}
