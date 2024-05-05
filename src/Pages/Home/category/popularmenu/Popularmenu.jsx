import { useEffect } from "react";
import Sectiontitle from "../../../../components/sectiontitle/Sectiontitle";
import { useState } from "react";
import Menuitem from "../../../../Shared/Menuitem/Menuitem";


const Popularmenu = () => {
     const[menu, setMenu] = useState([]);
           
    useEffect( ()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then (data => {
                //  console.log('hi i am .......', data);
            const popularItems = data.filter(item => item.category === 'popular')

            setMenu(popularItems) });
            

    }, [])
    return (
        <section className="mb-12">
            <Sectiontitle
             subHeading={"Popular items"}
             heading={"From our menu"}
            ></Sectiontitle>
            <div className="grid md:grid-cols-2 gap-10 px-10">
             {
               menu.map(item => <Menuitem
               key={item._id}
               item={item}
               ></Menuitem>)
             }
            </div>
            
        </section>
    );
};

export default Popularmenu;