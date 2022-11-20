export default function PageNotFound() {
  return (
    <div className="h-screen w-screen grid gap-0 place-items-center place-content-center bg-black text-white">
      <div className="flex items-end gap-2">
        <p className="pb-1">404</p>
        <div className="bg-white w-[1px] h-16" />
        <p>PageNotFound.tsx</p>
      </div>
      <div className="flex items-end gap-2 select-none" style={{ transform: 'scaleY(-0.98)', filter: 'blur(0.8px)' }}>
        <p className="pb-1">404</p>
        <div className="bg-white w-[1px] h-16" />
        <p>PageNotFound.tsx</p>
      </div>
    </div>
  )
}