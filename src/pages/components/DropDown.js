import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image';
import ArrowDown from "../../../public/chevron-down-solid.svg"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

function DropDown() {
    return (
        <div as="div" className="relative inline-block text-left col-start-8 xl:col-start-8 grid-col-span-1">
        <select className="bg-gray-100">
            <option>Projects</option>
            <option>Talent</option>
            <option>Jobs</option>
        </select>
        </div>
    )
}

export default DropDown