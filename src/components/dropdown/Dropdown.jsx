import React from 'react'

import Select, { components } from 'react-select'

import './Dropdown.scss'

export function Dropdown({ options, reverse }) {
    const DropdownIndicator = props => {
        return (
            components.DropdownIndicator && (
                <components.DropdownIndicator {...props}>
                    <p>+</p>
                </components.DropdownIndicator>
            )
        );
    }

    return (
        <Select
            menuIsOpen={1}
            placeholder={'111111'}
            isSearchable={false}
            components={{ DropdownIndicator }}
            className={reverse ? 'dropdown_reverse' : 'dropdown'}
            classNamePrefix={reverse ? 'dropdown_reverse' : 'dropdown'}
            options={options}
        />
    )
}
