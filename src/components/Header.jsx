import {useState} from 'react';
import {Link,NavLink} from 'react-router-dom';
import {Menu,X,ArrowUpRight} from 'lucide-react';
export default function Header(){
 const [open,setOpen]=useState(false);
 const links=[['Work','/work'],['Services','/services'],['Studio','/studio']];
 return <header className="site-header"><div className="header-inner">
  <Link to="/" className="wordmark" onClick={()=>setOpen(false)}><span className="mark">S</span><span>SLOFY<span className="wordmark-light">STUDIO</span><sup>®</sup></span></Link>
  <button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
  <nav className={open?'main-nav nav-open':'main-nav'}>{links.map(([label,path])=><NavLink key={path} to={path} onClick={()=>setOpen(false)}>{label}</NavLink>)}<Link className="nav-contact" to="/contact" onClick={()=>setOpen(false)}>Start a project <ArrowUpRight size={15}/></Link></nav>
 </div></header>
}