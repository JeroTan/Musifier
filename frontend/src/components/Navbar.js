/// utilities
import Icon from "@/utilities/Icon";

export default () => {
    return <>
    <header className="relative">
        {/*First Nav*/}
        <nav className="fixed w-full h-20 flex justify-center bg-gray-900 text-slate-50">
            {/*Logo Container*/}
            <div className="w-36 h-full">
                <Icon name="musifier_dark"/>
            </div>
            
        </nav>

        {/*Nav Filler*/}
        <div className="w-full h-20">

        </div>
    </header>
    </>
}