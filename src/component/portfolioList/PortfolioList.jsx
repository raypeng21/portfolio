import './portfolioList.scss'

export default function PortfolioList({title,id, active,setselected}) {
    return (
        <li className={active ? 'portfolioList active' : 'portfolioList'} 
        onClick={()=>setselected(id)}>
            {title}
        </li>
    )
}
