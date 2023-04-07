export default (props)=>{
    let {name, theX, theY, color = false, tailwindClass = '', ...others} = props;
    let returner = <></>;
    switch(name){
        case 'root':
            returner = <circle cx={theX} cy={theY} r="14.5" fill={color?color:'#EF4444'} className={tailwindClass}/>;
        break;
        case 'r2':
            returner = <circle cx={theX} cy={theY} r="14.5" fill={color?color:'#4D7C0F'} className={tailwindClass}/>;
        break;
        case 'r3':
            returner = <circle cx={theX} cy={theY} r="14.5" fill={color?color:'#0F766E'} className={tailwindClass}/>;
        break;
        case 'r4':
            returner = <circle cx={theX} cy={theY} r="14.5" fill={color?color:'#1D4ED8'} className={tailwindClass}/>;
        break;
        case 'r5':
            returner = <circle cx={theX} cy={theY} r="14.5" fill={color?color:'#6D28D9'} className={tailwindClass}/>;
        break;
        case 'r6':
            returner = <circle cx={theX} cy={theY} r="14.5" fill={color?color:'#BE185D'} className={tailwindClass}/>;
        break;
        case 'trans':
            returner = <circle cx={theX} cy={theY} r="14.5" fill={color?color:'#000000'} fillOpacity={0.0} className={tailwindClass}/>;
        break;
    }

    return <>
        <g cursor={'pointer'} {...others}>
            {returner}
        </g>
    </>
}