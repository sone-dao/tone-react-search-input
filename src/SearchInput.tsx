import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from './SearchInput.module.scss'

export interface ISearchInputProps {
  isMobile?: boolean
}

const SearchInput: React.FC<ISearchInputProps> = ({ isMobile = false }) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const router = useRouter()

  const handleClick = () => router.push(`/search?t=${searchTerm}`)

  return (
    <form
      className={styles.search}
      onSubmit={(e) => {
        e.preventDefault()
        console.log('submitted')
      }}
    >
      <input
        className={styles.input}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <input
        type="submit"
        className={styles.button}
        value="Search"
        onClick={() => handleClick()}
      />
    </form>
  )
}

export default SearchInput
