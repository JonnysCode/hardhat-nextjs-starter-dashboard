import clsx from 'clsx'

const Card = ({ children, className }: any) => {
  return (
    <div className={clsx(className, 'card m-4 bg-base-300 shadow-xl')}>
      {children}
    </div>
  )
}

export default Card
