import React from 'react'
import styles from './SearchInput.module.scss'

export interface ISearchInputProps {
  isMobile: boolean
}

const SearchInput: React.FC<ISearchInputProps> = ({ isMobile = false }) => {
  return <input className={styles.input} />
}

export default SearchInput
