import React from 'react'
import styles from './SearchInput.module.scss'

export interface ISearchInputProps {
  isMobile?: boolean
}

const SearchInput: React.FC<ISearchInputProps> = ({ isMobile = false }) => {
  return (
    <div className={styles.search}>
      <input className={styles.input} />
    </div>
  )
}

export default SearchInput
