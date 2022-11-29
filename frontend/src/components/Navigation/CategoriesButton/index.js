/******************************** IMPORTS ********************************/
// libraries
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { thunkReadAllDepartments } from "../../../store/departmentsReducer";
// local files
import './CategoriesButton.css'

/******************************* COMPONENT *******************************/
function CategoriesButton() {

    /****************** access store *******************/
    const departmentsState = useSelector(state => state.departments)

    /************ key into pertinent values ************/
    const allDepartments = Object.values(departmentsState.allDepartments);

    /************ reducer/API communication ************/
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(thunkReadAllDepartments())
    }, [dispatch])

    /****************** manage state *******************/
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    /***************** handle events *******************/
    // toggle menu
    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
        setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

  /************* conditional components **************/
  let menuOptions = (
    <>
        <div>
            <h1>All Categories</h1>
        </div>

        {allDepartments && allDepartments.map((department) => (
            <NavLink exact to={`/departments/${department.id}`}>
                <div>{department.name}</div>
            </NavLink>
        ))}
    </>
    )


  /***************** handle events *******************/




  /**************** render component *****************/
  return (
    <>
      <button onClick={openMenu} className='CategoriesButton-container'>
        Categories
      </button>

      {showMenu && (
        <div className="categories-menu-side-panel-container">
          {menuOptions}
        </div>
      )}
    </>
  );
}


/******************************** EXPORTS ********************************/
export default CategoriesButton;
