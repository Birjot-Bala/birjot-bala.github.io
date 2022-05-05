import React from 'react'
import {category} from '../styles/home.module.css'

interface CategoryProps {
    children: JSX.Element | JSX.Element[];
}

const Category = (prop: CategoryProps): JSX.Element => {
  return (
    <section className={category}>
        {prop.children}
    </section>
  )
}

export default Category