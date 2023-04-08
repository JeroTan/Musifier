
export default ()=>{
    let cssers = [
        'hidden',
        'bg-red-500',
        'bg-yellow-500',
        'bg-blue-500',
        'bg-purple-500',
        'bg-orange-500',
        'bg-emerald-500',
        'bg-amber-800',
        'bg-pink-500',
        'bg-gray-500',
        'bg-slate-50',
        'bg-slate-100',
        'bg-slate-200',
        'bg-slate-300',
        'bg-slate-400',
        'bg-gray-800',
        'bg-gray-900',
        'text-slate-100',
        'fill-slate-100',
        'fill-indigo-700',
        'border',
        'overflow-hidden',
        'left-[40%]',
        'left-0',
        'left-4'
    ]

    return <>
        <div className={cssers.map(item=>item+' ')}></div>
    </>
}